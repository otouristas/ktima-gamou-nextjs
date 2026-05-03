import type { Metadata } from "next";
import Gallery from "@/views/greek/Gallery";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Gallery Φωτογραφιών | Κτήμα Ωρίων";
const description = "Φωτογραφίες από γάμους, βαπτίσεις και εκδηλώσεις στο Κτήμα Ωρίων Κερατέα.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/gallery",
  lang: "el",
  keywords: "φωτογραφίες κτήμα ωρίων",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/gallery"
        schemaType="EventVenue"
      />
      <Gallery />
    </>
  );
}
