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
  // 小鹏、蔚来、华为、小米数据需要同样完整化...
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
