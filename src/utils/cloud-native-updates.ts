// Fetches cloud-native announcements from the public Azure Updates API at build time.
// The site is rebuilt daily (see .github/workflows/pages-deploy.yml) to keep this fresh.

const API = 'https://www.microsoft.com/releasecommunications/api/v2/azure';

/** Azure Updates product name → short label shown on the page. */
export const SERVICES = [
  { product: 'Azure Kubernetes Service (AKS)', key: 'aks', label: 'AKS', limit: 60 },
  { product: 'Azure Container Apps', key: 'aca', label: 'Container Apps', limit: 30 },
  { product: 'Azure Container Registry', key: 'acr', label: 'ACR', limit: 30 },
  { product: 'Azure Container Instances', key: 'aci', label: 'Container Instances', limit: 20 },
  { product: 'Azure Kubernetes Fleet Manager', key: 'fleet', label: 'Fleet Manager', limit: 20 },
  { product: 'Azure Red Hat OpenShift', key: 'aro', label: 'Red Hat OpenShift', limit: 20 },
  { product: 'Azure Container Storage', key: 'acstor', label: 'Container Storage', limit: 10 },
] as const;

export type ServiceKey = (typeof SERVICES)[number]['key'];
export type UpdateKind = 'ga' | 'preview' | 'retirement' | 'update';

export type CloudNativeUpdate = {
  id: string;
  title: string;
  summary: string;
  url: string;
  date: Date;
  kind: UpdateKind;
  services: ServiceKey[];
};

type ApiItem = {
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  tags: string[] | null;
  products: string[] | null;
  created: string;
};

const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

function toText(html: string | null, max = 280): string {
  const text = (html ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(#\d+|[a-z]+);/gi, (m, e: string) =>
      e.startsWith('#') ? String.fromCharCode(Number(e.slice(1))) : (ENTITIES[e.toLowerCase()] ?? m),
    )
    .replace(/\s+/g, ' ')
    .replace(/\s*Learn more\s*\.?\s*$/i, '')
    .trim();
  return text.length > max ? `${text.slice(0, max).replace(/\s+\S*$/, '')}…` : text;
}

function kindOf(item: ApiItem): UpdateKind {
  if (/^retirement/i.test(item.title) || item.tags?.includes('Retirements')) return 'retirement';
  if (item.status === 'Launched') return 'ga';
  if (item.status === 'In preview') return 'preview';
  return 'update';
}

async function fetchProduct(product: string, limit: number): Promise<ApiItem[]> {
  const params = new URLSearchParams({
    $filter: `products/any(p: p eq '${product}')`,
    $orderby: 'created desc',
    $top: String(limit),
  });
  const res = await fetch(`${API}?${params}`, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return ((await res.json()) as { value: ApiItem[] }).value;
}

export async function getCloudNativeUpdates(): Promise<CloudNativeUpdate[]> {
  const results = await Promise.allSettled(SERVICES.map((s) => fetchProduct(s.product, s.limit)));
  const byId = new Map<string, ApiItem>();
  results.forEach((r, i) => {
    if (r.status === 'rejected') {
      console.warn(`[cloud-native-updates] ${SERVICES[i].product}: ${(r.reason as Error).message}`);
      return;
    }
    for (const item of r.value) byId.set(item.id, item);
  });

  return [...byId.values()]
    .map((item) => ({
      id: item.id,
      title: item.title.trim(),
      summary: toText(item.description),
      url: `https://azure.microsoft.com/updates?id=${item.id}`,
      date: new Date(item.created),
      kind: kindOf(item),
      services: SERVICES.filter((s) => item.products?.includes(s.product)).map((s) => s.key),
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}
