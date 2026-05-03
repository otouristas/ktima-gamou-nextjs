import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostEn from '@/views/english/BlogPostEn';
import { getPostBySlug } from '@/data/blogPosts';
import { buildMetadata } from '@/lib/seo/metadata';

interface BlogSlugPageProps {
  readonly params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: 'Article not found' };
  }
  const og = post.image.startsWith('http')
    ? post.image
    : post.image.replace(/^\/assets\//, '/images/');
  return buildMetadata({
    title: post.titleEn,
    description: post.excerptEn,
    canonicalPath: `/en/blog/${post.slug}`,
    lang: 'en',
    keywords: post.keywordsEn,
    ogImage: og,
  });
}

export default async function EnBlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  return <BlogPostEn slug={slug} />;
}
