# Chain Definition Repository 开发设计文档

<div v-pre>

## 1. 概述

`ChainDefinitionRepository` 是 Tinyflow AI 工作流编排框架中负责**加载与管理 `ChainDefinition`（工作流定义）** 的核心存储抽象。它为工作流引擎提供了**定义隔离、可扩展存储、热加载**的能力，是实现**动态工作流、多租户支持、版本管理**等功能的基础设施。

本文档详细阐述 `ChainDefinitionRepository` 的**接口契约、典型实现、扩展模型与最佳实践**，帮助开发者构建灵活、高效的工作流定义管理层。



## 2. 接口设计

### 2.1 核心接口定义

```java
public interface ChainDefinitionRepository {
    /**
     * 根据定义 ID 加载 ChainDefinition
     * @param id 工作流定义唯一标识
     * @return ChainDefinition 实例，若不存在返回 null
     */
    ChainDefinition getChainDefinitionById(String id);
}
```

### 2.2 设计原则

- **按需加载**：仅在需要时加载定义（惰性加载）
- **只读契约**：返回的 `ChainDefinition` 应视为不可变对象
- **线程安全**：实现需保证多线程并发访问安全

> 接口**不包含保存/更新方法**，因 `ChainDefinition` 被视为静态配置，更新应通过外部配置管理完成。



## 3. 典型实现模式

### 3.1 内存存储（开发/测试）

```java
public class InMemoryChainDefinitionRepository implements ChainDefinitionRepository {
    private final Map<String, ChainDefinition> definitions = new ConcurrentHashMap<>();

    public void addDefinition(ChainDefinition def) {
        definitions.put(def.getId(), def);
    }

    @Override
    public ChainDefinition getChainDefinitionById(String id) {
        return definitions.get(id);
    }
}
```

**适用场景**：
- 单元测试
- 演示应用
- 静态定义（启动时加载，运行时不变）

### 3.2 文件系统存储

```java
public class FileChainDefinitionRepository implements ChainDefinitionRepository {
    private final Path definitionsDir;

    @Override
    public ChainDefinition getChainDefinitionById(String id) {
        Path file = definitionsDir.resolve(id + ".json");
        if (!Files.exists(file)) return null;
        String json = Files.readString(file);
        return JSON.parseObject(json, ChainDefinition.class);
    }
}
```

**适用场景**：
- 本地开发
- GitOps 工作流（定义存于 Git 仓库）
- 轻量级部署

### 3.3 数据库存储（生产）

```java
public class DatabaseChainDefinitionRepository implements ChainDefinitionRepository {
    private final JdbcTemplate jdbcTemplate;

    @Override
    public ChainDefinition getChainDefinitionById(String id) {
        String sql = "SELECT definition_json FROM chain_definitions WHERE id = ?";
        String json = jdbcTemplate.queryForObject(sql, String.class, id);
        return ChainDefinition.fromJSON(json);
    }
}
```

**适用场景**：
- 多租户 SaaS
- 动态工作流管理后台
- 需要 ACL 控制的场景

### 3.4 配置中心集成

```java
public class NacosChainDefinitionRepository implements ChainDefinitionRepository {
    private final ConfigService configService;

    @Override
    public ChainDefinition getChainDefinitionById(String id) {
        String json = configService.getConfig(id, "TINYFLOW_GROUP", 3000);
        return JSON.parseObject(json, ChainDefinition.class);
    }
}
```

**适用场景**：
- 微服务架构
- 需要动态刷新定义
- 与现有配置体系集成





## 4. 最佳实践

### 4.1 存储选型建议

| 场景 | 推荐方案 | 说明             |
|-|-|----------------|
| **开发测试** | `InMemoryChainDefinitionRepository` | 启动时加载，简单高效     |
| **单机生产** | 文件系统 + WatchService | 支持 GitOps，易于审计 |
| **微服务** | Nacos/Apollo + 本地缓存 | 动态刷新，低延迟       |
| **多租户 SaaS** | 数据库（分表/字段隔离） | 强一致性，ACL 控制    |
| **高并发** | Redis 缓存 + DB 回源 | 降低 DB 压力       |

### 4.2 性能优化

- **本地缓存**：对高频访问的定义使用 `Caffeine` 缓存
  ```java
  LoadingCache<String, ChainDefinition> cache = Caffeine.newBuilder()
      .maximumSize(1000)
      .expireAfterWrite(10, TimeUnit.MINUTES)
      .build(id -> loadFromDatabase(id));
  ```
- **批量加载**：若需加载多个定义，提供 `getChainDefinitionsByIds(List<String>)` 扩展
- **懒序列化**：大定义按需反序列化，避免启动时内存 spike



## 5. 自定义实现示例（带缓存）

```java
public class CachingChainDefinitionRepository implements ChainDefinitionRepository {
    private final ChainDefinitionRepository delegate;
    private final Cache<String, ChainDefinition> cache;

    public CachingChainDefinitionRepository(ChainDefinitionRepository delegate) {
        this.delegate = delegate;
        this.cache = Caffeine.newBuilder()
            .maximumSize(100)
            .expireAfterWrite(5, TimeUnit.MINUTES)
            .build();
    }

    @Override
    public ChainDefinition getChainDefinitionById(String id) {
        return cache.get(id, k -> {
            ChainDefinition def = delegate.getChainDefinitionById(k);
            if (def == null) {
                throw new CacheLoader.InvalidCacheLoadException("Definition not found: " + k);
            }
            return def;
        });
    }

    // 用于外部触发缓存刷新
    public void invalidate(String id) {
        cache.invalidate(id);
    }
}
```



## 6. 总结

`ChainDefinitionRepository` 是 Tinyflow 工作流引擎的**定义管理基石**，其简洁的接口设计与灵活的扩展模型，使得开发者能够根据业务需求选择合适的存储与管理策略。无论是内存、文件、数据库还是配置中心，都能无缝集成，为 AI 工作流提供**灵活、可靠、高效**的定义加载能力。

</div>
