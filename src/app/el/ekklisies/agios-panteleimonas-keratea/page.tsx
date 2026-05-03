import type { Metadata } from "next";
import AgiosPanteleimonasKeratea from "@/views/greek/seo/churches/AgiosPanteleimonasKeratea";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Άγιος Παντελεήμονας Κερατέα | Εκκλησία Γάμου";
const description = "Παραδοσιακή εκκλησία στην Κακή Θάλασσα για τελετή γάμου κοντά στο κτήμα.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/el/ekklisies/agios-panteleimonas-keratea",
  lang: "el",
  keywords: "άγιος παντελεήμονας κερατέα",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/el/ekklisies/agios-panteleimonas-keratea" schemaType="EventVenue" />
      <AgiosPanteleimonasKeratea />
    </>
  );
}
