# Tinyflow 与 Agents-Flex 集成

## 1. 概述


Agents-Flex 是一个强大的开源智能体开发框架，提供统一的 `ChatModel` 抽象，支持 OpenAI、Claude、千问、Ollama 等多种模型，并具备多模态、函数调用、流式响应等能力。

通过 `tinyflow-support-agentsflex` 模块，开发者可将 **Agents-Flex 的 `ChatModel` 实例注册为 Tinyflow 的 LLM 提供者（LlmProvider）**，从而在 `LlmNode` 中按 `llmId` 动态调用对应的大模型，实现无缝集成。



## 2. 架构设计

### 2.1 核心组件关系

- **`LlmNode`**：工作流中的 LLM 节点，配置 `llmId`、提示词、参数等。
- **`LlmManager`**：全局单例，管理所有 LLM 提供者。
- **`LlmProvider`**：接口，用于根据 `modelId` 返回对应的 `Llm` 实例。
- **`AgentsFlexLlm`**：适配实现，将 Tinyflow 的调用协议转为 Agents-Flex 的 `ChatModel.chat()` 调用。



## 3. 集成步骤

### 3.1 添加依赖

```xml
<dependency>
    <groupId>dev.tinyflow</groupId>
    <artifactId>tinyflow-support-agentsflex</artifactId>
    <version>2.0.0-beta.4</version>
</dependency>
```

> 该模块自动引入 `tinyflow-core` 和 `agents-flex-bom`，无需额外声明版本。



### 3.2 创建 Agents-Flex 的 `ChatModel`

以 OpenAI 为例：

```java
import com.agentsflex.core.model.chat.ChatModel;
import com.agentsflex.openai.OpenAiChatModel;

ChatModel openaiModel = OpenAiChatConfig.builder()
    .apiKey("sk-xxxx")
    .modelName("gpt-4o")
    .buildModel();
```

支持所有 Agents-Flex 内置或自定义的 `ChatModel` 实现（如 Ollama、DashScope、DeepSeek 等）。



### 3.3 实现 `LlmProvider` 并注册

```java
import dev.tinyflow.core.llm.Llm;
import dev.tinyflow.core.llm.LlmProvider;
import dev.tinyflow.agentsflex.provider.AgentsFlexLlm;

public class MyAgentsFlexProvider implements LlmProvider {

    @Override
    public Llm getChatModel(Object requestedModelId) {
        AgentsFlexLlm llm = new AgentsFlexLlm();
        
        // 通过 requestedModelId 去数据库操作 LLM 配置信息
        // 并创建一个 chatModel
        ChatModel chatModel = createChatModel(requestedModelId);
        
        llm.setChatModel(chatModel);
        return llm;
    }
}
```

**注册到全局管理器**（建议在应用启动时执行）：

```java
LlmManager.getInstance().registerProvider(
    new MyAgentsFlexProvider()
);
```

> ✅ 支持注册多个 Provider，`LlmManager` 按注册顺序查找，首个匹配者生效。






## 5. 参考资料

- [Agents-Flex 官方文档](https://agentsflex.com/zh/chat/chat-model.html)

