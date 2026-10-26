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

export const AUTHOR = {
  name: 'Nonso Udechukwu',
  fullName: 'Nonso Emmanuel Udechukwu',
  role: 'AI · Platform Engineering · DevOps',
  title: 'Platform & DevOps Engineer',
  avatar: 'https://avatars.githubusercontent.com/u/35489366?v=4',
  location: 'Lagos, Nigeria',
  // Shown in the home page hero stats. Update to your real value.
  yearsExperience: '5+',
  bio: 'Platform & DevOps engineer exploring AI, cloud-native platforms, Kubernetes and automation on Azure.',
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
