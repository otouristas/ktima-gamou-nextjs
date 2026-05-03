import type { Metadata } from "next";
import Parti from "@/views/greek/Parti";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Πάρτι & Εκδηλώσεις Κερατέα | Κτήμα Ωρίων";
const description = "Οργανώστε πάρτι γενεθλίων και private events στο Κτήμα Ωρίων με επαγγελματική εξυπηρέτηση.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/parti",
  lang: "el",
  keywords: "πάρτι κερατέα, private party αττική",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/parti"
        schemaType="EventVenue"
      />
      <Parti />
    </>
  );
}
