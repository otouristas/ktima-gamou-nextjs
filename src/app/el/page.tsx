import type { Metadata } from 'next';
import Index from '@/views/Index';
import { JsonLd, FaqJsonLd } from '@/components/seo/json-ld';
import { homepageFaqs } from '@/data/homepage-faqs';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Κτήμα Ωρίων Κερατέα | Κτήμα Γάμου & Βάπτισης Αττική',
  description:
    'Κτήμα γάμου & βάπτισης Κερατέα Αττική. Θέα θάλασσα, parking 100+ θέσεων, κλιματισμός. Κοντά παραθαλάσσια εκκλησάκια.',
  canonicalPath: '/el',
  lang: 'el',
  keywords: 'κτήμα ωρίων, κτήμα κερατέα, κτήμα γάμου',
});

export default function ElHomePage() {
  return (
    <>
      <JsonLd
        title="Κτήμα Ωρίων – Κτήμα γάμου & βάπτισης στην Κερατέα Αττικής"
        description="Κτήμα γάμου & βάπτισης Κερατέα Αττική."
        canonicalPath="/el"
        schemaType="LocalBusiness"
        breadcrumbs={[{ name: 'Αρχική', url: '/el' }]}
      />
      <FaqJsonLd items={homepageFaqs} />
      <Index />
    </>
  );
}
