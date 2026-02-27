# SmartEVPedia

中国智能电动车软件与智驾演进百科

## 项目简介

SmartEVPedia 是一个专注于收集和整理中国市场上主流智能电动车的座舱和自动驾驶更新信息的开源静态网站。

## 技术架构

- **静态站点生成器**: Jekyll
- **部署平台**: GitHub Pages
- **数据格式**: YAML
- **自动化部署**: GitHub Actions

## 本地开发

```bash
# 安装依赖
bundle install

# 本地运行
bundle exec jekyll serve

# 访问 http://localhost:4000/SmartEVPedia/
```

## 数据结构

数据存储在 `_data/brands/` 目录下，按品牌组织：

```
_data/
  brands/
    lixiang/
      models.yml    # 车型数据
```

## 贡献指南

1. Fork 本仓库
2. 创建分支 (`git checkout -b feature/your-feature`)
3. 提交更改 (`git commit -am 'Add some feature'`)
4. 推送到分支 (`git push origin feature/your-feature`)
5. 创建 Pull Request

## 数据原则

- 以官方信息为第一信源
- 硬件配置取最高配置版本
- 明确区分车型、OS、智驾系统的独立更新
- 不收录非官方信息

## 许可证

MIT License
