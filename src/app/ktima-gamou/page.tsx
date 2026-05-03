import type { Metadata } from "next";
import KtimaGamou from "@/views/greek/seo/KtimaGamou";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Κτήμα Γάμου στην Ανατολική Αττική | Κτήμα Ωρίων";
const description =
  "Ρομαντικό κτήμα γάμου στην Ανατολική Αττική (Κερατέα) με κοντινά εκκλησάκια, θέα θάλασσα και ολοκληρωμένες παροχές. Ζητήστε προσφορά ή κλείστε ξενάγηση.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/ktima-gamou",
  lang: "el",
  keywords:
    "κτημα γαμου, κτημα για γαμο, κτημα γαμου αθηνα, κτημα γαμου αττικη, κτημα γαμου ανατολικη αττικη, κτηματα γαμου αθηνα, κτημα γαμου με εκκλησακι, δεξιωση γαμου σε κτημα, χωρος δεξιωσης γαμου",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/ktima-gamou"
        schemaType="EventVenue"
      />
      <KtimaGamou />
    </>
  );
}
