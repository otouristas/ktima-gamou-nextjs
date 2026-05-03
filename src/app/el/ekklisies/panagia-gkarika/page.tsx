import type { Metadata } from "next";
import PanagiaGkarika from "@/views/greek/seo/churches/PanagiaGkarika";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Παναγία Γκαρικά Κερατέα | Εκκλησία για Γάμο";
const description = "Γραφική εκκλησία στην Κερατέα, ιδανική για γάμο και βάπτιση δίπλα στο Κτήμα Ωρίων.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/el/ekklisies/panagia-gkarika",
  lang: "el",
  keywords: "παναγία γκαρικά",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/el/ekklisies/panagia-gkarika" schemaType="EventVenue" />
      <PanagiaGkarika />
    </>
  );
}
