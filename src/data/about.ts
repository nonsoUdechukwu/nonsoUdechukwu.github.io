// Edit this file to update the About page.

export const ABOUT = {
  paragraphs: [
    "I'm a <strong>platform & DevOps engineer</strong> focused on building reliable, automated — and increasingly <strong>AI-powered</strong> — cloud platforms on Microsoft Azure. My day-to-day revolves around Kubernetes, CI/CD pipelines and Infrastructure as Code.",
    "I'm passionate about <strong>platform engineering</strong> — giving teams self-service, secure and well-observed infrastructure — and I run a <strong>home lab</strong> where I experiment with new tools before they reach production.",
    'NonsoTech Insights is where I share hands-on tutorials, best practices and lessons learned along the way. The goal is simple: make complex AI, cloud and DevOps concepts practical for engineers at every level.',
  ],
  badges: ['AI', 'Platform Engineering', 'DevOps', 'Azure', 'Kubernetes'],
};

export const SKILLS: { category: string; items: string[] }[] = [
  { category: 'AI & Automation', items: ['Azure OpenAI / AI Foundry', 'GitHub Copilot', 'AIOps & intelligent automation'] },
  { category: 'Cloud Platforms', items: ['Microsoft Azure', 'Azure Kubernetes Service (AKS)', 'Azure Networking'] },
  { category: 'Containers & Orchestration', items: ['Kubernetes', 'Docker', 'Helm'] },
  { category: 'Infrastructure as Code', items: ['Terraform', 'Azure Bicep', 'ARM Templates'] },
  { category: 'CI/CD & DevOps', items: ['Azure DevOps', 'GitHub Actions', 'GitOps (Flux / Argo CD)'] },
  { category: 'Monitoring & Observability', items: ['Azure Monitor', 'Prometheus', 'Grafana'] },
  { category: 'Platform & Home Lab', items: ['Platform Engineering', 'Linux', 'Proxmox / self-hosting'] },
];

export type Certification = { code: string; name: string };
export type CertificationGroup = {
  issuer: string;
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
    items: [],
  },
];
