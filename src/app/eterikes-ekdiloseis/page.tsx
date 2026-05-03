import type { Metadata } from "next";
import EterikesEkdiloseis from "@/views/greek/EterikesEkdiloseis";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Εταιρικές Εκδηλώσεις Αθήνα – Κτήμα Ωρίων Κερατέα";
const description = "Χώρος για συνέδρια, team building και corporate events κοντά στην Αθήνα με parking και υποδομές ήχου.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/eterikes-ekdiloseis",
  lang: "el",
  keywords: "εταιρικές εκδηλώσεις αθήνα, corporate events athens",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/eterikes-ekdiloseis"
        schemaType="EventVenue"
      />
      <EterikesEkdiloseis />
    </>
  );
}
