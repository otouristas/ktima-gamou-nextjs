'use client';

import Image from 'next/image';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts, getAllCategories } from '@/data/blogPosts';
import { normalizePublicImageSrc } from '@/lib/images/normalize-public-src';
import { useState } from 'react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = getAllCategories();

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Συμβουλές, ιδέες και έμπνευση για τον τέλειο γάμο ή βάπτιση στο Κτήμα Ωρίων
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-brand-main text-white'
                    : 'bg-muted hover:bg-brand-main/10'
                }`}
              >
                Όλα τα Άρθρα
              </button>
              {categories.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === cat.value
                      ? 'bg-brand-main text-white'
                      : 'bg-muted hover:bg-brand-main/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="card-elegant hover:shadow-xl transition-all duration-300 group h-full">
                    <div className="relative overflow-hidden rounded-t-lg h-48 w-full">
                      <Image
                        src={normalizePublicImageSrc(post.image)}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-main text-white px-3 py-1 rounded-full text-sm">
                          {post.categoryLabel}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-brand-main transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('el-GR')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Έτοιμοι να Ξεκινήσετε;
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να οργανώσουμε την τέλεια εκδήλωσή σας
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="button button4">
                  ΚΛΕΙΣΤΕ ΔΩΡΕΑΝ ΞΕΝΑΓΗΣΗ
                </button>
              </a>
              <a href="/gamos">
                <button className="button button4">
                  ΔΕΙΤΕ ΤΙΣ ΥΠΗΡΕΣΙΕΣ ΜΑΣ
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
