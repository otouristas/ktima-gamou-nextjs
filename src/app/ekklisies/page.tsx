import type { Metadata } from "next";
import Ekklisies from "@/views/greek/Ekklisies";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Εκκλησίες Γάμου & Βάπτισης Κερατέα | Παραθαλάσσια Εκκλησάκια";
const description = "Κοντινά εκκλησάκια για τελετή γάμου ή βάπτισης δίπλα στη θάλασσα, λίγα λεπτά από το Κτήμα Ωρίων.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/ekklisies",
  lang: "el",
  keywords: "εκκλησία κερατέα, εκκλησίες γάμου αττική",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/ekklisies"
        schemaType="EventVenue"
      />
      <Ekklisies />
    </>
  );
}
