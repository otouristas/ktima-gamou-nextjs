import type { Metadata } from "next";
import Emeis from "@/views/greek/Emeis";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Εμείς – Η Ομάδα του Κτήματος Ωρίων";
const description = "15+ χρόνια εμπειρίας σε γάμους και βαπτίσεις στην Κερατέα. Γνωρίστε την ομάδα μας.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/emeis",
  lang: "el",
  keywords: "κτήμα ωρίων, εκδηλώσεις κερατέα",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/emeis"
        schemaType="EventVenue"
      />
      <Emeis />
    </>
  );
}
