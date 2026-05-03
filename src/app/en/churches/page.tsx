import type { Metadata } from "next";
import ChurchesEn from "@/views/english/ChurchesEn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Nearby Churches for Weddings | Ktima Orion";
const description = "Chapels and churches 5–15 minutes from the venue for ceremony.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en/churches",
  lang: "en",
  keywords: "wedding churches attica",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en/churches" schemaType="EventVenue" />
      <ChurchesEn />
    </>
  );
}
