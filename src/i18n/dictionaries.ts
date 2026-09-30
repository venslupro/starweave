import type { Locale } from "./config";

const zh = {
  meta: {
    title: "StarWeave 星织 — 太空计算 · 把数据中心送上太空",
    description:
      "StarWeave 构建在轨算力网络：卫星星座搭载抗辐射 AI 芯片，以太阳能供电、向深空散热，经星间激光链路组网，数据就地处理、仅回传结果。",
  },
  nav: {
    vision: "愿景",
    features: "核心特性",
    how: "技术架构",
    apps: "应用场景",
    invest: "投资合作",
    contact: "联系",
    cta: "联系我们",
    langLabel: "EN",
    langTitle: "Switch to English",
  },
  hero: {
    badge: "太空计算 · 在轨算力",
    title1: "构建在轨算力",
    title2: "把数据中心送上太空",
    desc: "把数据中心搬上轨道的太空计算方案。卫星星座搭载抗辐射 AI 芯片，以太阳能供电、向深空散热，经星间激光链路组成在轨算力网络；数据就地处理、仅回传结果，突破地面算力的能源与带宽瓶颈。",
    primary: "投资与合作",
    secondary: "了解方案",
    tags: ["太阳能供电", "深空散热", "在轨实时推理", "星间激光组网"],
  },
  facts: [
    { value: "1361", unit: "W/m²", label: "轨道太阳常数，无昼夜与天气遮挡" },
    { value: "~3", unit: "K", label: "深空背景温度，天然辐射散热" },
    { value: "0", unit: "L", label: "冷却用水，不占用地面土地" },
    { value: "10²+", unit: "Gbps", label: "星间激光链路级带宽" },
  ],
  vision: {
    eyebrow: "定位与愿景",
    title: "让算力去往数据产生的地方",
    desc: "AI 的尽头是能源与带宽。地面数据中心正受限于电网容量、冷却用水与土地审批，而卫星每天采集的海量数据却只能排队等待下行。StarWeave 把算力直接部署在轨道上，让“数据产生”与“数据计算”发生在同一个地方。",
    eq: [
      { sym: "", code: "SAT", name: "卫星星座", text: "低轨星座覆盖全球，贴近每一个数据源。" },
      { sym: "+", code: "RAD-AI", name: "抗辐射 AI 芯片", text: "面向空间环境加固的高能效推理算力。" },
      { sym: "+", code: "OISL", name: "星间激光链路", text: "高带宽、低时延的在轨光通信骨干网。" },
      { sym: "=", code: "ORBIT", name: "在轨算力网络", text: "能源自给、弹性扩展的太空数据中心。" },
    ],
  },
  features: {
    eyebrow: "核心特性",
    title: "突破地面算力的四大瓶颈",
    desc: "以太空的物理优势重构算力基础设施。",
    items: [
      {
        icon: "sun",
        title: "全天候太阳能供电",
        text: "晨昏轨道几乎持续光照，太阳能直接转化为算力，清洁低碳，不与地面电网争夺容量。",
        tag: "清洁 · 低碳",
      },
      {
        icon: "snow",
        title: "深空天然散热",
        text: "以辐射方式向接近绝对零度的深空排热，不耗水、不占地，彻底告别冷却塔与水资源争议。",
        tag: "零水耗 · 零占地",
      },
      {
        icon: "bolt",
        title: "数据即采即算",
        text: "遥感、通信与传感数据在轨实时推理，只回传结构化结果，大幅节省下行带宽与响应时间。",
        tag: "实时 · 省带宽",
      },
      {
        icon: "net",
        title: "星间激光组网",
        text: "卫星之间以激光链路互联成网，算力节点可按需加入，实现像云一样的弹性扩展。",
        tag: "弹性 · 可扩展",
      },
    ],
  },
  how: {
    eyebrow: "技术架构",
    title: "从采集到洞察，全部在轨完成",
    desc: "传统模式需要把原始数据全部下传再处理；StarWeave 让数据在太空中就地变成答案。",
    steps: [
      { title: "在轨采集", text: "遥感载荷、传感器与通信终端持续产生原始数据。" },
      { title: "就地推理", text: "抗辐射 AI 芯片即时完成识别、压缩与分析。" },
      { title: "激光协同", text: "星间激光链路调度任务，多星协同分布式计算。" },
      { title: "结果回传", text: "仅下传高价值结果，地面即刻获得可用洞察。" },
    ],
    compareTitle: "下行数据量对比",
    before: "传统：原始数据全部下传",
    after: "在轨计算：仅回传结果",
    beforeNote: "排队等待地面站窗口，时延以小时计",
    afterNote: "结果以秒级送达，带宽成本显著降低",
  },
  apps: {
    eyebrow: "应用场景",
    title: "前沿技术，产业级影响",
    desc: "凡是数据产生于太空、或需要全球覆盖的实时智能，都是在轨算力的舞台。",
    items: [
      { title: "对地观测实时分析", text: "卫星影像在轨识别目标与变化，分钟级交付情报。" },
      { title: "灾害应急响应", text: "山火、洪水、地震第一时间研判，为救援争取黄金时间。" },
      { title: "海事与航空监测", text: "全球船舶与航迹实时追踪，服务航运、渔业与安全。" },
      { title: "气候与农业", text: "碳排放、作物长势与水资源的持续监测与预测。" },
      { title: "全球 AI 推理服务", text: "为地面用户提供绿色、可弹性扩展的推理算力。" },
      { title: "深空探测", text: "为未来月球与深空任务提供自主计算基础设施。" },
    ],
  },
  why: {
    eyebrow: "为什么是现在",
    title: "四股趋势正在交汇",
    items: [
      { title: "AI 能耗激增", text: "大模型推动全球算力需求与电力消耗持续攀升，地面能源与冷却成为硬约束。" },
      { title: "发射成本下降", text: "可复用火箭与批量化卫星制造，让大规模星座部署在经济上成为可能。" },
      { title: "芯片能效跃升", text: "高能效 AI 芯片与抗辐射加固技术成熟，单星即可承载可观推理算力。" },
      { title: "激光通信成熟", text: "星间激光链路已进入规模化在轨应用，为太空组网提供高速骨干。" },
    ],
  },
  roadmap: {
    eyebrow: "发展路径",
    title: "技术验证 — 在轨示范 — 星座组网 — 商业服务",
    center: "StarWeave",
    steps: [
      { title: "技术验证", text: "地面模拟与载荷原型" },
      { title: "在轨示范", text: "首批算力卫星上天" },
      { title: "星座组网", text: "激光互联、弹性扩容" },
      { title: "商业服务", text: "面向全球的算力与数据服务" },
    ],
  },
  invest: {
    eyebrow: "合作、投资与交流",
    title: "与我们共同塑造太空计算的未来",
    desc: "我们诚邀全球投资机构、航天与半导体产业伙伴、科研团队展开深度合作。",
    cards: [
      {
        kicker: "资本",
        title: "战略投资与早期融资",
        text: "我们正在积极寻求风险投资机构、产业基金与主权基金的战略合作与早期投资，共同抢占太空算力这一新型基础设施赛道。",
        points: ["风险投资与早期投资", "产业基金与战略投资", "全球化资本与市场协同"],
      },
      {
        kicker: "产业",
        title: "产业合作与联合研发",
        text: "欢迎卫星制造、发射服务、AI 芯片、光通信与数据应用领域的伙伴，共同推动在轨算力的工程落地与商业化。",
        points: ["卫星平台与载荷合作", "AI 芯片与激光通信联合研发", "遥感数据与行业应用共建"],
      },
    ],
    cta: "联系我们",
  },
  contact: {
    eyebrow: "联系方式",
    title: "期待与您交流",
    desc: "无论您关注投资机会、技术合作，还是行业应用，欢迎随时与我们联系。",
    send: "发送邮件",
    copy: "复制邮箱",
    copied: "已复制",
  },
  footer: {
    tagline: "构建在轨算力 · 把数据中心送上太空",
    rights: "保留所有权利。",
  },
};

