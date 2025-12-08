# Tinyflow 与 LangChain4j 集成

## 1. 概述

Tinyflow 是一个轻量级、模块化的 AI 工作流编排框架，通过 `LlmNode`、`Chain` 和 `ChainState` 构建结构清晰、可复用、可串行化的 LLM 应用流程。

LangChain4j 是 LangChain 的 Java 实现，提供统一的 `ChatModel` 抽象，支持 OpenAI、Azure OpenAI、Ollama、Anthropic、Google Vertex AI、本地模型（如 Llama.cpp）等数十种大模型后端，并原生支持多模态、工具调用、内存管理等高级能力。

通过 `tinyflow-support-langchain4j` 模块，Tinyflow 可无缝集成 LangChain4j 的 `ChatModel` 实例，使工作流中的 `LlmNode` 能够直接调用 LangChain4j 所管理的大模型，充分利用其多模态、结构化输出、流式响应等特性。



## 2. 架构集成原理

Tinyflow 定义了标准 `Llm` 接口，而 `Langchain4jLlm` 是其实现类，负责将 Tinyflow 的调用参数（如 `MessageInfo`、`ChatOptions`）转换为 LangChain4j 的 `ChatMessage` 列表，并委托给 `ChatModel.chat()` 执行。

### 组件关系图


- **`LlmNode`**：配置模型 ID、提示词、图像、输出格式等
- **`LlmManager`**：全局单例，管理所有 LLM 提供者
- **`LlmProvider`**：按 `modelId` 返回对应的 `Llm` 实例（如 `Langchain4jLlm`）
- **`Langchain4jLlm`**：桥接 Tinyflow 与 LangChain4j



## 3. 依赖配置

在 Maven 项目中添加以下依赖：

```xml
<dependency>
    <groupId>dev.tinyflow</groupId>
    <artifactId>tinyflow-support-langchain4j</artifactId>
    <version>2.0.0-beta.3</version>
</dependency>
```

> 该模块自动引入：
> - `tinyflow-core`
> - `langchain4j`（核心模块）

### 环境要求
- **JDK 17+**：LangChain4j 仅支持 JDK 17 及以上版本
- 若使用特定模型（如 OpenAI、Ollama），需额外引入对应适配器，例如：
  ```xml
  <dependency>
      <groupId>dev.langchain4j</groupId>
      <artifactId>langchain4j-open-ai</artifactId>
  </dependency>
  ```



## 4. 集成步骤

### 4.1 创建 LangChain4j 的 `ChatModel`

以 OpenAI 为例：

```java
import dev.langchain4j.model.chat.ChatModel;
import dev.langchain4j.model.openai.OpenAiChatModel;

ChatModel chatModel = OpenAiChatModel.builder()
    .apiKey("sk-xxxx")
    .modelName("gpt-4o")
    .temperature(0.7)
    .build();
```

LangChain4j 支持丰富的模型后端，例如：
- `OllamaChatModel`
- `AzureOpenAiChatModel`
- `AnthropicChatModel`
- `GoogleVertexAiChatModel`
- 本地 `LlamaCppChatModel` 等

### 4.2 实现 `LlmProvider` 并注册

```java
import dev.tinyflow.core.llm.Llm;
import dev.tinyflow.core.llm.LlmProvider;
import dev.tinyflow.langchain4j.provider.Langchain4jLlm;

public class LangChain4jLlmProvider implements LlmProvider {

    private final String modelId;
    private final ChatModel chatModel;

    public LangChain4jLlmProvider(String modelId, ChatModel chatModel) {
        this.modelId = modelId;
        this.chatModel = chatModel;
    }

    @Override
    public Llm getChatModel(Object requestedModelId) {
        if (modelId.equals(requestedModelId)) {
            Langchain4jLlm llm = new Langchain4jLlm();
            llm.setChatModel(chatModel);
            return llm;
        }
        return null;
    }
}
```

#### 注册到 Tinyflow（应用启动时执行）：

```java
LlmManager.getInstance().registerProvider(
    new LangChain4jLlmProvider("lc4j-gpt4o", chatModel)
);
```

> ✅ 支持注册多个模型，`LlmManager` 按注册顺序匹配首个 `modelId` 匹配项。




## 5. 参考资料

- [LangChain4j 官方文档](https://docs.langchain4j.dev/)
