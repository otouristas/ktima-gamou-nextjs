import type { Metadata } from "next";
import ServicesEn from "@/views/english/ServicesEn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Services | Catering, Decor, Photo, DJ";
const description = "Full-service wedding and event coordination at Ktima Orion.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en/services",
  lang: "en",
  keywords: "wedding services athens",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en/services" schemaType="EventVenue" />
      <ServicesEn />
    </>
  );
}
