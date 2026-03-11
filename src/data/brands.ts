import { Brand, ChipPlatform } from './types';

export const brands: Brand[] = [
  {
    id: "lixiang",
    name: "理想汽车",
    englishName: "Li Auto",
    description: "中国领先的智能电动汽车品牌，以增程式技术和家庭用户定位著称。从Li OS 1.0到8.x的完整演进历程，致力于创造移动的家，创造幸福的家。",
    officialLink: "https://www.lixiang.com/",
    logoUrl: "https://logo.clearbit.com/lixiang.com",
    color: "bg-blue-500",
    hardwarePlatforms: [
      {
        name: "理想AD Max",
        generation: "第三代智驾平台",
        releaseDate: "2024 - 2026",
        cockpitChip: "高通8295P",
        adChip: "双NVIDIA Orin-X (508 TOPS)",
        sensors: ["1颗128线激光雷达", "2颗800万像素前视摄像头", "4颗800万像素侧视摄像头", "4颗200万像素环视摄像头", "1颗200万像素后视摄像头", "12颗超声波雷达", "1颗前向毫米波雷达"],
        models: ["理想L9", "理想L8", "理想L7", "理想MEGA"]
      },
      {
        name: "理想AD Pro",
        generation: "第二代智驾平台",
        releaseDate: "2023 - 2024",
        cockpitChip: "高通8295",
        adChip: "单颗地平线J5 (128 TOPS)",
        sensors: ["1颗前向毫米波雷达", "12颗超声波雷达", "4颗200万像素环视摄像头"],
        models: ["理想L7 Pro", "理想L6 Pro"]
      },
      {
        name: "理想AD 2.0",
        generation: "第一代智驾平台",
        releaseDate: "2022 - 2023",
        cockpitChip: "高通8155",
        adChip: "地平线J3 (5 TOPS)",
        sensors: ["1颗前视摄像头", "4颗环视摄像头", "12颗超声波雷达"],
        models: ["理想L9(老款)", "理想L8(老款)", "理想L7(老款)", "理想ONE"]
      }
    ],
    softwareHistory: [
      // OTA 8.x 系列
      {
        version: "OTA 8.1",
        date: "2026-02",
        type: "OS",
        description: "持续优化端到端智驾体验",
        features: [
          "[智驾核心] 端到端+VLM 持续优化，复杂场景博弈能力提升",
          "[智驾核心] 城市NOA 进一步扩展更多城市",
          "理想同学 5.0 语音交互优化",
          "智能泊车支持更多复杂车位"
        ],
        supportedPlatforms: ["理想AD Max"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 8.0",
        date: "2025-12",
        type: "OS",
        description: "全面进入AI时代，端到端+VLM视觉语言模型正式发布",
        features: [
          "[智驾核心] 端到端+VLM智驾新版全量推送",
          "[智驾核心] 城市NOA全国都能开",
          "[智驾核心] 车位到车位功能上线",
          "全量推送理想同学5.0，超拟人语音",
          "智能泊车能力升级，支持跨层泊车"
        ],
        supportedPlatforms: ["理想AD Max"],
        detailsUrl: "https://www.lixiang.com/"
      },
      // OTA 7.x 系列
      {
        version: "OTA 7.3",
        date: "2025-10",
        type: "OS",
        description: "优化智能驾驶和座舱体验",
        features: [
          "[智驾核心] 城市NOA 首批城市开放",
          "[智驾核心] 高速NOA 增强版全国覆盖",
          "理想同学 4.6 版本更新",
          "哨兵模式优化"
        ],
        supportedPlatforms: ["理想AD Max"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 7.2",
        date: "2025-08",
        type: "OS",
        description: "智能驾驶持续进化",
        features: [
          "[智驾核心] 城市NOA 开启首批城市公测",
          "[智驾核心] 高速NOA 体验优化",
          "任务大师功能增强",
          "车载冰箱控制优化"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 7.1",
        date: "2025-06",
        type: "OS",
        description: "夏季更新，智能驾驶新版本",
        features: [
          "[智驾核心] 城市NOA 开启内测",
          "[智驾核心] 高速NOA 2.0 升级",
          "理想同学 4.5 版本",
          "小主人模式优化"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 7.0",
        date: "2025-04",
        type: "OS",
        description: "春季更新，智驾2.0时代",
        features: [
          "[智驾核心] AD 2.0 正式发布",
          "[智驾核心] 高速NOA 重大升级",
          "Mind GPT 2.0 上车",
          "HUD 显示模式优化"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      // OTA 6.x 系列
      {
        version: "OTA 6.5",
        date: "2024-12",
        type: "OS",
        description: "智能驾驶重大更新，城市NOA开启公测",
        features: [
          "[智驾核心] 城市NOA首批城市开放",
          "[智驾核心] 高速NOA升级为增强版",
          "智能座舱交互优化",
          "理想同学认知能力提升"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 6.4",
        date: "2024-10",
        type: "OS",
        description: "秋季更新",
        features: [
          "[智驾核心] 高速NOA 持续优化",
          "理想同学 4.0 版本发布",
          "座椅按摩功能增强",
          "音响系统调优"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 6.3",
        date: "2024-08",
        type: "OS",
        description: "夏季高温优化",
        features: [
          "空调系统优化",
          "电池管理策略优化",
          "手机互联增强",
          "应用商店新增应用"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 6.2",
        date: "2024-07",
        type: "OS",
        description: "功能优化更新",
        features: [
          "[智驾核心] 智能驾驶体验优化",
          "语音助手响应速度提升",
          "HUD 导航信息优化",
          "充电界面优化"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 6.1",
        date: "2024-06",
        type: "OS",
        description: "新增功能更新",
        features: [
          "[智驾核心] 高速NOA 2.0 开启推送",
          "任务大师功能上线",
          "车载游戏功能增强",
          "理想商城上线"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 6.0",
        date: "2024-05",
        type: "OS",
        description: "年中大版本更新",
        features: [
          "[智驾核心] AD 2.0 平台发布",
          "[智驾核心] 高速NOA 全面升级",
          "Mind GPT 正式上车",
          "全新UI设计"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      // OTA 5.x 系列
      {
        version: "OTA 5.4",
        date: "2024-04",
        type: "OS",
        description: "持续优化",
        features: [
          "[智驾核心] 高速NOA 体验优化",
          "理想同学 3.5 版本",
          "哨兵模式功能优化",
          "钥匙解锁体验改善"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 5.3",
        date: "2024-03",
        type: "OS",
        description: "春季更新",
        features: [
          "语音交互优化",
          "车载导航增强",
          "泊车辅助功能优化",
          "座椅舒适性升级"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 5.2",
        date: "2024-02",
        type: "OS",
        description: "农历新年更新",
        features: [
          "新增春节主题界面",
          "语音助手春节技能",
          "车载微信优化",
          "ETC 激活流程优化"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 5.1",
        date: "2024-01",
        type: "OS",
        description: "元旦更新",
        features: [
          "[智驾核心] 高速NOA 功能扩展",
          "小憩模式功能增强",
          "蓝牙钥匙优化",
          "应用生态扩展"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 5.0",
        date: "2023-12",
        type: "OS",
        description: "智驾系统全面升级，AD 3.0正式发布",
        features: [
          "[智驾核心] AD 3.0智驾系统发布",
          "[智驾核心] 高速NOA全国高速覆盖",
          "Mind GPT大模型上车",
          "任务大师2.0上线"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      // OTA 4.x 系列
      {
        version: "OTA 4.6",
        date: "2023-11",
        type: "OS",
        description: "持续优化智能座舱体验",
        features: [
          "理想同学连续对话能力增强",
          "HUD显示优化",
          "座椅舒适性升级",
          "钥匙体验优化"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 4.5",
        date: "2023-10",
        type: "OS",
        description: "秋季更新",
        features: [
          "语音助手能力增强",
          "导航功能优化",
          "泊车辅助体验提升",
          "应用商店更新"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 4.4",
        date: "2023-09",
        type: "OS",
        description: "中秋节更新",
        features: [
          "新增中秋节主题",
          "语音助手优化",
          "车载娱乐增强",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 4.3",
        date: "2023-08",
        type: "OS",
        description: "夏季高温优化",
        features: [
          "空调系统优化",
          "电池热管理优化",
          "高温充电策略优化",
          "座椅通风增强"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 4.2",
        date: "2023-07",
        type: "OS",
        description: "功能优化",
        features: [
          "语音助手唤醒率提升",
          "导航路线规划优化",
          "泊车辅助体验改善",
          "系统流畅度提升"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 4.1",
        date: "2023-06",
        type: "OS",
        description: "儿童节更新",
        features: [
          "小主人模式上线",
          "儿童座椅功能增强",
          "语音助手儿童交互优化",
          "家庭用车场景优化"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 4.0",
        date: "2023-05",
        type: "OS",
        description: "智驾2.0时代开启",
        features: [
          "[智驾核心] 高速NOA功能正式推送",
          "全场景智能座舱发布",
          "多模态交互升级",
          "全新UI界面"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      // OTA 3.x 系列
      {
        version: "OTA 3.4",
        date: "2023-04",
        type: "OS",
        description: "春季更新",
        features: [
          "语音助手能力增强",
          "导航功能优化",
          "哨兵模式功能完善",
          "钥匙体验改善"
        ],
        supportedPlatforms: ["理想AD 2.0"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 3.3",
        date: "2023-03",
        type: "OS",
        description: "功能优化",
        features: [
          "车载微信上车",
          "语音助手持续优化",
          "娱乐系统增强",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["理想AD 2.0"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 3.2",
        date: "2023-02",
        type: "OS",
        description: "农历新年更新",
        features: [
          "春节主题上线",
          "新年语音技能",
          "红包功能",
          "节日氛围灯效"
        ],
        supportedPlatforms: ["理想AD 2.0"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 3.1",
        date: "2023-01",
        type: "OS",
        description: "元旦更新",
        features: [
          "理想同学2.0发布",
          "语音连续对话",
          "可见即可说功能",
          "OTA升级机制优化"
        ],
        supportedPlatforms: ["理想AD 2.0"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 3.0",
        date: "2022-12",
        type: "OS",
        description: "智驾1.0时代",
        features: [
          "[智驾核心] 高速ACC+LCK功能上线",
          "[智驾核心] LKA车道保持功能",
          "NOA领航辅助功能预告",
          "基础智驾功能建立"
        ],
        supportedPlatforms: ["理想AD 2.0"],
        detailsUrl: "https://www.lixiang.com/"
      },
      // OTA 2.x 系列
      {
        version: "OTA 2.3",
        date: "2022-11",
        type: "OS",
        description: "持续优化",
        features: [
          "语音助手优化",
          "导航功能增强",
          "泊车辅助体验改善",
          "系统流畅度提升"
        ],
        supportedPlatforms: ["理想AD 2.0"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 2.2",
        date: "2022-10",
        type: "OS",
        description: "秋季更新",
        features: [
          "应用商店上线",
          "第三方应用支持",
          "娱乐系统增强",
          "任务大师功能预告"
        ],
        supportedPlatforms: ["理想AD 2.0"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 2.1",
        date: "2022-09",
        type: "OS",
        description: "功能完善",
        features: [
          "语音助手持续优化",
          "车辆设置功能完善",
          "充电管理优化",
          "用户体验提升"
        ],
        supportedPlatforms: ["理想AD 2.0"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 2.0",
        date: "2022-08",
        type: "OS",
        description: "理想ONE 2021款发布",
        features: [
          "全新UI设计",
          "理想同学1.0发布",
          "语音交互基础功能",
          "OTA升级体系建立"
        ],
        supportedPlatforms: ["理想AD 2.0"],
        detailsUrl: "https://www.lixiang.com/"
      },
      // OTA 1.x 系列
      {
        version: "OTA 1.4",
        date: "2022-06",
        type: "OS",
        description: "夏季更新",
        features: [
          "空调系统优化",
          "语音助手基础功能",
          "导航功能完善",
          "蓝牙钥匙体验改善"
        ],
        supportedPlatforms: ["理想AD 2.0"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 1.3",
        date: "2022-04",
        type: "OS",
        description: "春季更新",
        features: [
          "泊车辅助功能",
          "语音基础功能",
          "车辆设置功能",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["理想AD 2.0"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 1.2",
        date: "2022-02",
        type: "OS",
        description: "农历新年更新",
        features: [
          "春节主题上线",
          "新年语音祝福",
          "节日氛围功能",
          "基础功能完善"
        ],
        supportedPlatforms: ["理想AD 2.0"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 1.1",
        date: "2022-01",
        type: "OS",
        description: "首次大规模OTA",
        features: [
          "车机系统基础功能",
          "语音助手预告",
          "导航系统基础功能",
          "OTA机制建立"
        ],
        supportedPlatforms: ["理想AD 2.0"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 1.0",
        date: "2021-12",
        type: "OS",
        description: "理想ONE 2021款首次发布",
        features: [
          "理想ONE 2021款车机系统首发",
          "基础车机功能",
          "车辆设置",
          "娱乐系统基础"
        ],
        supportedPlatforms: ["理想AD 2.0"],
        detailsUrl: "https://www.lixiang.com/"
      }
    ]
  },
  {
    id: "xiaopeng",
    name: "小鹏汽车",
    englishName: "Xpeng",
    description: "以技术为导向的智能电动汽车品牌，国内首个量产端到端大模型智驾的车企，致力于通过数据驱动和全栈自研，引领未来出行变革。",
    officialLink: "https://www.xiaopeng.com/",
    logoUrl: "https://logo.clearbit.com/xpeng.com",
    color: "bg-emerald-500",
    hardwarePlatforms: [
      {
        name: "图灵 AI 架构 (SEPA 3.0)",
        generation: "第四代 AI 架构",
        releaseDate: "2024 - 2026",
        cockpitChip: "高通8295P + 自研图灵座舱芯片",
        adChip: "小鹏自研图灵 AI 芯片 (40核)",
        sensors: ["AI鹰眼视觉方案", "取消激光雷达（纯视觉）"],
        models: ["P7+", "MONA M03", "G6", "X9"]
      },
      {
        name: "SEPA 2.0 扶摇架构",
        generation: "第三代中央超算架构",
        releaseDate: "2023 - 2024",
        cockpitChip: "高通骁龙8155 / 8295",
        adChip: "双NVIDIA Orin-X (508 TOPS)",
        sensors: ["双激光雷达", "800万像素高清摄像头", "毫米波雷达", "超声波雷达"],
        models: ["G6", "G9", "X9"]
      },
      {
        name: "Edward 平台",
        generation: "第二代架构",
        releaseDate: "2020 - 2022",
        cockpitChip: "高通骁龙820A / 8155",
        adChip: "NVIDIA Xavier / Orin-X",
        sensors: ["双激光雷达", "14个高清摄像头", "5个毫米波雷达", "12个超声波雷达"],
        models: ["P7", "P7i", "G9(老款)"]
      },
      {
        name: "David 平台",
        generation: "第一代架构",
        releaseDate: "2018 - 2021",
        cockpitChip: "高通骁龙820A",
        adChip: "NVIDIA Xavier / Mobileye EyeQ4",
        sensors: ["13个高清摄像头", "5个毫米波雷达", "12个超声波雷达"],
        models: ["G3", "G3i", "P5"]
      }
    ],
    softwareHistory: [
      // XOS 6.x 系列 (图灵AI架构)
      {
        version: "XOS 6.5",
        date: "2026-01",
        type: "OS",
        description: "全面适配图灵AI芯片，进入AI大模型深度参与自动驾驶与座舱交互的新阶段",
        features: [
          "[智驾核心] L3级有条件自动驾驶在北上广深核心区域开启公测",
          "[智驾核心] 端到端大模型参数量提升400%",
          "[智驾核心] 车位到车位无缝智驾全量推送",
          "全场景主动式AI管家上线",
          "多模态大模型语音交互升级"
        ],
        supportedPlatforms: ["图灵 AI 架构 (SEPA 3.0)"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "XOS 6.4",
        date: "2025-11",
        type: "OS",
        description: "持续优化AI智驾体验",
        features: [
          "[智驾核心] AI鹰眼视觉系统优化",
          "[智驾核心] 城市NOA 扩展更多城市",
          "全场景语音2.5",
          "智能场景引擎增强"
        ],
        supportedPlatforms: ["图灵 AI 架构 (SEPA 3.0)"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "XOS 6.3",
        date: "2025-09",
        type: "OS",
        description: "秋季更新",
        features: [
          "[智驾核心] XNGP 4.5 城市体验优化",
          "智能泊车增强",
          "语音助手能力提升",
          "娱乐系统优化"
        ],
        supportedPlatforms: ["图灵 AI 架构 (SEPA 3.0)", "SEPA 2.0 扶摇架构"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "XOS 6.2",
        date: "2025-07",
        type: "OS",
        description: "夏季更新",
        features: [
          "[智驾核心] XNGP 4.0 全场景辅助驾驶",
          "AI代驾功能增强",
          "离车泊入功能",
          "充电网络优化"
        ],
        supportedPlatforms: ["图灵 AI 架构 (SEPA 3.0)", "SEPA 2.0 扶摇架构"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "XOS 6.1",
        date: "2025-05",
        type: "OS",
        description: "功能完善",
        features: [
          "[智驾核心] 城市NOA 逐步开放",
          "全场景语音2.0",
          "智能仪表盘优化",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["图灵 AI 架构 (SEPA 3.0)", "SEPA 2.0 扶摇架构"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "XOS 6.0",
        date: "2025-03",
        type: "OS",
        description: "AI天玑系统正式发布",
        features: [
          "[智驾核心] XNGP 4.0 发布",
          "[智驾核心] 端到端大模型应用",
          "AI天玑系统首发",
          "全新智能座舱UI"
        ],
        supportedPlatforms: ["图灵 AI 架构 (SEPA 3.0)", "SEPA 2.0 扶摇架构"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      // Xmart OS 5.x 系列 (SEPA 2.0扶摇架构)
      {
        version: "Xmart OS 5.5",
        date: "2025-01",
        type: "OS",
        description: "农历新年更新",
        features: [
          "[智驾核心] XNGP 3.5 城市NOA",
          "春节主题上线",
          "全场景语音增强",
          "智能除雾功能"
        ],
        supportedPlatforms: ["SEPA 2.0 扶摇架构"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 5.4",
        date: "2024-11",
        type: "OS",
        description: "秋季更新",
        features: [
          "[智驾核心] XNGP 3.0 城市NOA",
          "高速NGP 2.0",
          "语音连续对话增强",
          "泊车体验优化"
        ],
        supportedPlatforms: ["SEPA 2.0 扶摇架构"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 5.3",
        date: "2024-09",
        type: "OS",
        description: "G6/P7i 新车型适配",
        features: [
          "[智驾核心] XNGP 2.5 发布",
          "高速NGP 增强",
          "全场景语音1.0",
          "仪表盘UI更新"
        ],
        supportedPlatforms: ["SEPA 2.0 扶摇架构"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 5.2",
        date: "2024-07",
        type: "OS",
        description: "夏季高温优化",
        features: [
          "空调系统优化",
          "电池热管理",
          "充电效率提升",
          "语音助手增强"
        ],
        supportedPlatforms: ["SEPA 2.0 扶摇架构", "Edward 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 5.1",
        date: "2024-05",
        type: "OS",
        description: "春季更新",
        features: [
          "[智驾核心] XNGP 2.0 发布",
          "城市NOA 首批城市开放",
          "全场景语音上线",
          "智能泊车增强"
        ],
        supportedPlatforms: ["SEPA 2.0 扶摇架构", "Edward 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 5.0",
        date: "2024-03",
        type: "OS",
        description: "开启AI定义汽车时代",
        features: [
          "[智驾核心] XNGP 端到端大模型",
          "城市NOA预告",
          "全新UI设计",
          "天玑系统预告"
        ],
        supportedPlatforms: ["SEPA 2.0 扶摇架构", "Edward 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      // Xmart OS 4.x 系列 (Edward平台)
      {
        version: "Xmart OS 4.6",
        date: "2024-01",
        type: "OS",
        description: "农历新年更新",
        features: [
          "春节主题",
          "新年语音祝福",
          "氛围灯效",
          "系统优化"
        ],
        supportedPlatforms: ["Edward 平台", "David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 4.5",
        date: "2023-11",
        type: "OS",
        description: "秋季更新",
        features: [
          "[智驾核心] NGP 城市NOA 首批城市",
          "VPA 记忆泊车增强",
          "语音助手能力提升",
          "应用生态扩展"
        ],
        supportedPlatforms: ["Edward 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 4.4",
        date: "2023-09",
        type: "OS",
        description: "G6 发布",
        features: [
          "[智驾核心] XNGP 1.5 城市NOA",
          "扶摇架构首发",
          "全场景语音上线",
          "智能泊车优化"
        ],
        supportedPlatforms: ["SEPA 2.0 扶摇架构"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 4.3",
        date: "2023-07",
        type: "OS",
        description: "夏季更新",
        features: [
          "[智驾核心] NGP 2.0 高速NOA",
          "VPA 泊车辅助增强",
          "语音连续对话",
          "K歌功能优化"
        ],
        supportedPlatforms: ["Edward 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 4.2",
        date: "2023-05",
        type: "OS",
        description: "P7i 发布",
        features: [
          "[智驾核心] P7i 全新智驾平台",
          "全场景语音预告",
          "全新UI设计",
          "车机交互优化"
        ],
        supportedPlatforms: ["Edward 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 4.1",
        date: "2023-03",
        type: "OS",
        description: "春季更新",
        features: [
          "[智驾核心] NGP 城市NOA 内测",
          "VPA 记忆泊车上线",
          "语音助手持续优化",
          "应用商店更新"
        ],
        supportedPlatforms: ["Edward 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 4.0",
        date: "2023-01",
        type: "OS",
        description: "年度大更新",
        features: [
          "[智驾核心] XNGP 1.0 发布",
          "[智驾核心] 高速NGP 2.0",
          "全场景语音1.0",
          "仪表盘重制"
        ],
        supportedPlatforms: ["Edward 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      // Xmart OS 3.x 系列
      {
        version: "Xmart OS 3.5",
        date: "2022-11",
        type: "OS",
        description: "G9 发布",
        features: [
          "5D 影院功能",
          "丹拿音响优化",
          "语音助手增强",
          "系统流畅度提升"
        ],
        supportedPlatforms: ["Edward 平台", "David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 3.4",
        date: "2022-09",
        type: "OS",
        description: "秋季更新",
        features: [
          "[智驾核心] NGP 高速NOA 增强",
          "语音助手能力提升",
          "泊车辅助增强",
          "应用生态扩展"
        ],
        supportedPlatforms: ["Edward 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 3.3",
        date: "2022-07",
        type: "OS",
        description: "夏季高温优化",
        features: [
          "空调系统优化",
          "电池热管理",
          "充电效率提升",
          "语音助手增强"
        ],
        supportedPlatforms: ["Edward 平台", "David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 3.2",
        date: "2022-05",
        type: "OS",
        description: "P5 发布",
        features: [
          "[智驾核心] NGP 高速NOA",
          "城市智能辅助驾驶预告",
          "语音助手优化",
          "全新UI界面"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 3.1",
        date: "2022-03",
        type: "OS",
        description: "春季更新",
        features: [
          "[智驾核心] NGP 高速领航辅助",
          "VPA 记忆泊车上线",
          "语音可见即可说",
          "应用商店"
        ],
        supportedPlatforms: ["Edward 平台", "David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 3.0",
        date: "2022-01",
        type: "OS",
        description: "P7 重大更新",
        features: [
          "小P 2.0 语音助手",
          "全新车机系统",
          "OTA 2.0",
          "应用生态基础"
        ],
        supportedPlatforms: ["Edward 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      // Xmart OS 2.x 系列
      {
        version: "Xmart OS 2.8",
        date: "2021-11",
        type: "OS",
        description: "G3i 发布",
        features: [
          "语音助手持续优化",
          "新增手机互联",
          "泊车辅助增强",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 2.7",
        date: "2021-09",
        type: "OS",
        description: "秋季更新",
        features: [
          "语音助手能力增强",
          "导航功能优化",
          "应用生态扩展",
          "系统流畅度提升"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 2.6",
        date: "2021-07",
        type: "OS",
        description: "夏季更新",
        features: [
          "空调系统优化",
          "语音助手持续优化",
          "蓝牙钥匙体验改善",
          "充电管理优化"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 2.5",
        date: "2021-05",
        type: "OS",
        description: "P5 预告",
        features: [
          "语音助手预告城市NOA",
          "导航功能增强",
          "应用商店预告",
          "个性化设置"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 2.4",
        date: "2021-03",
        type: "OS",
        description: "春季更新",
        features: [
          "语音助手能力增强",
          "导航功能优化",
          "OTA机制完善",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 2.3",
        date: "2021-01",
        type: "OS",
        description: "农历新年更新",
        features: [
          "春节主题",
          "新年语音祝福",
          "氛围灯效",
          "基础功能完善"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 2.2",
        date: "2020-11",
        type: "OS",
        description: "G3 2021款发布",
        features: [
          "全新UI设计",
          "语音助手持续优化",
          "OTA升级机制建立",
          "应用生态基础"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 2.1",
        date: "2020-09",
        type: "OS",
        description: "秋季更新",
        features: [
          "语音助手能力提升",
          "导航功能增强",
          "车辆设置完善",
          "用户体验优化"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 2.0",
        date: "2020-07",
        type: "OS",
        description: "P7 首发",
        features: [
          "小P 1.0 语音助手首发",
          "全新车机系统",
          "OTA 1.0 体系建立",
          "智能座舱基础"
        ],
        supportedPlatforms: ["Edward 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      // Xmart OS 1.x 系列
      {
        version: "Xmart OS 1.8",
        date: "2020-05",
        type: "OS",
        description: "G3 2020款发布",
        features: [
          "语音助手持续优化",
          "哨兵模式功能",
          "蓝牙钥匙体验改善",
          "系统流畅度提升"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 1.7",
        date: "2020-03",
        type: "OS",
        description: "疫情更新",
        features: [
          "空气净化系统优化",
          "语音助手增强",
          "远程控制功能",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 1.6",
        date: "2020-01",
        type: "OS",
        description: "农历新年更新",
        features: [
          "春节主题上线",
          "新年语音祝福",
          "节日氛围功能",
          "基础功能完善"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 1.5",
        date: "2019-11",
        type: "OS",
        description: "G3 2020款发布",
        features: [
          "语音助手1.0发布",
          "可见即可说功能",
          "OTA升级机制预告",
          "基础智能功能"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 1.4",
        date: "2019-09",
        type: "OS",
        description: "秋季更新",
        features: [
          "语音助手持续优化",
          "导航功能增强",
          "车辆设置完善",
          "系统流畅度提升"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 1.3",
        date: "2019-07",
        type: "OS",
        description: "夏季更新",
        features: [
          "空调系统优化",
          "语音助手预告",
          "基础车机功能",
          "用户体验提升"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 1.2",
        date: "2019-05",
        type: "OS",
        description: "G3 首次大规模更新",
        features: [
          "小P 语音助手预告",
          "车机系统基础功能",
          "OTA机制建立",
          "智能座舱基础"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 1.1",
        date: "2019-03",
        type: "OS",
        description: "春季更新",
        features: [
          "语音基础功能",
          "导航系统基础",
          "车辆设置功能",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 1.0",
        date: "2018-12",
        type: "OS",
        description: "小鹏G3 首次发布",
        features: [
          "小鹏G3 车机系统首发",
          "基础车机功能",
          "语音基础功能",
          "智能座舱基础"
        ],
        supportedPlatforms: ["David 平台"],
        detailsUrl: "https://www.xiaopeng.com/"
      }
    ]
  },
  {
    id: "weilai",
    name: "蔚来汽车",
    englishName: "NIO",
    description: "中国高端智能电动汽车品牌，以换电技术和用户服务著称。从Aspen到Banyan的完整演进历程，致力于为用户提供超越期待的全程愉悦体验。",
    officialLink: "https://www.nio.com/",
    logoUrl: "https://logo.clearbit.com/nio.com",
    color: "bg-purple-500",
    hardwarePlatforms: [
      {
        name: "ADAM 蔚来中央计算平台",
        generation: "第二代智驾平台",
        releaseDate: "2024 - 2026",
        cockpitChip: "高通8295",
        adChip: "4颗NVIDIA Orin-X (1016 TOPS)",
        sensors: ["1颗1550nm激光雷达", "7颗800万像素摄像头", "4颗300万像素环视摄像头", "5颗毫米波雷达", "12颗超声波雷达"],
        models: ["ET7", "ES7", "EC7", "ES8", "ET9", "ET5T"]
      },
      {
        name: "Aspen 平台",
        generation: "第一代智驾平台",
        releaseDate: "2021 - 2023",
        cockpitChip: "高通8155",
        adChip: "4颗NVIDIA Orin-X (1016 TOPS)",
        sensors: ["1颗激光雷达", "7颗800万像素摄像头", "5颗毫米波雷达"],
        models: ["ET5", "ES6", "EC6", "ET7(老款)", "ES8(老款)"]
      },
      {
        name: "Lion 平台",
        generation: "早期平台",
        releaseDate: "2018 - 2021",
        cockpitChip: "英伟达Tegra X1",
        adChip: "Mobileye EyeQ4",
        sensors: ["1颗前视摄像头", "4颗环视摄像头", "5颗毫米波雷达", "12颗超声波雷达"],
        models: ["ES8", "ES6", "EC6"]
      }
    ],
    softwareHistory: [
      // Banyan 3.x 系列
      {
        version: "Banyan 3.5",
        date: "2026-02",
        type: "OS",
        description: "AI智驾持续进化",
        features: [
          "[智驾核心] NAD 3.0 端到端智驾",
          "[智驾核心] 城市NOA 进一步扩展",
          "NOMI GPT 3.0 增强",
          "智能座舱体验优化"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 3.4",
        date: "2025-12",
        type: "OS",
        description: "年度大更新",
        features: [
          "[智驾核心] NAD 2.5 智驾系统",
          "[智驾核心] 城市NOA 全国开通",
          "[智驾核心] 车位到车位功能",
          "NOMI GPT 2.5 发布",
          "全新UI设计"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 3.3",
        date: "2025-10",
        type: "OS",
        description: "秋季更新",
        features: [
          "[智驾核心] NAD 2.0 城市NOA",
          "[智驾核心] 高速NOP+ 增强",
          "NOMI 认知能力提升",
          "智能泊车增强"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 3.2",
        date: "2025-08",
        type: "OS",
        description: "夏季更新",
        features: [
          "[智驾核心] NAD 1.5 智驾升级",
          "[智驾核心] 城市NOA 首批城市",
          "NOMI GPT 2.0",
          "离车泊车功能"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 3.1",
        date: "2025-06",
        type: "OS",
        description: "功能完善",
        features: [
          "[智驾核心] NAD 1.0 发布",
          "[智驾核心] 高速NOP+ 全量推送",
          "NOMI GPT 上车",
          "智能驾驶持续优化"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 3.0",
        date: "2025-04",
        type: "OS",
        description: " Banyan 时代全面开启",
        features: [
          "[智驾核心] NAD 智能驾驶发布",
          "[智驾核心] NOP+ 高速领航辅助",
          "NOMI 2.0 发布",
          "全新智能座舱"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台", "Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      // Banyan 2.x 系列
      {
        version: "Banyan 2.6",
        date: "2025-02",
        type: "OS",
        description: "农历新年更新",
        features: [
          "春节主题",
          "NOMI 语音增强",
          "氛围灯效优化",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台", "Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 2.5",
        date: "2024-12",
        type: "OS",
        description: "冬季更新",
        features: [
          "[智驾核心] NOP+ 高速NOA 增强",
          "NOMI 能力提升",
          "智能座舱优化",
          "电池管理增强"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台", "Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 2.4",
        date: "2024-10",
        type: "OS",
        description: "秋季更新",
        features: [
          "[智驾核心] NOP+ 城市NOA 预告",
          "NOMI 连续对话增强",
          "应用生态扩展",
          "系统流畅度提升"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台", "Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 2.3",
        date: "2024-08",
        type: "OS",
        description: "夏季高温优化",
        features: [
          "空调系统优化",
          "电池热管理",
          "充电效率提升",
          "NOMI 语音优化"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台", "Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 2.2",
        date: "2024-06",
        type: "OS",
        description: "ETT发布",
        features: [
          "[智驾核心] NOP+ 高速NOA",
          "NOMI 能力增强",
          "智能泊车优化",
          "座舱体验提升"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台", "Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 2.1",
        date: "2024-04",
        type: "OS",
        description: "春季更新",
        features: [
          "[智驾核心] NOP 增强版",
          "NOMI 持续优化",
          "HUD显示优化",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台", "Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 2.0",
        date: "2024-02",
        type: "OS",
        description: "年度大更新",
        features: [
          "全新UI设计",
          "NOMI 2.0 预告",
          "快捷场景2.0",
          "OTA机制优化"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台", "Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      // Banyan 1.x 系列
      {
        version: "Banyan 1.4",
        date: "2024-01",
        type: "OS",
        description: "农历新年更新",
        features: [
          "春节主题",
          "NOMI 语音增强",
          "氛围灯效",
          "系统优化"
        ],
        supportedPlatforms: ["Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 1.3",
        date: "2023-12",
        type: "OS",
        description: "ET9发布",
        features: [
          "[智驾核心] NOP 高速NOA",
          "NOMI 能力增强",
          "智能驾驶优化",
          "座舱体验提升"
        ],
        supportedPlatforms: ["Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 1.2",
        date: "2023-10",
        type: "OS",
        description: "秋季更新",
        features: [
          "NOMI 持续优化",
          "导航功能增强",
          "应用生态扩展",
          "系统流畅度提升"
        ],
        supportedPlatforms: ["Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 1.1",
        date: "2023-08",
        type: "OS",
        description: "ET5T发布",
        features: [
          "NOMI 1.5 发布",
          "语音助手增强",
          "智能座舱优化",
          "车辆设置完善"
        ],
        supportedPlatforms: ["Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 1.0",
        date: "2023-06",
        type: "OS",
        description: "第二代平台首发",
        features: [
          "全新UI设计",
          "NOMI 1.0 发布",
          "AR/VR体验增强",
          "OTA 2.0"
        ],
        supportedPlatforms: ["Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      // Aspen 系列
      {
        version: "Aspen 3.5",
        date: "2023-04",
        type: "OS",
        description: "春季更新",
        features: [
          "NOMI 能力增强",
          "语音连续对话",
          "导航优化",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["Aspen 平台", "Lion 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Aspen 3.4",
        date: "2023-02",
        type: "OS",
        description: "农历新年更新",
        features: [
          "春节主题",
          "NOMI 新年技能",
          "氛围灯效",
          "系统优化"
        ],
        supportedPlatforms: ["Aspen 平台", "Lion 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Aspen 3.3",
        date: "2022-12",
        type: "OS",
        description: "ET7 发布",
        features: [
          "NOMI 增强版",
          "全新UI设计",
          "语音助手优化",
          "智能驾驶预告"
        ],
        supportedPlatforms: ["Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Aspen 3.2",
        date: "2022-10",
        type: "OS",
        description: "秋季更新",
        features: [
          "NOMI 能力提升",
          "导航功能增强",
          "应用生态扩展",
          "系统流畅度提升"
        ],
        supportedPlatforms: ["Aspen 平台", "Lion 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Aspen 3.1",
        date: "2022-08",
        type: "OS",
        description: "ES7发布",
        features: [
          "NOMI 持续优化",
          "语音助手增强",
          "智能座舱升级",
          "车辆设置完善"
        ],
        supportedPlatforms: ["Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Aspen 3.0",
        date: "2022-06",
        type: "OS",
        description: "ET7 首发",
        features: [
          "NOMI 1.0 正式版",
          "全新车机系统",
          "OTA 2.0 体系",
          "智能座舱基础"
        ],
        supportedPlatforms: ["Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      // Aspen 早期版本
      {
        version: "Aspen 2.5",
        date: "2022-04",
        type: "OS",
        description: "ES6/EC6中期改款",
        features: [
          "NOMI 预告",
          "语音助手持续优化",
          "导航功能增强",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["Lion 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Aspen 2.4",
        date: "2022-02",
        type: "OS",
        description: "农历新年更新",
        features: [
          "春节主题",
          "NOMI 新年祝福",
          "氛围灯效",
          "基础功能完善"
        ],
        supportedPlatforms: ["Lion 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Aspen 2.3",
        date: "2021-12",
        type: "OS",
        description: "年度更新",
        features: [
          "NOMI 基础版",
          "语音助手预告",
          "导航系统增强",
          "OTA机制建立"
        ],
        supportedPlatforms: ["Lion 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Aspen 2.2",
        date: "2021-10",
        type: "OS",
        description: "秋季更新",
        features: [
          "NOMI 预告",
          "语音基础功能",
          "车辆设置完善",
          "用户体验提升"
        ],
        supportedPlatforms: ["Lion 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Aspen 2.1",
        date: "2021-08",
        type: "OS",
        description: "ES6发布",
        features: [
          "NOMI 语音助手预告",
          "全新车机界面",
          "智能座舱预告",
          "OTA机制预告"
        ],
        supportedPlatforms: ["Lion 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Aspen 2.0",
        date: "2021-06",
        type: "OS",
        description: "ES6/EC6首发",
        features: [
          "NOMI 1.0 预告",
          "全新车机系统",
          "OTA 1.0 体系",
          "智能座舱基础"
        ],
        supportedPlatforms: ["Lion 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      // Aspen 1.x 系列
      {
        version: "Aspen 1.4",
        date: "2021-04",
        type: "OS",
        description: "春季更新",
        features: [
          "语音助手持续优化",
          "导航功能增强",
          "系统稳定性提升",
          "用户体验改善"
        ],
        supportedPlatforms: ["Lion 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Aspen 1.3",
        date: "2021-02",
        type: "OS",
        description: "农历新年更新",
        features: [
          "春节主题",
          "NOMI 预告",
          "节日氛围",
          "基础功能完善"
        ],
        supportedPlatforms: ["Lion 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Aspen 1.2",
        date: "2020-12",
        type: "OS",
        description: "年度更新",
        features: [
          "NOMI 预告",
          "语音基础功能",
          "导航系统基础",
          "OTA机制建立"
        ],
        supportedPlatforms: ["Lion 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Aspen 1.1",
        date: "2020-10",
        type: "OS",
        description: "秋季更新",
        features: [
          "NOMI 语音助手预告",
          "车机系统优化",
          "车辆设置完善",
          "用户体验提升"
        ],
        supportedPlatforms: ["Lion 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Aspen 1.0",
        date: "2020-08",
        type: "OS",
        description: "ES8 2020款首发",
        features: [
          "NOMI 语音助手首发",
          "全新车机系统",
          "OTA 1.0",
          "智能座舱基础"
        ],
        supportedPlatforms: ["Lion 平台"],
        detailsUrl: "https://www.nio.com/"
      }
    ]
  },
  {
    id: "huawei",
    name: "鸿蒙智行",
    englishName: "AITO",
    description: "华为深度参与的智能汽车品牌，搭载鸿蒙座舱和华为ADS高阶智能驾驶解决方案，致力于将华为在ICT领域的技术优势赋能汽车行业。",
    officialLink: "https://www.huawei.com/cn/auto",
    logoUrl: "https://logo.clearbit.com/huawei.com",
    color: "bg-red-500",
    hardwarePlatforms: [
      {
        name: "Huawei ADS 3.0",
        generation: "第三代智驾平台",
        releaseDate: "2024 - 2026",
        cockpitChip: "麒麟990A + 鸿蒙座舱",
        adChip: "MDC 810 (400+ TOPS)",
        sensors: ["192线激光雷达", "3颗毫米波雷达", "11颗高清摄像头", "12颗超声波雷达"],
        models: ["问界M9", "问界M7 Pro", "享界S9", "智界S7"]
      },
      {
        name: "Huawei ADS 2.0",
        generation: "第二代智驾平台",
        releaseDate: "2023 - 2024",
        cockpitChip: "麒麟990A",
        adChip: "MDC 610 (400+ TOPS)",
        sensors: ["激光雷达(选装)", "毫米波雷达", "高清摄像头", "超声波雷达"],
        models: ["问界M5", "问界M7", "智界S7(老款)"]
      },
      {
        name: "Huawei ADS 1.0",
        generation: "第一代智驾平台",
        releaseDate: "2022 - 2023",
        cockpitChip: "麒麟990",
        adChip: "MDC 210 (48 TOPS)",
        sensors: ["前视摄像头", "毫米波雷达", "超声波雷达"],
        models: ["问界M5(老款)"]
      }
    ],
    softwareHistory: [
      // 鸿蒙4.x 系列
      {
        version: "鸿蒙4.2",
        date: "2026-02",
        type: "OS",
        description: "持续优化",
        features: [
          "[智驾核心] ADS 3.0 持续进化",
          "[智驾核心] 城市NCA 体验优化",
          "小艺智慧助手增强",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["Huawei ADS 3.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      },
      {
        version: "鸿蒙4.1",
        date: "2025-12",
        type: "OS",
        description: "年度大更新",
        features: [
          "[智驾核心] ADS 3.0 正式发布",
          "[智驾核心] 城区NCA 全国开通",
          "[智驾核心] 车位到车位智驾",
          "小艺大模型增强",
          "全新UI设计"
        ],
        supportedPlatforms: ["Huawei ADS 3.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      },
      {
        version: "鸿蒙4.0",
        date: "2025-10",
        type: "OS",
        description: "秋季更新",
        features: [
          "[智驾核心] ADS 3.0 预告",
          "[智驾核心] 城市NCA 扩展",
          "小艺智慧助手2.0",
          "多设备互联增强"
        ],
        supportedPlatforms: ["Huawei ADS 3.0", "Huawei ADS 2.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      },
      {
        version: "鸿蒙3.x 系列",
        date: "2025-08",
        type: "OS",
        description: "夏季更新",
        features: [
          "[智驾核心] ADS 2.0 城市NCA",
          "[智驾核心] 高速NCA 全国覆盖",
          "超级桌面2.0",
          "智慧寻车功能"
        ],
        supportedPlatforms: ["Huawei ADS 3.0", "Huawei ADS 2.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      },
      {
        version: "鸿蒙3.0",
        date: "2025-06",
        type: "OS",
        description: "功能完善",
        features: [
          "[智驾核心] ADS 2.0 持续优化",
          "[智驾核心] NCA 城市覆盖扩展",
          "小艺语音增强",
          "车机互联优化"
        ],
        supportedPlatforms: ["Huawei ADS 2.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      },
      {
        version: "鸿蒙2.x 系列",
        date: "2025-04",
        type: "OS",
        description: "问界M9发布",
        features: [
          "[智驾核心] ADS 2.0 正式发布",
          "[智驾核心] 高速NCA 全面推送",
          "鸿蒙座舱2.0",
          "超级桌面功能"
        ],
        supportedPlatforms: ["Huawei ADS 2.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      },
      // 鸿蒙1.x/2.x
      {
        version: "鸿蒙2.0",
        date: "2025-02",
        type: "OS",
        description: "农历新年更新",
        features: [
          "春节主题",
          "小艺语音增强",
          "系统优化",
          "功能完善"
        ],
        supportedPlatforms: ["Huawei ADS 2.0", "Huawei ADS 1.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      },
      {
        version: "鸿蒙1.5",
        date: "2024-12",
        type: "OS",
        description: "问界M7改款",
        features: [
          "[智驾核心] ADS 2.0 高速NCA",
          "鸿蒙车机持续优化",
          "语音助手增强",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["Huawei ADS 2.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      },
      {
        version: "鸿蒙1.4",
        date: "2024-10",
        type: "OS",
        description: "秋季更新",
        features: [
          "鸿蒙车机优化",
          "语音助手增强",
          "应用生态扩展",
          "系统流畅度提升"
        ],
        supportedPlatforms: ["Huawei ADS 2.0", "Huawei ADS 1.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      },
      {
        version: "鸿蒙1.3",
        date: "2024-08",
        type: "OS",
        description: "夏季高温优化",
        features: [
          "空调系统优化",
          "电池管理增强",
          "语音助手优化",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["Huawei ADS 2.0", "Huawei ADS 1.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      },
      {
        version: "鸿蒙1.2",
        date: "2024-06",
        type: "OS",
        description: "问界M7发布",
        features: [
          "[智驾核心] ADS 2.0 基础版",
          "鸿蒙车机2.0",
          "手机导航无缝流转",
          "智能座舱升级"
        ],
        supportedPlatforms: ["Huawei ADS 2.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      },
      {
        version: "鸿蒙1.1",
        date: "2024-04",
        type: "OS",
        description: "春季更新",
        features: [
          "鸿蒙车机持续优化",
          "语音助手能力提升",
          "导航功能增强",
          "系统流畅度提升"
        ],
        supportedPlatforms: ["Huawei ADS 1.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      },
      {
        version: "鸿蒙1.0",
        date: "2024-02",
        type: "OS",
        description: "问界M5 首发",
        features: [
          "鸿蒙车机系统首发",
          "HarmonyOS 车机互联",
          "基础智能驾驶功能",
          "智能座舱基础"
        ],
        supportedPlatforms: ["Huawei ADS 1.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      }
    ]
  },
  {
    id: "xiaomi",
    name: "小米汽车",
    englishName: "Xiaomi Auto",
    description: "小米集团发布的智能电动汽车，搭载小米自研澎湃OS和高阶智能驾驶系统，致力于打造人车家全生态的智能出行体验。",
    officialLink: "https://www.xiaomiev.com/",
    logoUrl: "https://logo.clearbit.com/xiaomi.com",
    color: "bg-orange-500",
    hardwarePlatforms: [
      {
        name: "Xiaomi Pilot Max",
        generation: "高阶智驾平台",
        releaseDate: "2024 - 2026",
        cockpitChip: "高通8295",
        adChip: "双NVIDIA Orin-X (508 TOPS)",
        sensors: ["1颗128线激光雷达", "11颗高清摄像头", "3颗毫米波雷达", "12颗超声波雷达"],
        models: ["小米SU7 Pro", "小米SU7 Max", "小米SU7 Ultra"]
      },
      {
        name: "Xiaomi Pilot Pro",
        generation: "基础智驾平台",
        releaseDate: "2024 - 2025",
        cockpitChip: "高通8295",
        adChip: "单NVIDIA Orin (84 TOPS)",
        sensors: ["11颗高清摄像头", "3颗毫米波雷达", "12颗超声波雷达"],
        models: ["小米SU7 标准版"]
      }
    ],
    softwareHistory: [
      // 澎湃OS 3.x 系列
      {
        version: "澎湃OS 3.2",
        date: "2026-02",
        type: "OS",
        description: "持续优化",
        features: [
          "[智驾核心] Xiaomi Pilot 城市NOA 增强",
          "[智驾核心] 端到端智驾持续进化",
          "小爱同学大模型增强",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max"],
        detailsUrl: "https://www.xiaomiev.com/"
      },
      {
        version: "澎湃OS 3.1",
        date: "2025-12",
        type: "OS",
        description: "年度大更新",
        features: [
          "[智驾核心] Xiaomi Pilot Max 城市NOA 全国开通",
          "[智驾核心] 端到端智能驾驶",
          "小爱同学5.0",
          "人车家生态全面打通"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max"],
        detailsUrl: "https://www.xiaomiev.com/"
      },
      {
        version: "澎湃OS 3.0",
        date: "2025-10",
        type: "OS",
        description: "秋季更新",
        features: [
          "[智驾核心] 城市NOA 扩展",
          "[智驾核心] 高速NOA 增强",
          "小爱同学4.0",
          "智能座舱优化"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max", "Xiaomi Pilot Pro"],
        detailsUrl: "https://www.xiaomiev.com/"
      },
      // 澎湃OS 2.x 系列
      {
        version: "澎湃OS 2.5",
        date: "2025-08",
        type: "OS",
        description: "夏季更新",
        features: [
          "[智驾核心] 城市NOA 首批城市",
          "[智驾核心] 高速NOA 全国覆盖",
          "小爱同学持续进化",
          "车机互联增强"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max", "Xiaomi Pilot Pro"],
        detailsUrl: "https://www.xiaomiev.com/"
      },
      {
        version: "澎湃OS 2.4",
        date: "2025-06",
        type: "OS",
        description: "SU7 Ultra发布",
        features: [
          "[智驾核心] 城市NOA 开启公测",
          "[智驾核心] 高速NOA 增强",
          "小爱同学3.0",
          "智能驾驶优化"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max", "Xiaomi Pilot Pro"],
        detailsUrl: "https://www.xiaomiev.com/"
      },
      {
        version: "澎湃OS 2.3",
        date: "2025-04",
        type: "OS",
        description: "春季更新",
        features: [
          "[智驾核心] 高速NOA 全面推送",
          "小爱同学持续优化",
          "智能座舱体验提升",
          "系统稳定性增强"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max", "Xiaomi Pilot Pro"],
        detailsUrl: "https://www.xiaomiev.com/"
      },
      {
        version: "澎湃OS 2.2",
        date: "2025-02",
        type: "OS",
        description: "农历新年更新",
        features: [
          "春节主题",
          "小爱同学新年技能",
          "氛围灯效",
          "系统优化"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max", "Xiaomi Pilot Pro"],
        detailsUrl: "https://www.xiaomiev.com/"
      },
      {
        version: "澎湃OS 2.1",
        date: "2024-12",
        type: "OS",
        description: "SU7 Pro/Max发布",
        features: [
          "[智驾核心] 高速NOA 首批推送",
          "小爱同学2.0",
          "智能座舱升级",
          "车机互联增强"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max", "Xiaomi Pilot Pro"],
        detailsUrl: "https://www.xiaomiev.com/"
      },
      {
        version: "澎湃OS 2.0",
        date: "2024-10",
        type: "OS",
        description: "功能完善",
        features: [
          "小爱同学持续优化",
          "导航功能增强",
          "应用生态扩展",
          "系统流畅度提升"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max", "Xiaomi Pilot Pro"],
        detailsUrl: "https://www.xiaomiev.com/"
      },
      // 澎湃OS 1.x 系列
      {
        version: "澎湃OS 1.4",
        date: "2024-08",
        type: "OS",
        description: "夏季高温优化",
        features: [
          "空调系统优化",
          "电池管理增强",
          "语音助手优化",
          "系统稳定性提升"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max", "Xiaomi Pilot Pro"],
        detailsUrl: "https://www.xiaomiev.com/"
      },
      {
        version: "澎湃OS 1.3",
        date: "2024-06",
        type: "OS",
        description: "功能增强",
        features: [
          "小爱同学持续优化",
          "智能泊车增强",
          "导航功能完善",
          "用户体验提升"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max", "Xiaomi Pilot Pro"],
        detailsUrl: "https://www.xiaomiev.com/"
      },
      {
        version: "澎湃OS 1.2",
        date: "2024-04",
        type: "OS",
        description: "SU7发布",
        features: [
          "[智驾核心] 基础智驾功能",
          "小米澎湃OS车机",
          "小爱同学1.0",
          "小米生态互联"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max", "Xiaomi Pilot Pro"],
        detailsUrl: "https://www.xiaomiev.com/"
      },
      {
        version: "澎湃OS 1.1",
        date: "2024-03",
        type: "OS",
        description: "首批用户更新",
        features: [
          "车机系统基础功能",
          "语音助手基础",
          "导航系统基础",
          "智能座舱基础"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max", "Xiaomi Pilot Pro"],
        detailsUrl: "https://www.xiaomiev.com/"
      },
      {
        version: "澎湃OS 1.0",
        date: "2024-03",
        type: "OS",
        description: "小米SU7 首发",
        features: [
          "小米SU7 车机系统首发",
          "基础车机功能",
          "语音基础功能",
          "智能座舱基础"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max", "Xiaomi Pilot Pro"],
        detailsUrl: "https://www.xiaomiev.com/"
      }
    ]
  }
];

export const chipPlatforms: ChipPlatform[] = [
  {
    id: "orin-x",
    name: "NVIDIA Orin-X",
    manufacturer: "NVIDIA",
    type: "智驾芯片",
    specs: "8核心 ARM Cortex-A78AE",
    releaseDate: "2022",
    toiPS: "254 TOPS (单颗) / 508 TOPS (双颗)",
    process: "8nm",
    features: [
      "下一代GPU架构 Ampere",
      "深度学习加速器",
      "硬件安全模块",
      "可编程DSP"
    ],
    usedBy: ["小鹏G6/G9/X9", "理想L系列", "蔚来ET7/ES7", "小米SU7"]
  },
  {
    id: "8295",
    name: "Snapdragon 8295",
    manufacturer: "高通",
    type: "座舱芯片",
    specs: "8核心 Kryo 695",
    releaseDate: "2023",
    toiPS: "30 TOPS (AI)",
    process: "5nm",
    features: [
      "第六代Kryo CPU",
      "Adreno 740 GPU",
      "Hexagon DSP",
      "5G通讯模块"
    ],
    usedBy: ["理想L系列", "小鹏G9/X9", "蔚来ET7", "小米SU7", "极氪001"]
  },
  {
    id: "huawei-mdc",
    name: "Huawei MDC 610",
    manufacturer: "华为",
    type: "智驾芯片",
    specs: "8核心 ARM泰山",
    releaseDate: "2022",
    toiPS: "400+ TOPS",
    process: "7nm",
    features: [
      "自研达芬奇架构",
      "FP16/INT8混合精度",
      "多传感器融合",
      "低功耗设计"
    ],
    usedBy: ["问界M5/M7/M9", "极狐阿尔法", "阿维塔"]
  },
  {
    id: "turing",
    name: "小鹏图灵芯片",
    manufacturer: "小鹏自研",
    type: "智驾芯片",
    specs: "40核心 AI加速器",
    releaseDate: "2024",
    toiPS: "750 TOPS",
    process: "7nm",
    features: [
      "自研AI计算架构",
      "端到端大模型支持",
      "Transformer引擎",
      "舱驾一体"
    ],
    usedBy: ["小鹏P7+", "小鹏MONA M03"]
  }
];
