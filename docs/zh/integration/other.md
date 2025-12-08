# Tinyflow 与 其他框架集成


## 1. 概述

Tinyflow 是一个**可扩展的 AI 工作流编排框架**，其核心设计哲学是**解耦 LLM 调用与工作流逻辑**。通过标准接口与注册机制，Tinyflow 可轻松集成任意主流 LLM 框架（如 Spring AI、LangChain4j、Agents-Flex）或自定义大模型客户端。

本文档面向**框架开发者**或**高级用户**，指导如何将**新的 LLM 框架**（无论是开源库还是私有模型 SDK）无缝接入 Tinyflow 生态，使 `LlmNode` 能够按需调用您提供的模型能力。



## 2. 集成架构总览

Tinyflow 的 LLM 集成基于以下三个核心组件：


- **`LlmNode`**：工作流中的 LLM 节点，由用户配置（`llmId`、提示词、参数等）
- **`LlmManager`**：全局单例（线程安全），管理所有 LLM 提供者
- **`LlmProvider`**（接口）：按 `modelId` 返回对应的 `Llm` 实现
- **`Llm`**（接口）：定义标准调用协议，由您实现具体适配逻辑

> ✅ 您只需实现 **`LlmProvider`** 和 **`Llm`**，即可完成集成。



## 3. 集成 3 步法

### 第一步：实现 `Llm` 接口（核心适配器）

创建您的适配器类，例如 `MyFrameworkLlm`，实现 `dev.tinyflow.core.llm.Llm` 接口：

```java
package com.yourcompany.tinyflow.adapter;

import dev.tinyflow.core.chain.Chain;
import dev.tinyflow.core.llm.Llm;
import dev.tinyflow.core.node.LlmNode;

public class MyFrameworkLlm implements Llm {

    // 1. 持有目标框架的模型客户端实例
    private YourChatModel yourModel;

    public void setYourModel(YourChatModel model) {
        this.yourModel = model;
    }

    @Override
    public String chat(MessageInfo messageInfo, ChatOptions options, LlmNode llmNode, Chain chain) {
        // 2. 将 Tinyflow 的 MessageInfo 转为目标框架的请求格式
        YourRequest request = convertToYourRequest(messageInfo, options);

        // 3. 调用目标框架
        YourResponse response = yourModel.invoke(request);

        // 4. 处理异常与空响应
        if (response == null || response.getContent() == null) {
            throw new RuntimeException("MyFrameworkLlm: Empty or null response");
        }

        // 5. 返回纯文本结果
        return response.getContent();
    }

    private YourRequest convertToYourRequest(MessageInfo info, ChatOptions opts) {
        // 实现转换逻辑，包括：
        // - 系统提示词（info.getSystemMessage()）
        // - 用户消息（info.getMessage()）
        // - 图像（info.getImages() → 多模态处理）
        // - 生成参数（opts.getTemperature(), getMaxTokens() 等）
    }
}
```

#### 关键注意事项：

- **必须返回非空字符串**：若模型返回空或错误，应抛出 `RuntimeException`
- **支持多模态**：`MessageInfo.getImages()` 返回图像 URL 或 Base64 列表，请根据目标框架能力处理
- **参数映射**：尽可能映射 `ChatOptions` 中的字段（temperature、maxTokens 等）
- **线程安全**：`Llm` 实例可能被多个线程调用，请确保线程安全（通常模型客户端本身是线程安全的）



### 第二步：实现 `LlmProvider`（模型注册器）

创建提供者类，用于按 `modelId` 返回对应的 `Llm` 实例：

```java
package com.yourcompany.tinyflow.provider;

import dev.tinyflow.core.llm.Llm;
import dev.tinyflow.core.llm.LlmProvider;

public class MyFrameworkLlmProvider implements LlmProvider {

    private final String modelId;           // 如 "my-llm-prod"
    private final YourChatModel yourModel;  // 目标框架的模型客户端

    public MyFrameworkLlmProvider(String modelId, YourChatModel model) {
        this.modelId = modelId;
        this.yourModel = model;
    }

    @Override
    public Llm getChatModel(Object requestedModelId) {
        // 3.1 严格匹配 modelId
        if (modelId.equals(requestedModelId)) {
            MyFrameworkLlm llm = new MyFrameworkLlm();
            llm.setYourModel(this.yourModel);
            return llm;
        }
        // 3.2 未匹配则返回 null，LlmManager 会尝试下一个 Provider
        return null;
    }
}
```

