// Edit this file to update the About page.

export const ABOUT = {
  quote:
    'I build reliable platform solutions, empower teams, and deliver measurable impact through automation, security and continuous improvement.',
  mission:
    'Build, automate and optimize cloud platforms and AI-powered solutions that help teams move faster, stay secure and create impact.',
  paragraphs: [
    "I'm a <strong>DevOps & Platform Engineer</strong> — a cloud enthusiast and builder who has been shipping and running production systems since 2008. Today I design and operate secure, scalable platforms across <strong>Azure, AWS and Google Cloud</strong>.",
    "I'm passionate about <strong>automation, AI and GitOps</strong>: turning manual toil into pipelines, policy-as-code and intelligent workflows so engineering teams can build, ship and operate with confidence.",
    'NonsoTech Insights is where I share hands-on tutorials, best practices and lessons learned along the way — open to global opportunities and always happy to collaborate.',
  ],
  roles: ['Builder', 'Enablement Lead', 'Systems Thinker', 'Execution Owner'],
  loves: ['Automation', 'Solving Complex Problems', 'Building for Scale', 'Sharing Knowledge'],
  badges: ['Platform Engineering', 'DevOps', 'Kubernetes', 'GitOps', 'AI'],
};

export const WHAT_I_DO: { icon: string; title: string; desc: string }[] = [
  { icon: 'platform', title: 'Platform Engineering & Cloud Architecture', desc: 'Design scalable, secure and cost-effective cloud solutions.' },
  { icon: 'devops', title: 'CI/CD & GitOps Automation', desc: 'Build pipelines, Infrastructure as Code and policy-as-code.' },
  { icon: 'kubernetes', title: 'Kubernetes & Containers', desc: 'Operate, secure and optimize containerized workloads.' },
  { icon: 'search', title: 'Observability & Reliability', desc: 'Monitoring, logging, alerting and performance tuning.' },
  { icon: 'ai', title: 'AI Workflows & Agents', desc: 'Design AI-powered automation and intelligent workflows.' },
  { icon: 'book', title: 'Mentoring & Enablement', desc: 'Share knowledge, coach and elevate engineering teams.' },
];

export const SKILLS: { category: string; items: string[] }[] = [
  { category: 'Cloud Platforms', items: ['Microsoft Azure', 'Amazon Web Services', 'Google Cloud'] },
  { category: 'Containers & Orchestration', items: ['Kubernetes', 'Helm', 'Docker'] },
  { category: 'Infrastructure as Code', items: ['Terraform', 'Crossplane', 'Azure Bicep'] },
  { category: 'CI/CD & GitOps', items: ['GitHub Actions', 'Azure DevOps', 'GitOps (Flux / Argo CD)'] },
  { category: 'Observability', items: ['Prometheus', 'Grafana', 'Azure Monitor'] },
  { category: 'Security & Access', items: ['Teleport', 'OpenSSL', 'Policy-as-code'] },
  { category: 'Scripting & OS', items: ['Linux', 'Bash', 'Python'] },
  { category: 'AI & Automation', items: ['GitHub Copilot', 'Azure OpenAI / AI Foundry', 'AI agents & workflows'] },
];

export const APPROACH: string[] = [
  'Understand the problem',
  'Design with purpose',
  'Automate everything',
  'Deliver incrementally',
  'Observe & improve',
  'Share & enable',
];

export const VALUES: { title: string; desc: string }[] = [
  { title: 'Integrity', desc: 'Do the right thing, every time.' },
  { title: 'Ownership', desc: 'I take initiative and see things through.' },
  { title: 'Clarity', desc: 'Clear communication, clear thinking.' },
  { title: 'Collaboration', desc: 'Stronger together. We win as a team.' },
  { title: 'Continuous Learning', desc: 'Stay curious. Keep growing. Keep teaching.' },
  { title: 'Impact', desc: 'Deliver value that makes a real difference.' },
];

