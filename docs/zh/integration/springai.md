# Tinyflow 与 Spring AI 集成

## 1. 概述

Tinyflow 是一个轻量级、模块化的 AI 工作流编排框架，支持通过节点（Node）与链（Chain）构建可复用、可串行化的 LLM 应用流程。

Spring AI 是 Spring 官方推出的 LLM 抽象层，提供统一的 `ChatModel` 接口，支持 OpenAI、Azure OpenAI、Ollama、Anthropic、Gemini 等主流大模型服务商，并具备良好的 Spring Boot 集成能力。

通过 `tinyflow-support-springai` 模块，Tinyflow 可无缝集成 Spring AI 的 `ChatModel` 实例，使工作流中的 `LlmNode` 能够直接调用 Spring AI 所管理的大模型，实现企业级 LLM 应用的快速构建与部署。



## 2. 架构集成原理

Tinyflow 通过 `Llm` 接口抽象 LLM 调用行为，而 `SpringAiLlm` 是该接口的官方适配实现，负责将 Tinyflow 的调用参数转换为 Spring AI 的 `Prompt` 和 `ChatOptions`，并委托给 `ChatModel.call()` 执行。

### 组件关系图

- **`LlmNode`**：配置模型 ID、提示词、参数等
- **`LlmManager`**：全局单例，管理所有 LLM 提供者
- **`LlmProvider`**：按 `modelId` 返回对应的 `Llm` 实例（如 `SpringAiLlm`）
- **`SpringAiLlm`**：桥接 Tinyflow 与 Spring AI



## 3. 依赖配置

在 Maven 项目中添加以下依赖：

```xml
<dependency>
    <groupId>dev.tinyflow</groupId>
    <artifactId>tinyflow-support-springai</artifactId>
    <version>2.0.0-beta.4</version>
</dependency>
```

> 该模块自动引入：
> - `tinyflow-core`
> - `spring-ai-core`（需确保 Spring Boot 3.x + JDK 17+ 环境）

### 注意事项
- **JDK 要求**：Spring AI 仅支持 **JDK 17+**，因此 `tinyflow-support-springai` 的编译目标为 JDK 17。
- 若项目使用 JDK 8，请使用 `tinyflow-support-agentsflex` 而非本模块。
- 若项目需要支持更高性能，也请使用 `tinyflow-support-agentsflex` 模块。



## 4. 集成步骤

### 4.1 配置 Spring AI 的 `ChatModel`

在 Spring Boot 应用中，通过 `application.yml` 或 Java 配置声明模型：

#### 示例：OpenAI（application.yml）
```yaml
spring:
  ai:
    openai:
      api-key: ${OPENAI_API_KEY}
      chat:
        options:
          model: gpt-4o
```

#### 或通过 Java Bean（推荐用于多模型场景）：
```java
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.ai.openai.api.OpenAiApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AiConfig {

    @Bean("openaiGpt4o")
    public ChatModel openaiGpt4o() {
        return new OpenAiChatModel(
            new OpenAiApi(System.getenv("OPENAI_API_KEY")),
            OpenAiChatOptions.builder()
                .withModel("gpt-4o")
                .withTemperature(0.7)
                .build()
        );
    }
}
```



### 4.2 实现 `LlmProvider` 并注册

创建一个提供者，将 Spring AI 的 `ChatModel` 封装为 `SpringAiLlm`：

```java
import dev.tinyflow.core.llm.Llm;
import dev.tinyflow.core.llm.LlmProvider;
import dev.tinyflow.springai.provider.SpringAiLlm;

public class SpringAiLlmProvider implements LlmProvider {

    private final String modelId;
    private final ChatModel chatModel;

    public SpringAiLlmProvider(String modelId, ChatModel chatModel) {
        this.modelId = modelId;
        this.chatModel = chatModel;
    }

    @Override
    public Llm getChatModel(Object requestedModelId) {
        if (modelId.equals(requestedModelId)) {
            SpringAiLlm llm = new SpringAiLlm();
            llm.setChatModel(chatModel);
            return llm;
        }
        return null;
    }
}
```

#### 注册到 Tinyflow（建议在 `@PostConstruct` 或 `CommandLineRunner` 中执行）：

```java
@Autowired
@Qualifier("openaiGpt4o")
private ChatModel openaiModel;

@PostConstruct
public void registerLlmProviders() {
    LlmManager.getInstance().registerProvider(
        new SpringAiLlmProvider("spring-ai-gpt4o", openaiModel)
    );
}
```

> ✅ 支持注册多个 `ChatModel`，按 `modelId` 动态路由。


## 5. 特性支持说明

### 5.1 系统提示词（System Message）
- ✅ 完全支持，通过 `SystemMessage` 传递

### 5.2 多模态（图像输入）
- ⚠️ **当前仅以文本形式附加图像 URL**
- `SpringAiLlm` 会将图像 URL 拼接为用户消息的一部分：
  ```
  用户消息内容
  包含以下图片：
  https://example.com/image1.jpg
  https://example.com/image2.jpg
  ```
- **原因**：Spring AI 当前（截至 2025 年）对多模态的支持仍在演进中，部分模型（如 OpenAI）需通过 `UserMessage` 的 `Media` 构造，但 Tinyflow 的 `SpringAiLlm` 暂未实现该高级结构。
- **解决方案**：若需完整多模态支持，建议使用 `Agents-Flex` 集成，或等待 Spring AI 官方进一步完善。

### 5.3 生成参数映射

| Tinyflow (`ChatOptions`) | Spring AI (`ChatOptions`) | 支持情况 |
|--|-|--|
| `temperature`            | `temperature` (double)     | ✅ |
| `topP`                   | `topP` (double)            | ✅ |
| `topK`                   | `topK` (Integer)           | ✅（部分模型支持）|
| `maxTokens`              | `maxTokens`                | ✅ |
| `stop`                   | `stopSequences`            | ✅ |
| `seed`                   | —                          | ❌（Spring AI 暂未统一支持）|

> 注：`seed` 参数在 `SpringAiLlm` 中被忽略（代码中已标注 `TODO`）。




## 6. 示例：完整 Spring Boot 集成

```java
@SpringBootApplication
public class TinyflowSpringAiApp {

    public static void main(String[] args) {
        SpringApplication.run(TinyflowSpringAiApp.class, args);
    }

    @Bean
    @Qualifier("gpt4o")
    public ChatModel gpt4o(OpenAiApi openAiApi) {
        return new OpenAiChatModel(openAiApi,
            OpenAiChatOptions.builder().withModel("gpt-4o").build());
    }

    @Component
    public static class LlmInitializer {

        @Autowired
        @Qualifier("gpt4o")
        private ChatModel gpt4oModel;

        @PostConstruct
        public void init() {
            LlmManager.getInstance().registerProvider(
                new SpringAiLlmProvider("gpt4o", gpt4oModel)
            );
        }
    }
}
```



## 7. 参考资料

- [Spring AI 官方文档](https://docs.spring.io/spring-ai/reference/index.html)
