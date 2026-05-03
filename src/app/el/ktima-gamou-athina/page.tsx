import type { Metadata } from "next";
import KtimaGamouAthina from "@/views/greek/seo/KtimaGamouAthina";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Κτήμα Γάμου & Δεξίωσης στην Αθήνα | Κτήμα Ωρίων Κερατέα";
const description = "Κτήμα για γάμο και δεξίωση κοντά στην Αθήνα με θέα θάλασσα, 50-350 άτομα, εκκλησάκια & catering.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/el/ktima-gamou-athina",
  lang: "el",
  keywords: "κτήμα γάμου αθήνα, κτήματα γάμου αττική",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/el/ktima-gamou-athina" schemaType="EventVenue" />
      <KtimaGamouAthina />
    </>
  );
}
