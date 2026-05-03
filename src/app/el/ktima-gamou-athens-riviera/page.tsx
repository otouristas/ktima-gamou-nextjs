import type { Metadata } from "next";
import KtimaGamouAthensRiviera from "@/views/greek/seo/KtimaGamouAthensRiviera";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Κτήμα Γάμου Athens Riviera | Κτήμα Ωρίων Κερατέα";
const description = "Κτήμα δεξίωσης γάμου κοντά στην Athens Riviera με θέα και εύκολη πρόσβαση.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/el/ktima-gamou-athens-riviera",
  lang: "el",
  keywords: "κτήμα γάμου athens riviera",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/el/ktima-gamou-athens-riviera" schemaType="EventVenue" />
      <KtimaGamouAthensRiviera />
    </>
  );
}
