// Edit this file on GitHub to update the live website.
// Tips:
// 1. Plain text fields are simple strings.
// 2. Fields ending with "Html" support links, images, GIFs, videos, and custom HTML.
// 3. Media examples:
//    <img src="./assets/example.gif" alt="Demo" />
//    <video controls src="./assets/demo.mp4"></video>
//    <a href="https://example.com">External link</a>

window.SITE_CONTENT = {
  meta: {
    title: "Yihang Liu | Academic Homepage",
    description:
      "Academic homepage of Yihang Liu, featuring research interests, academic experience, and contact information in 3D vision, GIS, Remoting Scening and AI."
  },
  brand: "Yihang Liu",
  navigation: [
    { label: "About", href: "#about" },
    { label: "Research", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "GIS / Remote Scening / 3D Vision / AI",
    title: "I work at the intersection of spatial intelligence, 3D vision, and applied AI.",
    text:
      "I am an undergraduate student in Geospatial Information Engineering at Shenzhen University, with interests in panoramic depth estimation, 3D scene understanding, spatial computing, and practical AI applications.",
    actions: [
      { label: "GitHub", href: "https://github.com/YihangLiu-giser", variant: "primary" },
      { label: "Research Focus", href: "#projects", variant: "secondary" },
    ],
    panel: {
      label: "Profile",
      title: "Research-driven academic homepage",
      text:
        "This homepage is designed as a concise academic profile, with emphasis on research interests, technical background, and future scholarly work.",
    },
    image: {
      src: "./assets/cartoon.svg",
      alt: "Portrait of Yihang Liu",
      caption: "Geospatial Information Engineering / Shenzhen University",
    },
    stats: [
      { label: "Focus", value: "3D Vision / GIS" },
      { label: "Education: Master", value: "Shenzhen University" },
    ],
  },
  about: {
    eyebrow: "About",
    title: "I enjoy translating research questions into concrete, testable systems.",
    summaryHtml: `
      <p>
        I study Geospatial Information Engineering at Shenzhen University, with a GPA of 3.68/4.5 and a comprehensive ranking of 16/68.
        My coursework and practice span data science, machine learning, computer vision, and visualization, with a strong interest in
        connecting GIS, 3D vision, and AI to real-world problems.
      </p>
    `,
    points: [
      {
        title: "Research Interests",
        html: `
          <p>
            Panoramic depth estimation, point cloud generation, photogrammetric mesh evaluation,
            visibility analysis, and intelligent urban applications.
          </p>
        `,
      },
      {
        title: "Technical Background",
        html: `
          <p>
            Comfortable with Python, SQL, HTML, and CSS, along with PyTorch, Transformer-based models,
            ViT, DINOv2, and DPT for model building, training, and inference.
          </p>
        `,
      },
      {
        title: "Academic and Practical Experience",
        html: `
          <p>
            I have experience in AI product testing, academic writing, competition leadership,
            and cross-team collaboration, with an emphasis on turning ideas into concrete outcomes.
          </p>
        `,
      },
    ],
  },
  projects: {
    eyebrow: "Research",
    title: "Current areas of interest",
    items: [
      {
        tag: "Area 01",
        title: "Panoramic depth estimation and point cloud generation",
        html: `
          <p>
            I am interested in building complete pipelines from single panoramic images to 3D point clouds,
            especially under spherical projection constraints and unstable depth scales.
          </p>
        `,
        href: "",
        linkLabel: "",
        image: {
          src: "",
          alt: "Panoramic depth research",
        },
      },
      {
        tag: "Area 02",
        title: "Evaluation of geometric-textural consistency in 3D models",
        html: `
          <p>
            I work on methods for evaluating real-scene 3D reconstruction quality,
            especially ways to describe how geometry and texture align under meaningful semantic structures.
          </p>
        `,
        href: "",
        linkLabel: "",
        image: {
          src: "",
          alt: "3D model evaluation",
        },
      },
      {
        tag: "Area 03",
        title: "Spatial analysis in dense urban environments",
        html: `
          <p>
            I am also interested in quantifying openness, visibility, and spatial experience
            in high-density built environments through 2D and 3D analytical models.
          </p>
        `,
        href: "",
        linkLabel: "",
        image: {
          src: "",
          alt: "Urban spatial analysis",
        },
      },
    ],
  },
  journey: {
    eyebrow: "Journey",
    title: "From GIS to 3D vision, I continue to connect research with real applications.",
    items: [
      {
        period: "2026",
        title: "Graduation research and AI product testing internship",
        html: `
          <p>
            Worked on panoramic depth estimation and point cloud generation for my graduation project,
            while also contributing to AI product testing and prompt optimization in an internship setting.
          </p>
        `,
      },
      {
        period: "2025",
        title: "Research on 3D reconstruction quality evaluation",
        html: `
          <p>
            Published research related to reference-free evaluation of geometric-textural consistency
            for photogrammetric meshes and received recognition in a national GIS competition paper track.
          </p>
        `,
      },
      {
        period: "2024",
        title: "Competitions and spatial analysis research",
        html: `
          <p>
            Led a team to a first prize in a national GIS application competition,
            published academic work, and participated in research around quantitative evaluation of open urban space.
          </p>
        `,
      },
    ],
  },
  sidebarContacts: [
    { label: "Gmail:giserhang@gmail.com", href: "mailto:giserhang@gmail.com" },
    { label: "Github:", href: "https://github.com/YihangLiu-giser" },
    {
      label: "ResearchGate",
      href: "https://www.researchgate.net/profile/Yihang-Liu-12?ev=hdr_xprf",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yihang-liu-1ab7333a9/",
    },
    { label: "Nanshan District, Shenzhen" },
    { label: "Shenzhen University" },
  ],
  contact: {
    eyebrow: "Contact",
    title: "I welcome conversations about GIS, 3D vision, academic collaboration, and practical AI applications.",
    bodyHtml: "",
  },
  footer: {
    name: "Yihang Liu",
  },
};
