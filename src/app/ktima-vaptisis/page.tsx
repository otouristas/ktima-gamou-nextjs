import type { Metadata } from "next";
import KtimaVaptisis from "@/views/greek/seo/KtimaVaptisis";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Κτήμα για Βάπτιση στην Αττική | Κτήμα Ωρίων";
const description =
  "Βάπτιση σε κτήμα με κήπο, ασφαλή χώρο για παιδιά και κοντινές εκκλησίες στην Ανατολική Αττική. Δείτε τον χώρο και ζητήστε προσφορά για τη δεξίωσή σας.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/ktima-vaptisis",
  lang: "el",
  keywords:
    "κτημα για βαπτιση, κτηματα για βαπτιση, κτημα βαπτισης αθηνα, κτημα βαπτισης αττικη, κτημα δεξιωσεων για βαπτιση, βαπτιση σε κτημα, κτημα για βαπτιση με κηπο",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/ktima-vaptisis"
        schemaType="EventVenue"
      />
      <KtimaVaptisis />
    </>
  );
}
