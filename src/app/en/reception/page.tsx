import type { Metadata } from "next";
import ReceptionEn from "@/views/english/ReceptionEn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Wedding Reception | Ktima Orion";
const description = "Reception planning for weddings and baptisms at our Keratea venue.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en/reception",
  lang: "en",
  keywords: "wedding reception attica",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en/reception" schemaType="EventVenue" />
      <ReceptionEn />
    </>
  );
}
