import type { Metadata } from "next";
import DjMousiki from "@/views/greek/DjMousiki";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "DJ & Μουσική Εκδήλωσης | Top Events – Κτήμα Ωρίων";
const description = "Μουσική κάλυψη και DJ για γάμο, βάπτιση και πάρτι στο Κτήμα Ωρίων.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/dj-mousiki",
  lang: "el",
  keywords: "dj γάμου αττική",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/dj-mousiki"
        schemaType="EventVenue"
      />
      <DjMousiki />
    </>
  );
}
