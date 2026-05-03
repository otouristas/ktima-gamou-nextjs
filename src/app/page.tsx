import type { Metadata } from 'next';
import Index from '@/views/Index';
import { JsonLd, FaqJsonLd } from '@/components/seo/json-ld';
import { homepageFaqs } from '@/data/homepage-faqs';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Κτήμα Ωρίων Κερατέα | Κτήμα Γάμου & Βάπτισης Αττική',
  description:
    'Κτήμα γάμου & βάπτισης Κερατέα Αττική. Θέα θάλασσα, parking 100+ θέσεων, κλιματισμός. Κοντά παραθαλάσσια εκκλησάκια. Κλείστε επίσκεψη!',
  canonicalPath: '/',
  lang: 'el',
  keywords:
    'κτήμα ωρίων, κτήμα κερατέα, κτήμα γάμου κερατέα, κτήμα για γάμο, κτήμα βάπτισης, βάπτιση κερατέα, γάμος κερατέα, χώρος δεξιώσεων κερατέα',
  ogImage: '/og-image.jpg',
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        title="Κτήμα Ωρίων – Κτήμα γάμου & βάπτισης στην Κερατέα Αττικής"
        description="Κτήμα γάμου & βάπτισης Κερατέα Αττική. Θέα θάλασσα, parking 100+ θέσεων, κλιματισμός."
        canonicalPath="/"
        schemaType="LocalBusiness"
        breadcrumbs={[{ name: 'Αρχική', url: '/' }]}
        ogImagePath="/og-image.jpg"
      />
      <FaqJsonLd items={homepageFaqs} />
      <Index />
    </>
  );
}
