import type { Metadata } from "next";
import ContactEn from "@/views/english/ContactEn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Contact | Ktima Orion Keratea";
const description = "Request a quote or site visit. Phone +30 2299 068812.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en/contact",
  lang: "en",
  keywords: "contact ktima orion",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en/contact" schemaType="EventVenue" />
      <ContactEn />
    </>
  );
}
