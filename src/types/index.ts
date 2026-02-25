export interface Profile {
  name: string;
  role: string;
  field: string;
  institution: string;
  department: string;
  location: string;
  email: string;
  bio: string;
  portrait: string;
  cvFile: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  years: string;
}

export interface Publication {
  authors: string;
  year: number;
  title: string;
  venue: string;
  status?: string;
  url?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ServiceItem {
  description: string;
}

export interface Award {
  title: string;
  organization: string;
}

export interface PracticeExperience {
  title: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface ExternalLink {
  title: string;
  description?: string;
  url: string;
  comingSoon?: boolean;
}

export interface SiteData {
  profile: Profile;
  researchInterests: string[];
  education: Education[];
  publications: Publication[];
  projects: Project[];
  skills: SkillGroup[];
  service: ServiceItem[];
  awards: Award[];
  practiceExperience: PracticeExperience[];
  social: SocialLink[];
  externalLinks: ExternalLink[];
  meta: {
    title: string;
    description: string;
    keywords: string[];
    url: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}
