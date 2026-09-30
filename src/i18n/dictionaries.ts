import type { Locale } from "./config";

const zh = {
  meta: {
    title: "StarWeave 星织 — 太空计算 · 把数据中心送上太空",
    description:
      "StarWeave 把数据中心送上轨道：卫星星座搭载抗辐射 AI 芯片，以太阳能供电、向深空散热，经星间激光链路组成在轨算力网络，像云计算一样按需向全球提供弹性算力。",
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
    badge: "太空计算 · 在轨云算力",
    title1: "构建在轨算力",
    title2: "把数据中心送上太空",
    desc: "把数据中心搬上轨道的太空计算方案。卫星星座搭载抗辐射 AI 芯片，以太阳能供电、向深空散热，经星间激光链路组成在轨算力网络；数据就地处理、仅回传结果，突破地面算力的能源与带宽瓶颈。",
    primary: "投资与合作",
    secondary: "了解方案",
    tags: ["太阳能供电", "深空散热", "按需弹性算力", "星间激光组网"],
  },
  facts: [
    { value: "1361", unit: "W/m²", label: "轨道太阳常数，无昼夜与天气遮挡" },
    { value: "~3", unit: "K", label: "深空背景温度，天然辐射散热" },
    { value: "0", unit: "L", label: "冷却用水，不占用地面土地" },
    { value: "10²+", unit: "Gbps", label: "星间激光链路级带宽" },
  ],
  vision: {
    eyebrow: "定位与愿景",
    title: "把云计算的算力池，建在太空",
    desc: "AI 的尽头是能源。地面数据中心正受限于电网容量、冷却用水与土地审批，扩容越来越慢、越来越贵。StarWeave 在轨道上建设能源自给的数据中心，并像云计算一样开放算力：用户按需申请、弹性扩缩、按量付费，无需关心算力来自哪一颗卫星。",
    eq: [
      { sym: "", code: "SAT", name: "算力卫星星座", text: "每颗卫星都是一台太空服务器，批量发射、持续扩容。" },
      { sym: "+", code: "RAD-AI", name: "抗辐射 AI 芯片", text: "面向空间环境加固的高能效 AI 训练与推理算力。" },
      { sym: "+", code: "OISL", name: "星间激光链路", text: "高带宽、低时延的在轨光通信骨干网。" },
      { sym: "=", code: "ORBIT CLOUD", name: "在轨云算力", text: "能源自给、按需取用、弹性扩展的太空数据中心。" },
    ],
  },
  features: {
    eyebrow: "核心特性",
    title: "突破地面算力的四大瓶颈",
    desc: "以太空的物理优势重构算力基础设施。",
    items: [
      {
        title: "全天候太阳能供电",
        text: "晨昏轨道几乎持续光照，太阳能直接转化为算力，清洁低碳，不与地面电网争夺容量。",
        tag: "清洁 · 低碳",
      },
      {
        title: "深空天然散热",
        text: "以辐射方式向接近绝对零度的深空排热，不耗水、不占地，彻底告别冷却塔与水资源争议。",
        tag: "零水耗 · 零占地",
      },
      {
        title: "数据即采即算",
        text: "遥感、通信与传感数据在轨实时推理，只回传结构化结果，大幅节省下行带宽与响应时间。",
        tag: "实时 · 省带宽",
      },
      {
        title: "星间激光组网",
        text: "卫星之间以激光链路互联成网，算力节点可按需加入，实现像云一样的弹性扩展。",
        tag: "弹性 · 可扩展",
      },
    ],
  },
  how: {
    eyebrow: "技术架构",
    title: "像使用云一样，使用太空算力",
    desc: "用户在地面提交任务，由在轨算力集群执行并交付结果——算力的获取方式与云计算一致，算力的来源在太空。",
    steps: [
      { title: "提交任务", text: "通过 API 或控制台提交 AI 训练、推理与计算任务，按需申请算力。" },
      { title: "上行调度", text: "地面站与光通信链路把任务、模型与数据分发到最合适的在轨节点。" },
      { title: "在轨计算", text: "太阳能供电的算力卫星经星间激光组成集群，分布式并行执行。" },
      { title: "结果交付", text: "计算结果回传地面，经云接口交付；在轨产生的数据则就地处理。" },
    ],
    compareTitle: "地面数据中心 vs 在轨云算力",
    compareHead: ["", "地面数据中心", "StarWeave 在轨云算力"],
    compare: [
      { k: "能源", ground: "依赖电网采购，扩容受电力指标制约", orbit: "太阳能直供，近乎全天候光照" },
      { k: "冷却", ground: "冷却塔与空调，大量耗水耗电", orbit: "向深空辐射散热，零水耗" },
      { k: "选址", ground: "占用土地，审批周期长", orbit: "无需土地，轨道即机房" },
      { k: "扩容", ground: "新建园区，以年计", orbit: "发射新算力卫星即可入网" },
    ],
  },
  apps: {
    eyebrow: "应用场景",
    title: "一朵太空云，服务千行百业",
    desc: "与云计算一样，在轨算力以服务的形式交付——从大模型到企业级计算，都可以按需取用。",
    items: [
      { tag: "推理 API", title: "大模型推理服务", text: "以 API 形式提供在轨 AI 推理算力，按调用量计费，开箱即用。" },
      { tag: "训练 · 批量计算", title: "AI 训练与高性能计算", text: "模型训练、渲染与科学计算等长时任务，调度至能源充沛的轨道集群。" },
      { tag: "零碳算力", title: "绿色低碳算力", text: "太阳能供电、零水耗，帮助企业以清洁算力达成 ESG 与减排目标。" },
      { tag: "就近处理", title: "卫星数据在轨处理", text: "遥感与通信卫星运营商就近调用在轨算力，数据即采即算、仅回传结果。" },
      { tag: "全球覆盖", title: "全球泛在算力接入", text: "海洋、航空与偏远地区无需本地数据中心，经卫星链路即可接入算力。" },
      { tag: "灾备 · 韧性", title: "算力灾备与业务韧性", text: "独立于地面电网与自然灾害的在轨算力，为关键业务提供异地容灾。" },
    ],
  },
  why: {
    eyebrow: "为什么是现在",
    title: "四股趋势正在交汇",
    items: [
      { title: "AI 能耗激增", text: "大模型推动全球算力需求与电力消耗持续攀升，地面能源与冷却成为硬约束。" },
      { title: "发射成本下降", text: "可复用火箭与批量化卫星制造，让大规模星座部署在经济上成为可能。" },
      { title: "芯片能效跃升", text: "高能效 AI 芯片与抗辐射加固技术成熟，单颗卫星即可承载可观算力。" },
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
      { title: "商业服务", text: "面向全球的太空云算力服务" },
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
        text: "我们正在积极寻求风险投资机构、产业基金与主权基金的战略合作与早期投资，共同抢占太空云算力这一新型算力基础设施赛道。",
        points: ["风险投资与早期投资", "产业基金与战略投资", "全球化资本与市场协同"],
      },
      {
        kicker: "产业",
        title: "产业合作与联合研发",
        text: "欢迎卫星制造、发射服务、AI 芯片、光通信与云计算领域的伙伴，共同推动在轨算力的工程落地与商业化。",
        points: ["卫星平台与发射合作", "AI 芯片与激光通信联合研发", "云厂商与 AI 企业算力合作"],
      },
    ],
    cta: "联系我们",
  },
  contact: {
    eyebrow: "联系方式",
    title: "期待与您交流",
    desc: "无论您关注投资机会、技术合作，还是算力采购与合作，欢迎随时与我们联系。",
    send: "发送邮件",
    copy: "复制邮箱",
    copied: "已复制",
  },
  footer: {
    tagline: "构建在轨算力 · 把数据中心送上太空",
    rights: "保留所有权利。",
    photos: "图片来源",
  },
};

