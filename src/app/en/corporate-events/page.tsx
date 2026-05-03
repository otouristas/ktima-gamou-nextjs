import type { Metadata } from "next";
import CorporateEventsEn from "@/views/english/CorporateEventsEn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Corporate Events Athens | Ktima Orion";
const description = "Conferences, team building and corporate parties with AV and parking.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en/corporate-events",
  lang: "en",
  keywords: "corporate events athens",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en/corporate-events" schemaType="EventVenue" />
      <CorporateEventsEn />
    </>
  );
}
