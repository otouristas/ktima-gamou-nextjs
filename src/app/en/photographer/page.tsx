import type { Metadata } from "next";
import PhotographerEn from "@/views/english/PhotographerEn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Wedding Photographer Partner | Studio Alpha";
const description = "Professional wedding photography partner for Ktima Orion events.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en/photographer",
  lang: "en",
  keywords: "wedding photographer keratea",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en/photographer" schemaType="EventVenue" />
      <PhotographerEn />
    </>
  );
}