export type Dictionary = typeof zh;

const en: Dictionary = {
  meta: {
    title: "StarWeave — Space Computing · Sending Data Centers to Orbit",
    description:
      "StarWeave moves the data center into orbit: satellites carrying radiation-hardened AI chips, powered by the sun, cooled by deep space and linked by inter-satellite lasers — delivering elastic compute on demand to the world, just like the cloud.",
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
    badge: "Space Computing · Orbital Cloud",
    title1: "Compute in Orbit.",
    title2: "Data Centers in Space.",
    desc: "A space computing platform that moves the data center into orbit. Satellite constellations carry radiation-hardened AI chips, run on solar power, radiate heat into deep space and link up via inter-satellite lasers into an orbital compute network — processing data where it is born and returning only results, breaking the energy and bandwidth limits of ground-based compute.",
    primary: "Invest & Partner",
    secondary: "Explore the Platform",
    tags: ["Solar Powered", "Deep-Space Cooling", "Elastic Compute", "Laser Mesh"],
  },
  facts: [
    { value: "1361", unit: "W/m²", label: "Solar constant in orbit — no night, no clouds" },
    { value: "~3", unit: "K", label: "Deep-space background for radiative cooling" },
    { value: "0", unit: "L", label: "Cooling water used, zero land footprint" },
    { value: "10²+", unit: "Gbps", label: "Class of inter-satellite laser bandwidth" },
  ],
  vision: {
    eyebrow: "Positioning & Vision",
    title: "The cloud’s compute pool — built in space",
    desc: "AI is ultimately bounded by energy. Ground data centers are constrained by grid capacity, cooling water and land permits, making expansion ever slower and costlier. StarWeave builds self-powered data centers in orbit and opens them up like the cloud: request on demand, scale elastically, pay for what you use — without caring which satellite runs your workload.",
    eq: [
      { sym: "", code: "SAT", name: "Compute Constellation", text: "Every satellite is a server in space — launched in batches, expanded continuously." },
      { sym: "+", code: "RAD-AI", name: "Rad-hard AI Chips", text: "Energy-efficient AI training and inference hardened for space." },
      { sym: "+", code: "OISL", name: "Laser Links", text: "High-bandwidth, low-latency optical backbone in orbit." },
      { sym: "=", code: "ORBIT CLOUD", name: "Orbital Cloud", text: "A self-powered, on-demand, elastically scalable data center in space." },
    ],
  },
  features: {
    eyebrow: "Core Features",
    title: "Breaking four bottlenecks of ground compute",
    desc: "Rebuilding compute infrastructure on the physical advantages of space.",
    items: [
      {
        title: "Always-on Solar Power",
        text: "Dawn-dusk orbits enjoy near-continuous sunlight, turning solar energy straight into compute — clean, low-carbon and off the terrestrial grid.",
        tag: "Clean · Low-carbon",
      },
      {
        title: "Natural Deep-Space Cooling",
        text: "Heat is radiated into near-absolute-zero space. No water, no land — no cooling towers and no competition for water resources.",
        tag: "Zero water · Zero land",
      },
      {
        title: "Compute at Capture",
        text: "Imagery, communications and sensor data are inferred in orbit in real time; only structured results come down, saving downlink bandwidth and time.",
        tag: "Real-time · Bandwidth-light",
      },
      {
        title: "Inter-satellite Laser Mesh",
        text: "Satellites interconnect via laser links into one network. Compute nodes join on demand, scaling elastically like the cloud.",
        tag: "Elastic · Scalable",
      },
    ],
  },
  how: {
    eyebrow: "Architecture",
    title: "Use space compute the way you use the cloud",
    desc: "Users submit jobs on the ground; orbital clusters run them and deliver results. Access works just like cloud computing — the compute simply lives in space.",
    steps: [
      { title: "Submit", text: "Send AI training, inference and compute jobs via API or console, on demand." },
      { title: "Uplink & schedule", text: "Ground stations and optical links route jobs, models and data to the best orbital nodes." },
      { title: "Compute in orbit", text: "Solar-powered satellites form a laser-linked cluster and run workloads in parallel." },
      { title: "Deliver", text: "Results return to Earth through cloud APIs; data born in orbit is processed in place." },
    ],
    compareTitle: "Ground data center vs orbital cloud",
    compareHead: ["", "Ground data center", "StarWeave orbital cloud"],
    compare: [
      { k: "Energy", ground: "Bought from the grid; growth capped by power quotas", orbit: "Direct solar, near-continuous sunlight" },
      { k: "Cooling", ground: "Chillers and towers consuming water and power", orbit: "Radiated into deep space, zero water" },
      { k: "Siting", ground: "Needs land and lengthy permits", orbit: "No land — the orbit is the server hall" },
      { k: "Scaling", ground: "New campuses take years", orbit: "Launch new compute satellites to join the mesh" },
    ],
  },
  apps: {
    eyebrow: "Use Cases",
    title: "One orbital cloud, every industry",
    desc: "Like the cloud, orbital compute is delivered as a service — from large models to enterprise workloads, available on demand.",
    items: [
      { tag: "Inference API", title: "LLM Inference Service", text: "Orbital AI inference exposed as an API, billed per call and ready to use." },
      { tag: "Training · Batch", title: "AI Training & HPC", text: "Long-running training, rendering and scientific jobs scheduled onto energy-rich orbital clusters." },
      { tag: "Zero-carbon", title: "Green Compute", text: "Solar-powered and water-free, helping enterprises meet ESG and emissions goals." },
      { tag: "Process in place", title: "Satellite Data Processing", text: "EO and comms operators tap nearby orbital compute — process at capture, return only results." },
      { tag: "Global reach", title: "Compute Everywhere", text: "Oceans, aviation and remote regions access compute over satellite links — no local data center needed." },
      { tag: "Resilience", title: "Disaster Recovery", text: "Compute independent of ground grids and natural disasters, as off-site backup for critical workloads." },
    ],
  },
  why: {
    eyebrow: "Why Now",
    title: "Four trends are converging",
    items: [
      { title: "AI energy demand", text: "Large models keep driving compute and power consumption up; ground energy and cooling are now hard limits." },
      { title: "Falling launch costs", text: "Reusable rockets and mass-produced satellites make large constellations economically viable." },
      { title: "Chip efficiency leaps", text: "Efficient AI silicon and radiation hardening have matured — one satellite can host meaningful compute." },
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
      { title: "Commercialize", text: "Global orbital cloud services" },
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
        text: "We are actively seeking venture capital, industry funds and sovereign funds as strategic and early-stage partners to lead the emerging category of orbital cloud infrastructure.",
        points: ["Venture & early-stage investment", "Industry & strategic funds", "Global capital and market synergy"],
      },
      {
        kicker: "Industry",
        title: "Industrial Partnership & Joint R&D",
        text: "We invite partners in satellite manufacturing, launch, AI chips, optical communications and cloud computing to engineer and commercialize orbital compute together.",
        points: ["Satellite platform & launch partnerships", "Joint R&D on AI chips and laser comms", "Compute partnerships with clouds & AI firms"],
      },
    ],
    cta: "Get in Touch",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk",
    desc: "Whether you are exploring an investment, a technical partnership or buying compute, we would love to hear from you.",
    send: "Send Email",
    copy: "Copy Email",
    copied: "Copied",
  },
  footer: {
    tagline: "Compute in orbit · Data centers in space",
    rights: "All rights reserved.",
    photos: "Photos via",
  },
};

const dictionaries: Record<Locale, Dictionary> = { zh, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];
