import { getCollection, type CollectionEntry } from 'astro:content';

export async function getBlogPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog');
  const visible = import.meta.env.PROD ? posts.filter((p) => !p.data.draft) : posts;
  return [...visible].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date, style: 'long' | 'short' | 'monthDay' = 'long'): string {
  if (style === 'monthDay') {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: style === 'short' ? 'short' : 'long',
    day: 'numeric',
  });
}

export function getReadingTime(content: string, wordsPerMinute = 200): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / wordsPerMinute))} min read`;
}

export function getUniqueTags(posts: { data: { tags: string[] } }[]): string[] {
  return [...new Set(posts.flatMap((p) => p.data.tags))].sort();
}
