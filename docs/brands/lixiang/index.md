---
layout: brand
title: "理想汽车"
brand: lixiang
---

# 理想汽车 Li Auto

理想汽车是中国领先的新能源汽车制造商，专注于增程式电动车（EREV）和纯电动车（BEV）。

## 车型概览

{% for model in site.data.brands.lixiang.models %}
### [{{ model.name }}]({{ model.id }}/)
- **平台**: {% if model.platform == "range-extender" %}增程式{% else %}纯电动{% endif %}
- **上市时间**: {{ model.launch_date }}
- **尺寸**: {{ model.dimensions.length }} × {{ model.dimensions.width }} × {{ model.dimensions.height }}
- **轴距**: {{ model.dimensions.wheelbase }}
- **电池**: {{ model.battery }}
- **智驾系统**: {{ model.hardware.ad_sensor_suite }}
{% endfor %}

## 智驾系统演进

| 系统 | 首发车型 | 发布时间 | 主要特性 |
|------|----------|----------|----------|
| AD 1.0 | 理想ONE | 2019年 | 基础L2辅助驾驶 |
| AD 2.0 | 理想ONE | 2021年 | NOA导航辅助驾驶 |
| AD Max 2.0 | 理想L9 | 2022年 | 城市NOA（北京/上海） |
| AD Max 3.0 | 理想L7 | 2023年 | 全国高速NOA，城市NOA扩展 |
| AD Max 4.0 | 理想MEGA | 2024年 | 端到端智驾，800V平台 |

## OS版本历史

{% assign all_versions = "" | split: "" %}
{% for model in site.data.brands.lixiang.models %}
  {% for os in model.os_versions %}
    {% assign version_with_date = os.release_date | append: "|" | append: os.version | append: "|" | append: model.name %}
    {% assign all_versions = all_versions | push: version_with_date %}
  {% endfor %}
{% endfor %}

{% assign sorted_versions = all_versions | sort | reverse %}
{% for version_entry in sorted_versions %}
  {% assign parts = version_entry | split: "|" %}
  {% assign date = parts[0] %}
  {% assign version = parts[1] %}
  {% assign model = parts[2] %}
- **{{ date }}**: {{ version }} ({{ model }})
{% endfor %}

## 数据说明

- 所有数据基于理想汽车官方发布信息
- 硬件配置为各车型最高配置版本
- OS版本信息包含主要功能更新
- 持续更新中...

[查看GitHub仓库](https://github.com/hkgood/SmartEVPedia)
