import type { Metadata } from "next";
import Dexiosi from "@/views/greek/Dexiosi";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Δεξίωση Γάμου & Βάπτισης | Κτήμα Ωρίων Κερατέα";
const description = "Οργάνωση δεξίωσης γάμου ή βάπτισης με ποιοτικό φαγητό και εξυπηρέτηση στην Αττική.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/dexiosi",
  lang: "el",
  keywords: "δεξίωση γάμου, δεξίωση βάπτισης",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/dexiosi"
        schemaType="EventVenue"
      />
      <Dexiosi />
    </>
  );
}