export const PRIORITIES: { title: string; desc: string }[] = [
  { title: 'Scalable Systems', desc: 'Build for scale, reliability and long-term success.' },
  { title: 'Business Value', desc: 'Solutions that solve real problems and drive results.' },
  { title: 'Developer Productivity', desc: 'Make it easy for teams to build, ship and operate.' },
  { title: 'Resilience & Reliability', desc: 'Systems that are secure, observable and self-healing.' },
  { title: 'Security & Compliance', desc: 'Security by design. Protect people and data.' },
  { title: 'Knowledge Sharing', desc: 'Document, mentor and empower others.' },
];

export const COLLABORATORS: { title: string; desc: string }[] = [
  { title: 'Engineering Teams', desc: 'Developers, SREs, QA Engineers' },
  { title: 'Product & Stakeholders', desc: 'Product Managers, Business Teams' },
  { title: 'Security & Compliance', desc: 'Security Engineers, Risk & Compliance' },
  { title: 'Leadership', desc: 'Managers, Directors, Exec Sponsors' },
  { title: 'Platform & Cloud Providers', desc: 'Google Cloud, AWS, Microsoft Azure' },
  { title: 'Tools & Vendor Partners', desc: 'Technology partners and solutions' },
  { title: 'Community & Learners', desc: 'Peers, Mentors, Next-Gen Engineers' },
];

export const CAREER_GOALS: string[] = [
  'Grow as a Platform & Engineering Leader',
  'Build AI-driven, developer-centric platforms',
  'Help teams and businesses scale with confidence',
  'Continue learning and creating impact',
];

export type Certification = { code: string; name: string };
export type CertificationGroup = {
  issuer: string;
  /** Optional public link where the credentials can be verified. */
  verifyUrl?: string;
  /** Link text for verifyUrl. Defaults to "Verify". */
  verifyLabel?: string;
  /** Optional standout title shown above the group, e.g. Kubestronaut. */
  highlight?: { title: string; desc: string };
  items: Certification[];
};

/**
 * Groups with no items are hidden. Add Microsoft certifications like:
 * { code: 'AZ-400', name: 'DevOps Engineer Expert' }
 */
export const CERTIFICATIONS: CertificationGroup[] = [
  {
    issuer: 'CNCF / Linux Foundation',
    verifyUrl: 'https://www.credly.com/users/nonso-udechukwu',
    verifyLabel: 'Credly',
    highlight: {
      title: 'Kubestronaut',
      desc: 'Awarded by the CNCF for holding all five Kubernetes certifications.',
    },
    items: [
      { code: 'CKA', name: 'Certified Kubernetes Administrator' },
      { code: 'CKAD', name: 'Certified Kubernetes Application Developer' },
      { code: 'CKS', name: 'Certified Kubernetes Security Specialist' },
      { code: 'KCSA', name: 'Kubernetes and Cloud Native Security Associate' },
      { code: 'KCNA', name: 'Kubernetes and Cloud Native Associate' },
    ],
  },
  {
    issuer: 'Microsoft',
    verifyLabel: 'Transcript',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/nonsoudechukwu-6700/transcript/d8y64f8o085gz3z?tab=credentials-tab',
    items: [
      { code: 'AZ-305', name: 'Azure Solutions Architect Expert' },
      { code: 'AZ-400', name: 'DevOps Engineer Expert' },
      { code: 'AZ-104', name: 'Azure Administrator Associate' },
      { code: 'AZ-204', name: 'Azure Developer Associate' },
      { code: 'AZ-500', name: 'Azure Security Engineer Associate' },
      { code: 'SC-300', name: 'Identity and Access Administrator Associate' },
      { code: 'SC-200', name: 'Security Operations Analyst Associate' },
      { code: 'MCSA', name: 'Microsoft Certified Solutions Associate: Cloud Platform' },
      { code: '70-533', name: 'Specialist: Implementing Microsoft Azure Infrastructure Solutions' },
      { code: 'MCP', name: 'Microsoft Certified Professional' },
    ],
  },
];
