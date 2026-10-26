import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export interface TagInfo {
  name: string;
  slug: string;
  count: number;
}

export function getTags(posts: Post[]): TagInfo[] {
  const map = new Map<string, TagInfo>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = slugify(tag);
      const existing = map.get(slug);
      if (existing) existing.count++;
      else map.set(slug, { name: tag, slug, count: 1 });
    }
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function readingTime(body = ''): string {
  const words = body.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export function formatDate(date: Date, style: 'short' | 'long' = 'short'): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: style === 'short' ? 'short' : 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
