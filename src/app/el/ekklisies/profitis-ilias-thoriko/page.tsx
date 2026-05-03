import type { Metadata } from "next";
import ProfitisIliasThoriko from "@/views/greek/seo/churches/ProfitisIliasThoriko";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Προφήτης Ηλίας Θορικό | Εκκλησία Γάμου";
const description = "Παραδοσιακός γάμος στον Προφήτη Ηλία με θέα στη θάλασσα, κοντά στο Κτήμα Ωρίων.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/el/ekklisies/profitis-ilias-thoriko",
  lang: "el",
  keywords: "προφήτης ηλίας θορικό",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/el/ekklisies/profitis-ilias-thoriko" schemaType="EventVenue" />
      <ProfitisIliasThoriko />
    </>
  );
}
