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
        models: ["理想L7 Pro", "理想L理想L6 Pro"]
      }
    ],
    softwareHistory: [
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
        version: "OTA 5.0",
        date: "2024-06",
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
      {
        version: "OTA 4.6",
        date: "2024-01",
        type: "OS",
        description: "持续优化智能座舱体验",
        features: [
          "理想同学连续对话能力增强",
          "HUD显示优化",
          "座椅舒适性升级"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
        detailsUrl: "https://www.lixiang.com/"
      },
      {
        version: "OTA 4.0",
        date: "2023-12",
        type: "OS",
        description: "智驾2.0时代开启",
        features: [
          "[智驾核心] 高速NOA功能正式推送",
          "全场景智能座舱发布",
          "多模态交互升级"
        ],
        supportedPlatforms: ["理想AD Max", "理想AD Pro"],
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
      }
    ],
    softwareHistory: [
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
        version: "XOS 5.5",
        date: "2025-07",
        type: "OS",
        description: "AI天玑系统正式发布",
        features: [
          "[智驾核心] XNGP 4.0全场景辅助驾驶",
          "[智驾核心] 城市NOA全国开通",
          "AI代驾功能上线",
          "全新智能座舱UI"
        ],
        supportedPlatforms: ["SEPA 2.0 扶摇架构", "图灵 AI 架构 (SEPA 3.0)"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "XOS 5.0",
        date: "2025-01",
        type: "OS",
        description: "开启AI定义汽车时代",
        features: [
          "[智驾核心] XNGP 3.5端到端大模型",
          "城市NOA首批城市开放",
          "全场景语音2.0"
        ],
        supportedPlatforms: ["SEPA 2.0 扶摇架构"],
        detailsUrl: "https://www.xiaopeng.com/"
      },
      {
        version: "Xmart OS 4.5",
        date: "2024-06",
        type: "OS",
        description: "持续优化智驾体验",
        features: [
          "[智驾核心] XNGP 2.0发布",
          "高速NGP能力增强",
          "泊车体验优化"
        ],
        supportedPlatforms: ["SEPA 2.0 扶摇架构"],
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
        models: ["ET7", "ES7", "EC7", "ES8", "ET9"]
      },
      {
        name: "Aspen 平台",
        generation: "第一代智驾平台",
        releaseDate: "2021 - 2023",
        cockpitChip: "高通8155",
        adChip: "4颗NVIDIA Orin-X (1016 TOPS)",
        sensors: ["1颗激光雷达", "7颗800万像素摄像头", "5颗毫米波雷达"],
        models: ["ET5", "ES6", "EC6", "ET7(老款)"]
      }
    ],
    softwareHistory: [
      {
        version: "Banyan 3.3.0",
        date: "2025-12",
        type: "OS",
        description: "AI智驾 Banyan 时代全面到来",
        features: [
          "[智驾核心] 蔚来智能驾驶3.0发布",
          "[智驾核心] 城市NOA全量推送",
          "[智驾核心] 端到端AEB升级",
          "NOMI GPT全面升级",
          "智能座舱体验优化"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 3.0",
        date: "2025-06",
        type: "OS",
        description: "全域增强领航辅助NOP+正式发布",
        features: [
          "[智驾核心] NOP+城市功能开通",
          "[智驾核心] 高速NOA升级",
          "NOMI Mate 2.0发布",
          "全景互联体验增强"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台", "Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 2.0",
        date: "2024-12",
        type: "OS",
        description: "智能座舱2.0时代",
        features: [
          "全新UI/UX设计",
          "NOMI GPT能力增强",
          "快捷场景2.0"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台", "Aspen 平台"],
        detailsUrl: "https://www.nio.com/"
      },
      {
        version: "Banyan 1.0",
        date: "2023-12",
        type: "OS",
        description: "蔚来第二代平台首发",
        features: [
          "[智驾核心] NAD智能驾驶基础版",
          "全新智能座舱架构",
          "AR/VR体验增强"
        ],
        supportedPlatforms: ["ADAM 蔚来中央计算平台"],
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
    logoUrl: "https://logo.clearbit.com://huawei.com",
    color: "bg-red-500",
    hardwarePlatforms: [
      {
        name: "Huawei ADS 3.0",
        generation: "第三代智驾平台",
        releaseDate: "2024 - 2026",
        cockpitChip: "麒麟990A + 鸿蒙座舱",
        adChip: "MDC 610 (400+ TOPS)",
        sensors: ["192线激光雷达", "3颗毫米波雷达", "11颗高清摄像头", "12颗超声波雷达"],
        models: ["问界M9", "问界M7", "问界M5", "享界S9", "智界S7"]
      },
      {
        name: "Huawei ADS 2.0",
        generation: "第二代智驾平台",
        releaseDate: "2023 - 2024",
        cockpitChip: "麒麟990A",
        adChip: "MDC 610 (400+ TOPS)",
        sensors: ["激光雷达(选装)", "毫米波雷达", "高清摄像头", "超声波雷达"],
        models: ["问界M5", "问界M7(老款)"]
      }
    ],
    softwareHistory: [
      {
        version: "鸿蒙4.0",
        date: "2025-12",
        type: "OS",
        description: "鸿蒙座舱4.0发布，ADS 3.0全面升级",
        features: [
          "[智驾核心] ADS 3.0城区NCA全国开通",
          "[智驾核心] 端到端智能驾驶",
          "[智驾核心] 车位到车位智驾",
          "小艺智慧助手能力增强",
          "多设备互联体验优化"
        ],
        supportedPlatforms: ["Huawei ADS 3.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      },
      {
        version: "鸿蒙3.0",
        date: "2025-06",
        type: "OS",
        description: "ADS 2.0全面升级",
        features: [
          "[智驾核心] ADS 2.0城区NCA开通",
          "[智驾核心] 高速NCA全国覆盖",
          "超级桌面2.0",
          "智慧寻车功能"
        ],
        supportedPlatforms: ["Huawei ADS 3.0", "Huawei ADS 2.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      },
      {
        version: "鸿蒙2.0",
        date: "2024-12",
        type: "OS",
        description: "鸿蒙座舱2.0首发",
        features: [
          "[智驾核心] ADS 2.0基础版发布",
          "鸿蒙车机系统发布",
          "手机导航无缝流转"
        ],
        supportedPlatforms: ["Huawei ADS 2.0"],
        detailsUrl: "https://www.huawei.com/cn/auto"
      },
      {
        version: "鸿蒙1.0",
        date: "2023-12",
        type: "OS",
        description: "鸿蒙车机首发",
        features: [
          "鸿蒙车机系统发布",
          "HarmonyOS车机互联",
          "基础智能驾驶功能"
        ],
        supportedPlatforms: ["Huawei ADS 2.0"],
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
    logoUrl: "https://logo.clearbit.com://xiaomi.com",
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
      {
        version: "澎湃OS 2.0",
        date: "2025-12",
        type: "OS",
        description: "小米澎湃OS 2.0发布，智能驾驶全面升级",
        features: [
          "[智驾核心] Xiaomi Pilot Max城市NOA开通",
          "[智驾核心] 端到端智能驾驶",
          "[智驾核心] 泊车助手升级",
          "小爱同学大模型上车",
          "人车家生态全面打通"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max"],
        detailsUrl: "https://www.xiaomiev.com/"
      },
      {
        version: "澎湃OS 1.2",
        date: "2025-06",
        type: "OS",
        description: "首次OTA更新",
        features: [
          "[智驾核心] 高速NOA开通",
          "[智驾核心] 智能泊车增强",
          "UI交互优化",
          "能耗管理优化"
        ],
        supportedPlatforms: ["Xiaomi Pilot Max", "Xiaomi Pilot Pro"],
        detailsUrl: "https://www.xiaomiev.com/"
      },
      {
        version: "澎湃OS 1.0",
        date: "2024-12",
        type: "OS",
        description: "小米SU7首次发布",
        features: [
          "小米澎湃OS车机发布",
          "基础智能驾驶功能",
          "小米生态互联",
          "智能座舱体验"
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
    id: "orin",
    name: "NVIDIA Orin",
    manufacturer: "NVIDIA",
    type: "智驾芯片",
    specs: "8核心 ARM Cortex-A78AE",
    releaseDate: "2022",
    toiPS: "170 TOPS",
    process: "8nm",
    features: [
      "Ampere GPU架构",
      "深度学习加速器",
      "多传感器融合"
    ],
    usedBy: ["小鹏P5", "小米SU7 Pro"]
  },
  {
    id: "thor",
    name: "NVIDIA Thor",
    manufacturer: "NVIDIA",
    type: "智驾芯片",
    specs: "8核心 ARM Cortex-A78AE",
    releaseDate: "2024",
    toiPS: "2000 TOPS",
    process: "4nm",
    features: [
      "下一代 GPU 架构 Blackwell",
      "Transformer引擎",
      "FP8/FP16/FP32精度",
      "集成座舱娱乐"
    ],
    usedBy: ["极氪", "小鹏G9(2026)", "蔚来(2026)"]
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
    id: "8155",
    name: "Snapdragon 8155",
    manufacturer: "高通",
    type: "座舱芯片",
    specs: "8核心 Kryo 485",
    releaseDate: "2020",
    toiPS: "8 TOPS (AI)",
    process: "7nm",
    features: [
      "第三代Kryo CPU",
      "Adreno 640 GPU",
      "Hexagon 690 DSP",
      "4G/5G调制解调器"
    ],
    usedBy: ["蔚来老款", "小鹏P7", "理想ONE", "极氪001(老款)"]
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
    usedBy: ["小鹏P7+", "小鹏MONA M03", "小鹏G6(2025)"]
  }
];