> ✅ 支持一个 Provider 管理多个 `modelId`（例如通过 `Map<String, YourChatModel>`）



### 第三步：注册到 `LlmManager`

在应用启动时，将您的 `LlmProvider` 注册到全局管理器：

```java
// 例如在 Spring Boot 的 @PostConstruct 中
@PostConstruct
public void registerMyLlm() {
    YourChatModel model = new YourChatModel(...); // 初始化您的模型客户端
    LlmManager.getInstance().registerProvider(
        new MyFrameworkLlmProvider("my-custom-llm", model)
    );
}
```

> 🔁 可注册多个 Provider，`LlmManager` 按注册顺序查找，**首个匹配者生效**。




## 4. 高级集成建议

### 4.1 多模态支持

若您的框架支持图像输入，请正确处理 `MessageInfo.getImages()`：

```java
List<String> images = messageInfo.getImages();
if (images != null && !images.isEmpty()) {
    for (String image : images) {
        if (image.startsWith("data:image/")) {
            // Base64 图像，直接使用
        } else if (image.startsWith("http")) {
            // URL 图像，确保目标模型支持公网访问
        } else {
            // 本地路径？需自行处理文件读取
        }
        // 构建多模态消息（如 LangChain4j 的 ImageContent）
    }
}
```

### 4.2 参数透传优化

若目标框架支持运行时参数（如 temperature），请映射 `ChatOptions`：

```java
YourOptions yourOpts = YourOptions.builder()
    .temperature(options.getTemperature() != null ? options.getTemperature().doubleValue() : null)
    .maxTokens(options.getMaxTokens())
    .stopSequences(options.getStop())
    .build();
```

> ⚠️ 若不支持（如 LangChain4j），请在创建 `YourChatModel` 时预设参数。

### 4.3 异常标准化

将目标框架的异常转换为统一 `RuntimeException`，便于上层处理：

```java
try {
    return yourModel.call(request);
} catch (YourModelException e) {
    throw new RuntimeException("MyFrameworkLlm error: " + e.getMessage(), e);
}
```

### 4.4 性能与资源管理

- **复用模型客户端**：`YourChatModel` 应为单例或池化实例，避免重复创建 HTTP 客户端
- **支持销毁**：若需清理资源，可实现 `AutoCloseable` 并在应用关闭时调用



## 5. 模块化发布（可选）

若您希望将集成封装为独立模块（如 `tinyflow-support-yourframework`），请参考以下 `pom.xml` 结构：

```xml
<project>
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>dev.tinyflow</groupId>
        <artifactId>tinyflow-java</artifactId>
        <version>2.0.0-beta.3</version>
    </parent>

    <artifactId>tinyflow-support-yourframework</artifactId>
    <name>tinyflow-support-yourframework</name>

    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
    </properties>

    <dependencies>
        <dependency>
            <groupId>dev.tinyflow</groupId>
            <artifactId>tinyflow-core</artifactId>
        </dependency>
        <!-- 引入您的框架依赖 -->
        <dependency>
            <groupId>com.yourcompany</groupId>
            <artifactId>your-llm-sdk</artifactId>
            <version>1.0.0</version>
        </dependency>
    </dependencies>
</project>
```

> ✅ 用户只需引入此模块，即可自动获得 Tinyflow 集成能力。



## 6. 验证清单

在完成集成后，请验证以下场景：

| 场景                | 预期行为 |
|-----------------|--|
| 正常文本生成            | 返回非空字符串 |
| 系统提示词             | 被正确传递 |
| 图像输入              | 多模态模型能识别图像内容 |
| `outType = "json"` | 自动解析 JSON（无需您处理） |
| 模型 ID 不存在         | 抛出 “Can not find llm” 异常 |
| 模型返回空             | 抛出 “Can not get response” 异常 |

