// Fetches AKS entries from the public Azure Updates API at build time.
// The site is rebuilt daily (see .github/workflows/pages-deploy.yml) to keep this fresh.

const API = 'https://www.microsoft.com/releasecommunications/api/v2/azure';
const PRODUCT = 'Azure Kubernetes Service (AKS)';

export type AksUpdateKind = 'ga' | 'preview' | 'retirement' | 'update';

export type AksUpdate = {
  id: string;
  title: string;
  summary: string;
  url: string;
  date: Date;
  kind: AksUpdateKind;
};

type ApiItem = {
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  tags: string[] | null;
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

function kindOf(item: ApiItem): AksUpdateKind {
  if (/^retirement/i.test(item.title) || item.tags?.includes('Retirements')) return 'retirement';
  if (item.status === 'Launched') return 'ga';
  if (item.status === 'In preview') return 'preview';
  return 'update';
}

export async function getAksUpdates(limit = 60): Promise<AksUpdate[]> {
  const params = new URLSearchParams({
    $filter: `products/any(p: p eq '${PRODUCT}')`,
    $orderby: 'created desc',
    $top: String(limit),
  });
  try {
    const res = await fetch(`${API}?${params}`, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { value } = (await res.json()) as { value: ApiItem[] };
    return value.map((item) => ({
      id: item.id,
      title: item.title.trim(),
      summary: toText(item.description),
      url: `https://azure.microsoft.com/updates?id=${item.id}`,
      date: new Date(item.created),
      kind: kindOf(item),
    }));
  } catch (err) {
    console.warn(`[aks-updates] Could not fetch Azure updates: ${(err as Error).message}`);
    return [];
  }
}
