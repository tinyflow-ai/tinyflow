# Tinyflow 与 Java 项目集成



## 安装

通过 Maven 安装 Tinyflow 的 Java 依赖：

```xml
<dependency>
    <groupId>dev.tinyflow</groupId>
    <artifactId>tinyflow-java-core</artifactId>
    <version>0.0.2</version>
</dependency>
```
注意：以上的 `tinyflow-java-core` 可能不是最新的，请到 [GitHub](https://github.com/tinyflow-ai/tinyflow-java) 查看最新版本。

## 使用

通过前端 Tinyflow 框架，得到导出的 JSON 内容，并初始化 Tinyflow：

```java
String flowDataJson = "从前端传递的流程数据";
Tinyflow tinyflow = new Tinyflow(flowDataJson);

Map<String, Object> variables = new HashMap<>();
variables.put("name", "张三");
variables.put("age", 18);

tinyflow.toChain().execute(variables);
```


## 常见问题

**问题1：如何获得前端的数据？**
> 答：在前端中，可以通过 `tinyflow.getData()` 方法获得获得设计的工作流数据，然后通过 Http 请求发送给后端，后端接收后，再初始化 Tinyflow。
> 
> 在这个过程中，Tinyflow 不参与 Http 请求和发送数据的过程，需要开发者自己实现，也正因为如此，Tinyflow 的前端和后端，才能不受限与任何技术框架。



**问题2：使用若依框架时引入 `tinyflow-java-core` 导致冲突无法启动系统**
> 答：若依使用的 `logback` 与 Tinyflow 的 `slf4j-simple` 冲突导致系统无法启动。
> 需要排除 `SLF4J-Simple`、`log4j-slf4j-impl`、`slf4j-reload4j`。


```xml
<dependency>
    <groupId>dev.tinyflow</groupId>
    <artifactId>tinyflow-java-core</artifactId>
    <version>0.0.2</version>
    <exclusions>
        <!-- 排除 SLF4J-Simple -->
        <exclusion>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-simple</artifactId>
        </exclusion>
        <!-- 排除 Log4j2 -->
        <exclusion>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-slf4j-impl</artifactId>
        </exclusion>
        <!-- 排除 Reload4j -->
        <exclusion>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-reload4j</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```
