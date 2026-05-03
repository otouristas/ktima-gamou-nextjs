import type { Metadata } from "next";
import AboutEn from "@/views/english/AboutEn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "About Us | Ktima Orion Event Venue";
const description = "Meet the team behind Ktima Orion — 15+ years hosting weddings and events in Keratea, Attica.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en/about",
  lang: "en",
  keywords: "about ktima orion",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en/about" schemaType="EventVenue" />
      <AboutEn />
    </>
  );
}
