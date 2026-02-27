---
layout: default
title: "理想汽车 - SmartEVPedia"
---

<div class="hero" style="background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(30, 136, 229, 0.1));">
  <h1>理想汽车 Li Auto</h1>
  <p>中国领先的新能源汽车制造商，专注于增程式电动车（EREV）和纯电动车（BEV）</p>
</div>

<div class="brand-card">
  <div class="brand-header">
    <h2>品牌概览</h2>
    <div class="brand-stats">
      <div class="stat">
        <div class="stat-value">8</div>
        <div class="stat-label">在售车型</div>
      </div>
      <div class="stat">
        <div class="stat-value">2019</div>
        <div class="stat-label">品牌创立</div>
      </div>
      <div class="stat">
        <div class="stat-value">AD Max 4.0</div>
        <div class="stat-label">最新智驾</div>
      </div>
      <div class="stat">
        <div class="stat-value">OS 7.0</div>
        <div class="stat-label">最新OS</div>
      </div>
    </div>
  </div>

  <div class="alert alert-info">
    <strong>数据说明</strong> - 所有信息基于理想汽车官方发布，硬件配置为各车型最高配置版本，持续更新中。
  </div>
</div>

<div class="brand-card">
  <div class="brand-header">
    <h2>车型矩阵</h2>
    <div>
      <span class="tag" style="background: #FF6B35; color: white;">增程式</span>
      <span class="tag" style="background: #1E88E5; color: white;">纯电动</span>
    </div>
  </div>

  <div class="models-grid">
    {% for model in site.data.brands.lixiang.models %}
    <a href="{{ model.id }}/" class="model-card">
      <div class="model-image" style="background: {% if model.platform == 'range-extender' %}linear-gradient(135deg, #FF6B35, #FF8E53){% else %}linear-gradient(135deg, #1E88E5, #64B5F6){% endif %};">
        <span>{{ model.name | slice: 2, 2 }}</span>
        <div class="model-badge" style="background: {% if model.platform == 'range-extender' %}#FF6B35{% else %}#1E88E5{% endif %}">
          {% if model.platform == 'range-extender' %}增程{% else %}纯电{% endif %}
        </div>
      </div>
      <div class="model-content">
        <h3>{{ model.name }}</h3>
        <div class="model-specs">
          <div class="spec-item">
            <div class="spec-label">上市时间</div>
            <div class="spec-value">{{ model.launch_date | date: "%Y年%m月" }}</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">尺寸</div>
            <div class="spec-value">{{ model.dimensions.length | slice: 0, 4 }}</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">智驾系统</div>
            <div class="spec-value">{{ model.hardware.ad_sensor_suite }}</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">电池</div>
            <div class="spec-value">{{ model.battery | truncate: 8 }}</div>
          </div>
        </div>
        <div style="margin-top: 1rem;">
          <small>OS版本: {{ model.os_versions | size }} 个</small>
        </div>
      </div>
    </a>
    {% endfor %}
  </div>
</div>

<div class="brand-card">
  <div class="brand-header">
    <h2>智驾系统演进</h2>
  </div>

  <table class="data-table">
    <thead>
      <tr>
        <th>系统</th>
        <th>首发车型</th>
        <th>发布时间</th>
        <th>硬件配置</th>
        <th>主要特性</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>AD 1.0</strong></td>
        <td>理想ONE</td>
        <td>2019年</td>
        <td>Mobileye EyeQ4</td>
        <td>基础L2辅助驾驶，自适应巡航，车道保持</td>
      </tr>
      <tr>
        <td><strong>AD 2.0</strong></td>
        <td>理想ONE</td>
        <td>2021年</td>
        <td>地平线征程3</td>
        <td>NOA导航辅助驾驶，自动变道，智能泊车</td>
      </tr>
      <tr>
        <td><strong>AD Max 2.0</strong></td>
        <td>理想L9</td>
        <td>2022年</td>
        <td>双英伟达Orin-X + 激光雷达</td>
        <td>城市NOA（北京/上海），智能泊车2.0</td>
      </tr>
      <tr>
        <td><strong>AD Max 3.0</strong></td>
        <td>理想L7</td>
        <td>2023年</td>
        <td>双英伟达Orin-X + 激光雷达</td>
        <td>全国高速NOA，城市NOA扩展至50城</td>
      </tr>
      <tr>
        <td><strong>AD Max 4.0</strong></td>
        <td>理想MEGA</td>
        <td>2024年</td>
        <td>双英伟达Orin-X + 激光雷达</td>
        <td>端到端智驾，800V平台支持，全国城市NOA</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="brand-card">
  <div class="brand-header">
    <h2>OS版本时间线</h2>
  </div>

  <div class="os-timeline">
    {% assign all_versions = "" | split: "" %}
    {% for model in site.data.brands.lixiang.models %}
      {% for os in model.os_versions %}
        {% assign version_with_date = os.release_date | append: "|" | append: os.version | append: "|" | append: model.name | append: "|" | append: os.ad_system %}
        {% assign all_versions = all_versions | push: version_with_date %}
      {% endfor %}
    {% endfor %}
    
    {% assign sorted_versions = all_versions | sort | reverse %}
    {% for version_entry in sorted_versions %}
      {% assign parts = version_entry | split: "|" %}
      {% assign date = parts[0] %}
      {% assign version = parts[1] %}
      {% assign model = parts[2] %}
      {% assign ad_system = parts[3] %}
      
      <div class="os-version-card">
        <div class="os-version-header">
          <div class="os-version-title">{{ version }}</div>
          <div class="os-version-date">{{ date | date: "%Y年%m月%d日" }}</div>
        </div>
        <div style="margin-bottom: 1rem;">
          <span class="tag">{{ model }}</span>
          <span class="tag">{{ ad_system }}</span>
        </div>
        <div class="features-grid">
          {% assign model_data = site.data.brands.lixiang.models | where: "id", model | first %}
          {% for os_version in model_data.os_versions %}
            {% if os_version.version == version %}
              {% for feature in os_version.features %}
                <div class="feature-item">{{ feature }}</div>
              {% endfor %}
            {% endif %}
          {% endfor %}
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<div class="brand-card">
  <div class="brand-header">
    <h2>数据来源与更新</h2>
  </div>

  <div class="alert alert-warning">
    <strong>重要提示</strong> - 本页面数据基于理想汽车官方公开信息整理，具体配置以官方最新发布为准。
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
    <div class="info-item">
      <div class="info-label">主要信源</div>
      <div class="info-value">理想汽车官网、发布会、技术白皮书</div>
    </div>
    <div class="info-item">
      <div class="info-label">更新频率</div>
      <div class="info-value">官方发布后及时更新</div>
    </div>
    <div class="info-item">
      <div class="info-label">最后更新</div>
      <div class="info-value">{{ site.time | date: "%Y年%m月%d日" }}</div>
    </div>
    <div class="info-item">
      <div class="info-label">GitHub</div>
      <div class="info-value"><a href="https://github.com/hkgood/SmartEVPedia" target="_blank">查看仓库</a></div>
    </div>
  </div>
</div>
