import type { Metadata } from "next";
import PartyEn from "@/views/english/PartyEn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Private Party Venue | Ktima Orion";
const description = "Birthdays and private parties with flexible layouts and entertainment.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en/party",
  lang: "en",
  keywords: "private party athens",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en/party" schemaType="EventVenue" />
      <PartyEn />
    </>
  );
}
