---
layout: default
title: "SmartEVPedia - 中国智能电动车软件与智驾演进百科"
---

<div class="hero">
  <h1>SmartEVPedia</h1>
  <p>中国智能电动车软件与智驾演进百科</p>
  <div style="margin-top: 2rem;">
    <a href="#brands" class="btn">探索品牌</a>
    <a href="https://github.com/hkgood/SmartEVPedia" class="btn btn-secondary" target="_blank">参与贡献</a>
  </div>
</div>

<div class="brand-card">
  <div class="brand-header">
    <h2>项目简介</h2>
    <div class="brand-stats">
      <div class="stat">
        <div class="stat-value">7+</div>
        <div class="stat-label">覆盖品牌</div>
      </div>
      <div class="stat">
        <div class="stat-value">50+</div>
        <div class="stat-label">车型数据</div>
      </div>
      <div class="stat">
        <div class="stat-value">实时</div>
        <div class="stat-label">持续更新</div>
      </div>
    </div>
  </div>

  <h3>核心目标</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
    <div class="info-item">
      <div class="info-label">车型信息汇总</div>
      <div class="info-value">收集各品牌车型的基本尺寸、硬件配置</div>
    </div>
    <div class="info-item">
      <div class="info-label">软件迭代跟踪</div>
      <div class="info-value">记录OS版本发布时间和新增功能</div>
    </div>
    <div class="info-item">
      <div class="info-label">智驾系统演进</div>
      <div class="info-value">追踪自动驾驶系统的硬件和软件升级</div>
    </div>
    <div class="info-item">
      <div class="info-label">权威数据源</div>
      <div class="info-value">以品牌官方渠道信息为主，避免二手信息</div>
    </div>
  </div>
</div>

<div id="brands" class="brand-card">
  <div class="brand-header">
    <h2>当前覆盖品牌</h2>
  </div>

  <div class="models-grid">
    <a href="{{ '/brands/lixiang/' | relative_url }}" class="model-card">
      <div class="model-image" style="background: linear-gradient(135deg, #FF6B35, #FF8E53);">
        <span>LI</span>
        <div class="model-badge">已上线</div>
      </div>
      <div class="model-content">
        <h3>理想汽车</h3>
        <p>增程式与纯电双线发展，智能座舱与智驾系统持续迭代</p>
        <div class="model-specs">
          <div class="spec-item">
            <div class="spec-label">车型数量</div>
            <div class="spec-value">8款</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">最新智驾</div>
            <div class="spec-value">AD Max 4.0</div>
          </div>
        </div>
      </div>
    </a>

    <div class="model-card" style="opacity: 0.7;">
      <div class="model-image" style="background: linear-gradient(135deg, #00B894, #00CE9F);">
        <span>XP</span>
        <div class="model-badge">即将上线</div>
      </div>
      <div class="model-content">
        <h3>小鹏汽车</h3>
        <p>全栈自研智能驾驶，XNGP城市导航辅助驾驶</p>
        <div class="model-specs">
          <div class="spec-item">
            <div class="spec-label">车型数量</div>
            <div class="spec-value">6+款</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">智驾系统</div>
            <div class="spec-value">XNGP</div>
          </div>
        </div>
      </div>
    </div>

    <div class="model-card" style="opacity: 0.7;">
      <div class="model-image" style="background: linear-gradient(135deg, #FF4757, #FF6B81);">
        <span>HW</span>
        <div class="model-badge">即将上线</div>
      </div>
      <div class="model-content">
        <h3>华为</h3>
        <p>鸿蒙智能座舱，ADS 2.0高阶智能驾驶</p>
        <div class="model-specs">
          <div class="spec-item">
            <div class="spec-label">车型数量</div>
            <div class="spec-value">4+款</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">智驾系统</div>
            <div class="spec-value">ADS 2.0</div>
          </div>
        </div>
      </div>
    </div>

    <div class="model-card" style="opacity: 0.7;">
      <div class="model-image" style="background: linear-gradient(135deg, #FF9F43, #FFB142);">
        <span>MI</span>
        <div class="model-badge">即将上线</div>
      </div>
      <div class="model-content">
        <h3>小米汽车</h3>
        <p>小米澎湃OS，全栈自研智能驾驶技术</p>
        <div class="model-specs">
          <div class="spec-item">
            <div class="spec-label">车型数量</div>
            <div class="spec-value">2+款</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">智驾系统</div>
            <div class="spec-value">Xiaomi Pilot</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="brand-card">
  <div class="brand-header">
    <h2>数据原则</h2>
  </div>

  <div class="alert alert-info">
    <strong>信息准确性优先</strong> - 所有数据以品牌官方发布会、官网、技术白皮书为第一信源
  </div>

  <table class="data-table">
    <thead>
      <tr>
        <th>原则</th>
        <th>说明</th>
        <th>示例</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>官方信源</strong></td>
        <td>优先使用品牌官方发布信息</td>
        <td>官网配置页、发布会PPT、技术白皮书</td>
      </tr>
      <tr>
        <td><strong>最高配置</strong></td>
        <td>硬件配置取各车型最高配置版本</td>
        <td>理想L9 Max版，小鹏G9 650性能版</td>
      </tr>
      <tr>
        <td><strong>独立更新</strong></td>
        <td>明确区分车型平台、OS系统、智驾系统的独立更新</td>
        <td>车型不改款，但OS和智驾系统可能单独升级</td>
      </tr>
      <tr>
        <td><strong>客观记录</strong></td>
        <td>不进行主观评价，仅记录客观事实</td>
        <td>记录功能列表，不评价"好用与否"</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="brand-card">
  <div class="brand-header">
    <h2>技术架构</h2>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
    <div class="info-item">
      <div class="info-label">静态站点</div>
      <div class="info-value">Jekyll + GitHub Pages</div>
    </div>
    <div class="info-item">
      <div class="info-label">数据驱动</div>
      <div class="info-value">YAML 结构化数据存储</div>
    </div>
    <div class="info-item">
      <div class="info-label">开源协作</div>
      <div class="info-value">GitHub 仓库接受 Pull Request</div>
    </div>
    <div class="info-item">
      <div class="info-label">持续更新</div>
      <div class="info-value">定期同步官方发布信息</div>
    </div>
  </div>

  <div style="text-align: center; margin-top: 2rem;">
    <a href="https://github.com/hkgood/SmartEVPedia" class="btn" target="_blank">
      <span>访问 GitHub 仓库</span>
    </a>
  </div>
</div>
