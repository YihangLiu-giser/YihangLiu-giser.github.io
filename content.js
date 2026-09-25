/*
 * 网站内容后台（唯一需要经常修改的文件）
 * ------------------------------------------------------------
 * 在线修改：
 * https://github.com/YihangLiu-giser/YihangLiu-giser.github.io/edit/main/content.js
 *
 * 修改文字后点击 GitHub 页面底部的 “Commit changes”。
 * GitHub Pages 会在几分钟内自动更新网站。
 *
 * 注意：
 * 1. 文字必须放在英文引号或反引号内。
 * 2. 每一项之间要保留英文逗号。
 * 3. 图片上传到 assets/，然后把路径写成 ./assets/文件名。
 */

window.PORTFOLIO_CONTENT = {
  settings: {
    defaultLanguage: "en",
    siteUrl: "https://yihangliu-giser.github.io",
    repository: "https://github.com/YihangLiu-giser/YihangLiu-giser.github.io",
    lastUpdated: "2026-09",
  },

  profile: {
    name: "Yihang Liu",
    chineseName: "刘一航",
    avatar: "./assets/profile.jpg",
    email: "giserhang@gmail.com",
    github: "https://github.com/YihangLiu-giser",
    researchGate: "https://www.researchgate.net/profile/Yihang-Liu-12?ev=hdr_xprf",
    linkedIn: "https://www.linkedin.com/in/yihang-liu-1ab7333a9/",
    location: "Shenzhen, China",
  },

  en: {
    meta: {
      title: "Yihang Liu | Spatial Intelligence & 3D Vision",
      description: "Academic portfolio of Yihang Liu — geospatial information engineering, panoramic depth estimation, photogrammetric mesh evaluation, and urban spatial analysis.",
    },
    nav: [
      ["Home", "#home"],
      ["Research", "#research"],
      ["Experience", "#experience"],
      ["Contact", "#contact"],
    ],
    hero: {
      eyebrow: "GEOSPATIAL INFORMATION ENGINEERING · SHENZHEN UNIVERSITY",
      title: "Spatial intelligence and 3D vision.",
      intro: "I am a geospatial information engineering student working across panoramic depth estimation, point-cloud generation, photogrammetric mesh evaluation, and urban spatial analytics.",
      primaryAction: "Explore my research",
      secondaryAction: "Email me",
      status: "Open to research and technical opportunities",
    },
    facts: [
      { value: "3.66 / 4.5", label: "GPA" },
      { value: "16 / 68", label: "Overall rank" },
      { value: "2×", label: "National GIS awards" },
      { value: "SCI", label: "Co-authored paper" },
    ],
    about: {
      label: "ABOUT",
      title: "Research grounded in geometry, vision, and real places.",
      paragraphs: [
        "I study Geospatial Information Engineering (Smart City) at the School of Architecture and Urban Planning, Shenzhen University. My work connects computer vision and spherical geometry with practical questions in 3D reconstruction and urban analysis.",
        "I enjoy building complete, testable pipelines: from model design and geometric reasoning to implementation, evaluation, and communication. Core coursework includes Data Science & Data Mining, 3D Modeling & Simulation, Computer Graphics, and Computer Vision.",
      ],
      interests: ["Panoramic depth estimation", "3D reconstruction", "Point clouds", "Photogrammetry", "Spatial visibility", "Applied AI"],
    },
    education: {
      title: "Education",
      school: "Shenzhen University",
      degree: "B.Eng. in Geospatial Information Engineering (Smart City)",
      schoolUnit: "School of Architecture and Urban Planning",
      details: "GPA 3.66 / 4.5 · Overall rank 16 / 68",
      coursework: "Selected coursework: Data Science & Data Mining, 3D Modeling & Simulation, Computer Graphics, Computer Vision.",
    },
    research: {
      label: "SELECTED RESEARCH",
      title: "Three questions I have been exploring.",
      projects: [
        {
          number: "01",
          period: "Mar — Dec 2025",
          title: "Panoramic depth estimation and point-cloud generation",
          summary: "An end-to-end pipeline from a single equirectangular panorama to a 3D point cloud, addressing projection distortion, unstable scale, and structural recovery.",
          bullets: [
            "Built a DINOv2 + DPT monocular depth framework for ERP panoramas.",
            "Designed an ERP–Cubemap dual-branch feature fusion module.",
            "Introduced spherical coordinate encoding and geodesic attention bias.",
          ],
          outcome: "Recommended as an Outstanding Graduation Thesis at school level",
        },
        {
          number: "02",
          period: "Mar — Dec 2025",
          title: "Geometric–textural consistency of photogrammetric meshes",
          summary: "A reference-free, semantics-aware quality evaluation method that quantifies alignment between geometric structures and texture boundaries using area-weighted IoU.",
          bullets: [
            "Second Prize, 17th National University GIS Skills Competition (team leader).",
            "Co-authored a PE&RS paper on reference-free consistency evaluation.",
          ],
          outcome: "National competition award · SCI co-authorship",
        },
        {
          number: "03",
          period: "Oct 2023 — Oct 2024",
          title: "3D visibility and urban open-space quantification",
          summary: "A 2D/3D visibility framework for measuring how building form affects spatial experience in dense urban environments, including a volumetric openness indicator.",
          bullets: [
            "Supported by the 2024 Shenzhen University Student Innovation Fund.",
            "Related work published in Bulletin of Surveying and Mapping.",
            "Patent: method and system for quantifying open space between 3D buildings.",
          ],
          outcome: "Funded research · Publication · Patent",
        },
      ],
    },
    experience: {
      label: "EXPERIENCE",
      title: "Research thinking, tested in practice.",
      items: [
        {
          period: "Jun — Aug 2026",
          role: "Planning & GIS Intern",
          organization: "Shenzhen Urban Planning & Design Institute",
          description: "Supported fieldwork and drone surveys, coordinated with Nanshan District planning and natural-resources stakeholders, contributed to land and facility-support work, and produced ArcGIS maps and presentations.",
        },
        {
          period: "Jan — Feb 2026",
          role: "AI Product Testing Intern",
          organization: "Shenzhen Volcano Digital Media Technology Co., Ltd.",
          description: "Tested AI conversational wearable devices for museums and exhibitions, refined prompts on large-model platforms, and evaluated cloud vision, speech, and multimodal models in real scenarios.",
        },
        {
          period: "Sep 2024 — Sep 2025",
          role: "Deputy Head, External Relations",
          organization: "School of Architecture & Urban Planning, Shenzhen University",
          description: "Coordinated partnerships, cross-team communication, and event delivery for the school’s student organization.",
        },
      ],
    },
    highlights: {
      label: "HIGHLIGHTS",
      title: "Selected recognition and open-source work.",
      awardsTitle: "Awards & outputs",
      awards: [
        "Second Prize · 17th National University GIS Skills Competition, paper track (Team Leader)",
        "First Prize · 13th National GIS Application Skills Competition (Team Leader), Nov 2024",
        "Second Prize · Esri China University GIS Software Development Competition, Story Maps, Oct 2023",
        "PE&RS · Reference-free Evaluation of Geometric-Textural Consistency for Photogrammetric Meshes (second author)",
      ],
      codeTitle: "Open-source projects",
      repositories: [
        { name: "ESTARFM_CUDA", language: "C++ / CUDA", href: "https://github.com/YihangLiu-giser/ESTARFM_CUDA" },
        { name: "STARFM_CUDA", language: "C++ / CUDA", href: "https://github.com/YihangLiu-giser/STARFM_CUDA" },
        { name: "zebra_crossing-with-U-net", language: "Jupyter / Deep Learning", href: "https://github.com/YihangLiu-giser/zebra_crossing-with-U-net" },
        { name: "VIS", language: "JavaScript", href: "https://github.com/YihangLiu-giser/VIS" },
      ],
    },
    contact: {
      label: "CONTACT",
      title: "Let’s map the next question.",
      text: "I welcome conversations about GIS, 3D vision, spatial computing, research collaboration, and applied AI.",
      button: "Start a conversation",
    },
    footer: "Designed for clarity. Built as an editable GitHub Pages site.",
    languageButton: "中文",
  },

  zh: {
    meta: {
      title: "刘一航 | 空间智能与三维视觉",
      description: "刘一航的学术主页，关注地理空间信息工程、全景深度估计、实景三维质量评价与城市空间分析。",
    },
    nav: [["首页", "#home"], ["研究", "#research"], ["经历", "#experience"], ["联系", "#contact"]],
    hero: {
      eyebrow: "地理空间信息工程 · 深圳大学",
      title: "空间智能与三维视觉。",
      intro: "我专注于全景深度估计、点云生成、实景三维模型质量评价与城市空间分析，探索计算机视觉、球面几何与 GIS 的交叉应用。",
      primaryAction: "查看研究项目",
      secondaryAction: "邮件联系",
      status: "期待科研合作与技术交流",
    },
    facts: [
      { value: "3.66 / 4.5", label: "GPA" },
      { value: "16 / 68", label: "综合排名" },
      { value: "2 次", label: "国家级 GIS 竞赛获奖" },
      { value: "SCI", label: "论文合作" },
    ],
    about: {
      label: "关于我",
      title: "以几何、视觉与真实空间为研究坐标。",
      paragraphs: [
        "我就读于深圳大学建筑与城市规划学院地理空间信息工程（智慧城市）专业，研究方向连接计算机视觉、球面几何、三维重建与城市空间分析。",
        "我喜欢把研究问题转化为完整、可验证的技术流程，从模型设计与几何推导，到实现、评价与成果表达。核心课程包括数据科学与数据挖掘、三维建模与仿真、计算机图形学和计算机视觉。",
      ],
      interests: ["全景深度估计", "三维重建", "点云", "摄影测量", "空间可视性", "AI 应用"],
    },
    education: {
      title: "教育背景",
      school: "深圳大学",
      degree: "地理空间信息工程（智慧城市）工学学士",
      schoolUnit: "建筑与城市规划学院",
      details: "GPA 3.66 / 4.5 · 综合排名 16 / 68",
      coursework: "核心课程：数据科学与数据挖掘、三维建模与仿真、计算机图形学、计算机视觉。",
    },
    research: {
      label: "代表性研究",
      title: "我正在探索的三个问题。",
      projects: [
        {
          number: "01",
          period: "2025.03 — 2025.12",
          title: "全景影像深度估计与点云生成",
          summary: "围绕单张 ERP 全景影像到三维点云自动生成任务，构建完整技术流程，重点解决投影畸变、尺度不稳定与三维结构恢复问题。",
          bullets: ["基于 DINOv2 + DPT 构建全景单目深度估计框架。", "设计 ERP–Cubemap 双分支特征融合模块。", "引入球面坐标编码与球面测地线注意力偏置。"],
          outcome: "院级优秀毕业论文推荐",
        },
        {
          number: "02",
          period: "2025.03 — 2025.12",
          title: "实景三维模型几何与纹理一致性评价",
          summary: "提出面向语义结构的无参考质量评价方法，引入面积加权交并比，对几何结构与纹理结构的对齐关系进行定量建模。",
          bullets: ["第十七届全国高校 GIS 技能大赛论文组二等奖（队长）。", "PE&RS 论文《Reference-free Evaluation of Geometric-Textural Consistency for Photogrammetric Meshes》第二作者。"],
          outcome: "国家级竞赛获奖 · SCI 论文",
        },
        {
          number: "03",
          period: "2023.10 — 2024.10",
          title: "基于三维可视域的高密度建筑开敞空间量化",
          summary: "结合二维、三维可视域计算，提出体积开敞度指标，定量分析高密度城市中建筑形态与空间体验的关系。",
          bullets: ["获 2024 深圳大学学生创新发展基金基础支持。", "相关成果发表于《测绘通报》。", "形成三维建筑物间开敞空间量化评估相关专利。"],
          outcome: "基金支持 · 论文 · 专利",
        },
      ],
    },
    experience: {
      label: "实践经历",
      title: "让研究思维在真实项目中接受检验。",
      items: [
        { period: "2026.06 — 2026.08", role: "规划与 GIS 实习生", organization: "深圳市城市规划设计研究院", description: "参与无人机外业勘探、南山区规划与自然资源相关业务对接、用地设施保障项目，以及 ArcGIS 制图与汇报材料制作。" },
        { period: "2026.01 — 2026.02", role: "AI 产品测试实习生", organization: "深圳火山数字传媒科技有限公司", description: "参与博物馆、展览馆场景 AI 对话穿戴设备测试，进行 Prompt 调优，并测试云端视觉、语音与多模态模型在真实场景中的表现。" },
        { period: "2024.09 — 2025.09", role: "外联部副部长", organization: "深圳大学建筑与城市规划学院", description: "负责学院活动商务合作、外联资源协调及跨部门沟通与执行。" },
      ],
    },
    highlights: {
      label: "成果与项目",
      title: "部分荣誉与开源实践。",
      awardsTitle: "荣誉与学术成果",
      awards: [
        "第十七届全国高校 GIS 技能大赛论文组二等奖（队长）",
        "第十三届全国 GIS 应用技能大赛一等奖（队长），2024.11",
        "易智瑞中国大学生 GIS 软件开发竞赛地图故事组二等奖，2023.10",
        "PE&RS · Reference-free Evaluation of Geometric-Textural Consistency for Photogrammetric Meshes（第二作者）",
      ],
      codeTitle: "开源项目",
      repositories: [
        { name: "ESTARFM_CUDA", language: "C++ / CUDA", href: "https://github.com/YihangLiu-giser/ESTARFM_CUDA" },
        { name: "STARFM_CUDA", language: "C++ / CUDA", href: "https://github.com/YihangLiu-giser/STARFM_CUDA" },
        { name: "zebra_crossing-with-U-net", language: "Jupyter / 深度学习", href: "https://github.com/YihangLiu-giser/zebra_crossing-with-U-net" },
        { name: "VIS", language: "JavaScript", href: "https://github.com/YihangLiu-giser/VIS" },
      ],
    },
    contact: {
      label: "联系我",
      title: "一起定义下一个空间问题。",
      text: "欢迎就 GIS、三维视觉、空间计算、科研合作与 AI 应用进行交流。",
      button: "发送邮件",
    },
    footer: "为清晰表达而设计，通过 GitHub Pages 持续维护。",
    languageButton: "EN",
  },
};
