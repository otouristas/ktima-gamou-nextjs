import type { Metadata } from "next";
import KtimataVaptisisAthina from "@/views/greek/seo/KtimataVaptisisAthina";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Κτήμα για Βάπτιση στην Αθήνα | Κτήμα Ωρίων";
const description = "Χώρος βάπτισης με κήπο, μενού για παιδιά και κοντινές εκκλησίες στην Κερατέα.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/el/ktimata-vaptisis-athina",
  lang: "el",
  keywords: "κτήμα βάπτισης αθήνα, κτήματα για βάπτιση",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/el/ktimata-vaptisis-athina" schemaType="EventVenue" />
      <KtimataVaptisisAthina />
    </>
  );
}
