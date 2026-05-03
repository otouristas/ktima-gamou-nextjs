import type { Metadata } from "next";
import AgiosAlexandrosDaskaleio from "@/views/greek/seo/churches/AgiosAlexandrosDaskaleio";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Άγιος Αλέξανδρος Δασκαλειό | Εκκλησία Γάμου κοντά στο Κτήμα Ωρίων";
const description = "Γάμος στο εκκλησάκι Άγιος Αλέξανδρος Δασκαλειό, 8 λεπτά από το Κτήμα Ωρίων.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/el/ekklisies/agios-alexandros-daskaleio",
  lang: "el",
  keywords: "άγιος αλέξανδρος δασκαλειό, εκκλησία γάμου κερατέα",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/el/ekklisies/agios-alexandros-daskaleio" schemaType="EventVenue" />
      <AgiosAlexandrosDaskaleio />
    </>
  );
}