export type Dictionary = typeof zh;

const en: Dictionary = {
  meta: {
    title: "StarWeave — Space Computing · Sending Data Centers to Orbit",
    description:
      "StarWeave builds an orbital compute network: satellites carrying radiation-hardened AI chips, powered by the sun, cooled by deep space and linked by inter-satellite lasers — processing data in place and returning only results.",
  },
  nav: {
    vision: "Vision",
    features: "Features",
    how: "Architecture",
    apps: "Use Cases",
    invest: "Invest",
    contact: "Contact",
    cta: "Contact Us",
    langLabel: "中文",
    langTitle: "切换到中文",
  },
  hero: {
    badge: "Space Computing · Orbital Compute",
    title1: "Compute in Orbit.",
    title2: "Data Centers in Space.",
    desc: "A space computing platform that moves the data center into orbit. Satellite constellations carry radiation-hardened AI chips, run on solar power, radiate heat into deep space and link up via inter-satellite lasers into an orbital compute network — processing data where it is born and returning only results, breaking the energy and bandwidth limits of ground-based compute.",
    primary: "Invest & Partner",
    secondary: "Explore the Platform",
    tags: ["Solar Powered", "Deep-Space Cooling", "Real-time Inference", "Laser Mesh"],
  },
  facts: [
    { value: "1361", unit: "W/m²", label: "Solar constant in orbit — no night, no clouds" },
    { value: "~3", unit: "K", label: "Deep-space background for radiative cooling" },
    { value: "0", unit: "L", label: "Cooling water used, zero land footprint" },
    { value: "10²+", unit: "Gbps", label: "Class of inter-satellite laser bandwidth" },
  ],
  vision: {
    eyebrow: "Positioning & Vision",
    title: "Bring compute to where data is born",
    desc: "AI is ultimately bounded by energy and bandwidth. Ground data centers are constrained by grid capacity, cooling water and land permits, while the flood of data satellites capture every day waits in line for downlink. StarWeave places compute directly in orbit, so data is created and computed in the same place.",
    eq: [
      { sym: "", code: "SAT", name: "Constellation", text: "LEO satellites with global coverage, close to every data source." },
      { sym: "+", code: "RAD-AI", name: "Rad-hard AI Chips", text: "Energy-efficient inference hardened for the space environment." },
      { sym: "+", code: "OISL", name: "Laser Links", text: "High-bandwidth, low-latency optical backbone in orbit." },
      { sym: "=", code: "ORBIT", name: "Orbital Compute", text: "A self-powered, elastically scalable data center in space." },
    ],
  },
  features: {
    eyebrow: "Core Features",
    title: "Breaking four bottlenecks of ground compute",
    desc: "Rebuilding compute infrastructure on the physical advantages of space.",
    items: [
      {
        icon: "sun",
        title: "Always-on Solar Power",
        text: "Dawn-dusk orbits enjoy near-continuous sunlight, turning solar energy straight into compute — clean, low-carbon and off the terrestrial grid.",
        tag: "Clean · Low-carbon",
      },
      {
        icon: "snow",
        title: "Natural Deep-Space Cooling",
        text: "Heat is radiated into near-absolute-zero space. No water, no land — no cooling towers and no competition for water resources.",
        tag: "Zero water · Zero land",
      },
      {
        icon: "bolt",
        title: "Compute at Capture",
        text: "Imagery, communications and sensor data are inferred in orbit in real time; only structured results come down, saving downlink bandwidth and time.",
        tag: "Real-time · Bandwidth-light",
      },
      {
        icon: "net",
        title: "Inter-satellite Laser Mesh",
        text: "Satellites interconnect via laser links into one network. Compute nodes join on demand, scaling elastically like the cloud.",
        tag: "Elastic · Scalable",
      },
    ],
  },
  how: {
    eyebrow: "Architecture",
    title: "From capture to insight — all in orbit",
    desc: "The legacy model downlinks every raw byte before processing. StarWeave turns data into answers right where it is captured.",
    steps: [
      { title: "Capture", text: "Payloads, sensors and terminals continuously generate raw data." },
      { title: "Infer in place", text: "Rad-hard AI chips detect, compress and analyze instantly." },
      { title: "Coordinate by laser", text: "Laser links schedule tasks for distributed multi-satellite compute." },
      { title: "Return results", text: "Only high-value results are downlinked — insight arrives immediately." },
    ],
    compareTitle: "Downlink volume",
    before: "Legacy: downlink all raw data",
    after: "Orbital compute: results only",
    beforeNote: "Queued for ground-station passes; latency in hours",
    afterNote: "Results in seconds, with far lower bandwidth cost",
  },
  apps: {
    eyebrow: "Use Cases",
    title: "Frontier technology, industrial impact",
    desc: "Wherever data is born in space, or real-time intelligence needs global reach, orbital compute takes the stage.",
    items: [
      { title: "Real-time Earth Observation", text: "Detect objects and change in orbit; deliver intelligence in minutes." },
      { title: "Disaster Response", text: "Assess wildfires, floods and earthquakes instantly to win the golden hour." },
      { title: "Maritime & Aviation", text: "Track vessels and flights worldwide for shipping, fisheries and security." },
      { title: "Climate & Agriculture", text: "Continuously monitor and forecast emissions, crops and water." },
      { title: "Global AI Inference", text: "Green, elastic inference capacity served to users on the ground." },
      { title: "Deep-space Missions", text: "Autonomous compute infrastructure for lunar and deep-space exploration." },
    ],
  },
  why: {
    eyebrow: "Why Now",
    title: "Four trends are converging",
    items: [
      { title: "AI energy demand", text: "Large models keep driving compute and power consumption up; ground energy and cooling are now hard limits." },
      { title: "Falling launch costs", text: "Reusable rockets and mass-produced satellites make large constellations economically viable." },
      { title: "Chip efficiency leaps", text: "Efficient AI silicon and radiation hardening have matured — one satellite can host meaningful inference." },
      { title: "Laser comms mature", text: "Inter-satellite laser links are in large-scale orbital use, providing a high-speed backbone." },
    ],
  },
  roadmap: {
    eyebrow: "Roadmap",
    title: "Validate — Demonstrate — Constellate — Commercialize",
    center: "StarWeave",
    steps: [
      { title: "Validate", text: "Ground simulation & payload prototypes" },
      { title: "Demonstrate", text: "First compute satellites in orbit" },
      { title: "Constellate", text: "Laser-linked, elastic expansion" },
      { title: "Commercialize", text: "Global compute & data services" },
    ],
  },
  invest: {
    eyebrow: "Partner · Invest · Connect",
    title: "Shape the future of space computing with us",
    desc: "We welcome investors, aerospace and semiconductor partners, and research teams worldwide to build with us.",
    cards: [
      {
        kicker: "Capital",
        title: "Strategic & Early-stage Investment",
        text: "We are actively seeking venture capital, industry funds and sovereign funds as strategic and early-stage partners to lead the emerging category of orbital compute infrastructure.",
        points: ["Venture & early-stage investment", "Industry & strategic funds", "Global capital and market synergy"],
      },
      {
        kicker: "Industry",
        title: "Industrial Partnership & Joint R&D",
        text: "We invite partners in satellite manufacturing, launch, AI chips, optical communications and data applications to engineer and commercialize orbital compute together.",
        points: ["Satellite bus & payload collaboration", "Joint R&D on AI chips and laser comms", "Co-building EO data & vertical apps"],
      },
    ],
    cta: "Get in Touch",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk",
    desc: "Whether you are exploring an investment, a technical partnership or an industry application, we would love to hear from you.",
    send: "Send Email",
    copy: "Copy Email",
    copied: "Copied",
  },
  footer: {
    tagline: "Compute in orbit · Data centers in space",
    rights: "All rights reserved.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { zh, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];
