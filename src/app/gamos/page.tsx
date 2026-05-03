import type { Metadata } from "next";
import Gamos from "@/views/greek/Gamos";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Κτήμα Γάμου Αττική | Δεξίωση Γάμου Κερατέα – Κτήμα Ωρίων";
const description = "Κτήμα γάμου στην Κερατέα με θέα θάλασσα, catering, στολισμό & κοντινά εκκλησάκια. Ζητήστε προσφορά για δεξίωση γάμου.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/gamos",
  lang: "el",
  keywords: "κτήμα γάμου, κτήμα για γάμο, κτήμα γάμου κερατέα, δεξίωση γάμου αττική",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/gamos"
        schemaType="EventVenue"
      />
      <Gamos />
    </>
  );
}
