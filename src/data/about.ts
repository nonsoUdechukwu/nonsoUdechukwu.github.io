// Edit this file to update the About page.

export const ABOUT = {
  paragraphs: [
    "I'm an <strong>Azure & DevOps engineer</strong> focused on building reliable, automated cloud platforms on Microsoft Azure. My day-to-day revolves around Kubernetes, CI/CD pipelines and Infrastructure as Code.",
    "I'm passionate about <strong>platform engineering</strong> — giving teams self-service, secure and well-observed infrastructure — and I run a <strong>home lab</strong> where I experiment with new tools before they reach production.",
    'NonsoTech Insights is where I share hands-on tutorials, best practices and lessons learned along the way. The goal is simple: make complex cloud and DevOps concepts practical for engineers at every level.',
  ],
  badges: ['☁️ Azure', '⚙️ DevOps', '☸️ Kubernetes'],
};

export const SKILLS: { category: string; items: string[] }[] = [
  { category: 'Cloud Platforms', items: ['Microsoft Azure', 'Azure Kubernetes Service (AKS)', 'Azure Networking'] },
  { category: 'Containers & Orchestration', items: ['Kubernetes', 'Docker', 'Helm'] },
  { category: 'Infrastructure as Code', items: ['Terraform', 'Azure Bicep', 'ARM Templates'] },
  { category: 'CI/CD & DevOps', items: ['Azure DevOps', 'GitHub Actions', 'GitOps (Flux / Argo CD)'] },
  { category: 'Monitoring & Observability', items: ['Azure Monitor', 'Prometheus', 'Grafana'] },
  { category: 'Platform & Home Lab', items: ['Platform Engineering', 'Linux', 'Proxmox / self-hosting'] },
];

/**
 * Add your certifications here, e.g.
 * { code: 'AZ-104', name: 'Azure Administrator Associate', color: '#0078d4' }
 * The section is hidden while the list is empty.
 */
export const CERTIFICATIONS: { code: string; name: string; color?: string }[] = [];
