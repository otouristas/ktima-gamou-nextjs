import type { Metadata } from "next";
import OHoros from "@/views/greek/OHoros";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Ο Χώρος – Κτήμα Ωρίων | Αίθουσα & Κήπος Κερατέα";
const description = "Ανακαλύψτε τον εσωτερικό και εξωτερικό χώρο του κτήματος: πισίνα, κήπος, αίθουσα δεξιώσεων και parking.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/o-horos",
  lang: "el",
  keywords: "χώρος δεξιώσεων κερατέα, κτήμα κερατέα",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/o-horos"
        schemaType="EventVenue"
      />
      <OHoros />
    </>
  );
}
