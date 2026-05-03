import type { Metadata } from "next";
import VenueEn from "@/views/english/VenueEn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "The Venue | Indoor & Outdoor Spaces";
const description = "Explore indoor hall, gardens, pool and parking at Ktima Orion.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en/venue",
  lang: "en",
  keywords: "event venue keratea",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en/venue" schemaType="EventVenue" />
      <VenueEn />
    </>
  );
}
