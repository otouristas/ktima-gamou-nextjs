import type { Metadata } from 'next';
import AgiaTriadaEn from '@/views/english/churches/AgiaTriadaEn';
import { buildMetadata } from '@/lib/seo/metadata';
import { JsonLd } from '@/components/seo/json-ld';

const title = 'Agia Triada Church Keratea | Ktima Orion';
const description =
  'Wedding and baptism ceremonies at Agia Triada church near Ktima Orion in Keratea, Attica.';

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: '/en/churches/agia-triada',
  lang: 'en',
  keywords: 'agia triada keratea, wedding church attica',
});

export default function AgiaTriadaEnPage() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/en/churches/agia-triada"
        schemaType="EventVenue"
      />
      <AgiaTriadaEn />
    </>
  );
}
