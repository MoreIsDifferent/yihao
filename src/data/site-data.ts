import { SiteData } from "@/types";

export const siteData: SiteData = {
  profile: {
    name: "Yi Hao",
    field: "PhD Student", // 颜色使用主题模板下统一的蓝色
    institution: "University of North Carolina at Chapel Hill",
    department: "Strategy & Entrepreneurship @ Kenan-Flagler Business School",
    location: "Chapel Hill, North Carolina, USA",
    email: "yhao11@unc.edu",
    bio: "Yi Hao is a PhD student in Strategy and Entrepreneurship at the University of North Carolina at Chapel Hill. Her research interests include Organizational Learning, Category and Evaluation, Venture Capital, and Bio Tech. Her work has been presented at the Academy of Management Annual Meeting. ",
    portrait: "/portrait.jpg",
    cvFile: "/YiHao_CV.pdf",
  },
  researchInterests: [
    "Organizational Learning",
    "Category and Evaluation",
    "Venture Capital",
    "Bio Tech",
  ],
  education: [
    {
      degree: "PhD",
      field: "Strategy & Entrepreneurship",
      institution: "University of North Carolina at Chapel Hill",
      years: "Sep. 2025 – Present",
    },
    {
      degree: "MSc",
      field: "Management Science",
      institution: "Tongji University",
      years: "2025",
    },
    {
      degree: "BA",
      field: "Economics",
      institution: "Sichuan University",
      years: "2019",
    },
  ],
  publications: [
    {
      authors: "Gong, T., Li, J., Hao, Y., & Li, Y.",
      year: 2024,
      title:
        "Influence Power of Partners and the Focal Firm and Digital Knowledge Diffusion in Supply Chain",
      venue: "Academy of Management Proceedings",
      status: "Finalist, ISM Best Paper Award",
    },
    {
      authors: "Hao, Y., & Jin, J. L.",
      year: 2023,
      title:
        "Institutional Fragility, Institutional Development, and Relative Strategic Emphasis",
      venue:
        "Presented at AoM 2023 (Boston), MSI 2023 (Shanghai), QJM-PDW 2023 (Nanjing)",
    },
  ],
  projects: [
    {
      title:
        "The Impact of Digitalized Procurement on Supplier Selection: Evidence from Publicly Listed Firms in China",
      authors: "With Ruitong Wang",
      abstract: "Abstract Coming Soon",
      tags: ["Digitalized Procurement", "Supplier Selection"],
    },
    {
      title: "Information Disclosure and Search Behavior",
      authors: "With Isin Guler, Christine Choi",
      abstract: "Abstract Coming Soon",
      tags: ["Information Disclosure", "Search Behavior"],
    },
  ],
  skills: [
    {
      category: "Programming",
      items: ["Python", "R", "Stata"],
    },
    {
      category: "Methods",
      items: ["Econometrics", "Network Analysis", "Text Analysis"],
    },
  ],
  service: [
    {
      description:
        "Teaching Assistant, Advanced Strategic Management Research, Tongji University",
    },
  ],
  awards: [
    {
      title: "Outstanding Master's Thesis",
      organization: "Tongji University, 2025",
    },
    {
      title: "Graduate Research Fund",
      organization: "Tongji University, 2023",
    },
    {
      title: "Excellent Social Practice Award",
      organization: "Sichuan University, 2017",
    },
    {
      title: "Comprehensive Scholarship (Three Times)",
      organization: "Sichuan University, 2016–2018",
    },
    {
      title: "Guo Moruo Scholarship (Top 1%)",
      organization: "Leshan No.1 High School, 2015",
    },
  ],
  practiceExperience: [
    {
      title: "Sichuan University–Stanford University Sustainable Urban Systems Project",
      role: "Project Member",
      period: "Oct. 2017 – June 2018",
      location: "Chengdu, China",
      bullets: [
        "Designed, collected, and analyzed questionnaires; conducted a pilot experiment.",
        "Presented at the 2018 International Student Conference on Environment and Sustainability.",
      ],
    },
    {
      title: "Precise Poverty Alleviation Research",
      role: "Researcher",
      period: "July 2017 – Aug. 2017",
      location: "Ganluo County, Liangshan",
      bullets: [
        "Interviewed households and wrote poverty alleviation plans for Ganluo County.",
        "Awarded the 2017 Sichuan University Excellent Social Practice Award.",
      ],
    },
    {
      title: "Pengzhou Medical Health Industry Development Planning",
      role: "Assistant",
      period: "Oct. 2018 – Mar. 2019",
      location: "Pengzhou, China",
      bullets: [
        "Participated in government meetings and contributed to regional development plan writing.",
      ],
    },
  ],
  externalLinks: [
    {
      title: "Waffle Data",
      description: "Descriptive Results",
      url: "/data",
    },
    {
      title: "PM Gallery",
      description: "Captured & Crafted by Yi",
      url: "/pm-gallery",
    },
  ],
  social: [
    {
      label: "Google Scholar",
      url: "https://scholar.google.com",
      icon: "scholar",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      url: "https://github.com",
      icon: "github",
    },
  ],
  meta: {
    title: "Yi Hao | PhD Student – Strategy & Entrepreneurship, UNC Chapel Hill",
    description:
      "Yi Hao is a PhD student in Strategy and Entrepreneurship at the University of North Carolina at Chapel Hill. Her research focuses on organizational learning, category and evaluation, venture capital, and bio tech.",
    keywords: [
      "Yi Hao",
      "UNC Chapel Hill",
      "strategy",
      "entrepreneurship",
      "organizational learning",
      "category",
      "evaluation",
      "venture capital",
      "bio tech",
      "digitalization",
      "Academy of Management",
    ],
    url: "https://moreisdifferent.github.io/yihao/",
  },
};

export const navItems = [
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Service", href: "#service" },
  { label: "Awards", href: "#awards" },
  { label: "Experience", href: "#experience" },
  { label: "Data", href: "/data" },
  { label: "PM Gallery", href: "/pm-gallery" },
];
