export const SITE = {
  title: 'NonsoTech Insights',
  shortTitle: 'NonsoTech',
  tagline: 'AI · Platform Engineering · DevOps',
  description:
    "Practical guides and real-world insights on AI, Platform Engineering, DevOps, Azure, Kubernetes and Infrastructure as Code by Nonso Emmanuel Udechukwu.",
  url: 'https://nonsoudechukwu.github.io',
  lang: 'en',
  postsPerPage: 10,
};

// Year you started your career (graduated university).
const CAREER_START_YEAR = 2008;

export const AUTHOR = {
  name: 'Nonso Udechukwu',
  fullName: 'Nonso Emmanuel Udechukwu',
  role: 'AI · Platform Engineering · DevOps',
  title: 'DevOps & Platform Engineer',
  avatar: '/images/profile.jpg',
  location: 'Netherlands',
  origin: 'Nigeria',
  // Calculated at build time from CAREER_START_YEAR.
  yearsExperience: `${new Date().getFullYear() - CAREER_START_YEAR}+`,
  bio: 'DevOps & Platform Engineer building secure, scalable cloud platforms and AI-powered automation across Azure, AWS and Google Cloud.',
  email: 'nonso.udechukwu@gmail.com',
};

export const SOCIALS = {
  github: 'https://github.com/nonsoUdechukwu',
  x: 'https://x.com/nonsoUdechukwu',
  linkedin: 'https://www.linkedin.com/in/emmanuel-udechukwu-0152925b/',
  email: `mailto:${AUTHOR.email}`,
};

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/tags', label: 'Tags' },
  { href: '/about', label: 'About' },
];

export const TOPICS = [
  { name: 'AI & Automation', tag: 'ai', icon: 'ai', desc: 'AI-assisted engineering, AIOps & intelligent automation', featured: true },
  { name: 'Azure', tag: 'azure', icon: 'azure', desc: 'Cloud services, architecture & best practices' },
  { name: 'Kubernetes', tag: 'kubernetes', icon: 'kubernetes', desc: 'Container orchestration & cluster management' },
  { name: 'DevOps', tag: 'devops', icon: 'devops', desc: 'CI/CD pipelines & automation' },
  { name: 'Infrastructure as Code', tag: 'iac', icon: 'iac', desc: 'Terraform, Bicep & ARM templates' },
  { name: 'Platform Engineering', tag: 'platform-engineering', icon: 'platform', desc: 'Internal platforms & developer experience' },
  { name: 'Home Labs', tag: 'home-lab', icon: 'homelab', desc: 'Self-hosted labs to learn & experiment' },
];
