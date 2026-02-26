import { SiteData } from "@/types";

export const siteData: SiteData = {
  profile: {
    name: "Yi Hao",
    role: "PhD Student",
    field: "Strategy & Entrepreneurship",
    institution: "University of North Carolina at Chapel Hill",
    department: "Strategy & Entrepreneurship",
    location: "Chapel Hill, North Carolina, USA",
    email: "yhao11@unc.edu",
    bio: "Yi Hao is a PhD student in Strategy and Entrepreneurship at the University of North Carolina at Chapel Hill. Her research interests include organizational learning, evaluation, R&D, and technology adoption. She examines how digitalization and institutional environments shape firm strategy using econometric analysis, network modeling, and computational text methods. Her work has been presented at the Academy of Management Annual Meeting and recognized with multiple scholarships and research awards. Reach her at yhao11@unc.edu or Yi_Hao@kenan-flagler.unc.edu.",
    portrait: "/portrait.jpg",
    cvFile: "/YiHao_CV.pdf",
  },
  researchInterests: [
    "Organizational Learning",
    "Evaluation",
    "R&D",
    "Tech Adoption",
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
      years: "Sep. 2022 – June 2025",
    },
    {
      degree: "BA",
      field: "Economics",
      institution: "Sichuan University",
      years: "Sep. 2015 – June 2019",
    },
  ],
  publications: [
    {
      authors: "Hao, Y., & Wang, R.",
      year: 2024,
      title:
        "The Impact of Digitalized Procurement on Supplier Selection: Evidence from Publicly Listed Firms in China",
      venue: "Working Paper",
      status: "In Progress",
    },
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
      title: "Digitalized Procurement and Supplier Selection",
      description:
        "Constructed a unique database by scraping publicly listed firm websites, analyzed panel data, and drafted manuscript.",
      tags: ["Digitalization", "Supply Chain", "Panel Data"],
    },
    {
      title: "Knowledge Diffusion in Supply Chain Networks",
      description:
        "Built supply chain networks, conducted text analysis on digital knowledge diffusion between partners, and analyzed dyad-year level data.",
      tags: ["Network Analysis", "Text Analysis", "Supply Chain"],
    },
    {
      title: "Institutional Fragility and Strategic Emphasis",
      description:
        "Investigated how institutional fragility and institutional development shape firms' relative strategic emphasis. Presented findings at multiple international conferences.",
      tags: ["Institutions", "Strategy", "Emerging Markets"],
    },
  ],
  skills: [
    {
      category: "Programming",
      items: ["Python", "R", "Stata"],
    },
    {
      category: "Methods",
      items: ["Econometrics", "Network Analysis", "Text Analysis", "Multivariate Statistics"],
    },
    {
      category: "Tools",
      items: ["LaTeX", "Web Scraping"],
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
      title: "Graduate Research Fund (¥12,000)",
      organization: "Tongji University, 2023",
    },
    {
      title: "Comprehensive Scholarship (Three Times)",
      organization: "Sichuan University, 2016–2018",
    },
    {
      title: "Guo Moruo Scholarship (Top 1%)",
      organization: "Sichuan University, 2015",
    },
    {
      title: "Excellent Social Practice Award",
      organization: "Sichuan University, 2017",
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
      url: "https://sordid-elderberry-f9a.notion.site/Waffle-Data-2740eadb1ec680548f76e9bd70181619?pvs=74",
    },
    {
      title: "PM Gallery",
      description: "Captured & Crafted",
      url: "https://sordid-elderberry-f9a.notion.site/Art-Collection-3120eadb1ec68056ace9e393c07fccd0?pvs=73",
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
      "Yi Hao is a PhD student in Strategy and Entrepreneurship at the University of North Carolina at Chapel Hill. Her research focuses on organizational learning, evaluation, R&D, and technology adoption.",
    keywords: [
      "Yi Hao",
      "UNC Chapel Hill",
      "strategy",
      "entrepreneurship",
      "technology adoption",
      "R&D",
      "evaluation",
      "digitalization",
      "Academy of Management",
    ],
    url: "https://yihao.vercel.app",
  },
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Service", href: "#service" },
  { label: "Awards", href: "#awards" },
  { label: "Experience", href: "#experience" },
  { label: "Data", href: "#data-exploration" },
  { label: "PM Gallery", href: "#pm-gallery" },
];
