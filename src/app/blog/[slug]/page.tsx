import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPost from '@/views/greek/BlogPost';
import { getPostBySlug } from '@/data/blogPosts';
import { buildMetadata } from '@/lib/seo/metadata';

interface BlogSlugPageProps {
  readonly params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: 'Άρθρο δεν βρέθηκε' };
  }
  const og = post.image.startsWith('http')
    ? post.image
    : post.image.replace(/^\/assets\//, '/images/');
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    canonicalPath: `/blog/${post.slug}`,
    lang: 'el',
    keywords: post.keywords,
    ogImage: og,
  });
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  return <BlogPost slug={slug} />;
}
