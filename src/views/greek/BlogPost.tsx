'use client';

import Image from 'next/image';
import { Layout } from '@/components/Layout';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { getPostBySlug, blogPosts } from '@/data/blogPosts';
import { normalizePublicImageSrc } from '@/lib/images/normalize-public-src';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  readonly slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const post = getPostBySlug(slug || '');

  if (!post) {
    return (
      <Layout>
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Το άρθρο δεν βρέθηκε</h1>
            <Link href="/blog" className="text-brand-main hover:underline">
              Επιστροφή στο Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Κτήμα Ωρίων",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ktimaorion.gr/logo.png"
      }
    },
    "description": post.excerpt,
    "keywords": post.keywords
  };
  const faqPageSchema =
    post.faqSchema && post.faqSchema.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqSchema.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {faqPageSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
      ) : null}
      
      <div className="pt-20">
        {/* Back Button */}
        <section className="section-padding-sm bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max max-w-5xl">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-brand-main hover:text-brand-dark font-medium transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Πίσω στο Blog</span>
            </Link>
          </div>
        </section>

        {/* Hero Image */}
        <section className="section-padding-sm bg-gradient-to-b from-brand-main/5 to-background">
          <div className="container-max max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[400px] md:h-[500px] w-full">
              <Image
                src={normalizePublicImageSrc(post.image)}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* Article Header */}
        <article className="section-padding bg-background">
          <div className="container-max max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-brand-main to-brand-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
                {post.categoryLabel}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-foreground">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-10 pb-8 border-b-2 border-border">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-brand-main" />
                <span className="font-medium">{new Date(post.date).toLocaleDateString('el-GR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-brand-main" />
                <span className="font-medium">{post.readTime} ανάγνωσης</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Tag className="w-5 h-5 text-brand-main" />
                <span className="font-medium">{post.author}</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="blog-content">
              <ReactMarkdown
                components={{
                  // Headings
                  h1: ({node, ...props}) => <h1 className="text-4xl md:text-5xl font-bold mt-12 mb-6 text-foreground leading-tight" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-3xl md:text-4xl font-bold mt-10 mb-5 text-brand-main leading-tight" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-foreground leading-tight" {...props} />,
                  h4: ({node, ...props}) => <h4 className="text-xl md:text-2xl font-semibold mt-6 mb-3 text-foreground" {...props} />,
                  
                  // Paragraphs
                  p: ({node, ...props}) => <p className="text-lg md:text-xl leading-relaxed mb-6 text-foreground/90" {...props} />,
                  
                  // Links
                  a: ({node, ...props}) => (
                    <a 
                      className="text-brand-main font-bold hover:text-brand-dark underline underline-offset-4 decoration-2 hover:decoration-brand-dark transition-all inline-flex items-center gap-1" 
                      {...props} 
                    />
                  ),
                  
                  // Strong/Bold
                  strong: ({node, ...props}) => <strong className="font-bold text-foreground" {...props} />,
                  
                  // Lists
                  ul: ({node, ...props}) => <ul className="list-disc list-outside ml-6 mb-6 space-y-3 text-lg md:text-xl leading-relaxed text-foreground/90" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-3 text-lg md:text-xl leading-relaxed text-foreground/90" {...props} />,
                  li: ({node, ...props}) => <li className="pl-2" {...props} />,
                  
                  // Images
                  img: ({ src, alt }) => {
                    const raw = typeof src === 'string' ? src : '';
                    const normalized = normalizePublicImageSrc(raw);
                    if (!normalized) {
                      return null;
                    }
                    return (
                      <span className="relative block w-full my-8 aspect-video max-w-5xl mx-auto rounded-xl shadow-xl overflow-hidden">
                        <Image
                          src={normalized}
                          alt={typeof alt === 'string' ? alt : ''}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 896px"
                          loading="lazy"
                        />
                      </span>
                    );
                  },
                  
                  // Blockquotes
                  blockquote: ({node, ...props}) => (
                    <blockquote className="border-l-4 border-brand-main pl-6 py-4 my-8 bg-brand-main/5 rounded-r-lg italic text-lg text-foreground/80" {...props} />
                  ),
                  
                  // Code
                  code: ({node, ...props}) => (
                    <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground" {...props} />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Social Share */}
            <div className="mt-16 pt-10 border-t-2 border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-lg font-semibold text-foreground mb-3 block">Μοιραστείτε αυτό το άρθρο:</span>
                  <p className="text-sm text-muted-foreground">Βοηθήστε άλλους να ανακαλύψουν το Κτήμα Ωρίων</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors font-semibold shadow-lg hover:shadow-xl"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1A91DA] transition-colors font-semibold shadow-lg hover:shadow-xl"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-gradient-brand">Σχετικά Άρθρα</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <div className="card-elegant hover:shadow-xl transition-all duration-300 group h-full">
                      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                        <Image
                          src={normalizePublicImageSrc(relatedPost.image)}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(min-width: 768px) 33vw, 100vw"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-sm text-brand-main">{relatedPost.categoryLabel}</span>
                        <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-brand-main transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ετοιμοι για την Εκδήλωσή σας;
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να οργανώσουμε την τέλεια εκδήλωση στο Κτήμα Ωρίων
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="button button4">
                  ΚΛΕΙΣΤΕ ΔΩΡΕΑΝ ΞΕΝΑΓΗΣΗ
                </button>
              </a>
              <a href="/gamos">
                <button className="button button4">
                  ΔΕΙΤΕ ΥΠΗΡΕΣΙΕΣ
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
