import type { Metadata } from "next";
import EkklisiakiDiplaStThalassa from "@/views/greek/seo/EkklisiakiDiplaStThalassa";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Εκκλησάκι Δίπλα στη Θάλασσα για Γάμο | Κερατέα";
const description = "Παραθαλάσσια εκκλησάκια κοντά στο Κτήμα Ωρίων για τελετή γάμου ή βάπτισης.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/el/ekklisiaki-dipla-sti-thalassa",
  lang: "el",
  keywords: "εκκλησάκι δίπλα στη θάλασσα, γάμος κερατέα",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/el/ekklisiaki-dipla-sti-thalassa" schemaType="EventVenue" />
      <EkklisiakiDiplaStThalassa />
    </>
  );
}
