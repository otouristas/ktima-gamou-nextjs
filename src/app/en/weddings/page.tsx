import type { Metadata } from "next";
import WeddingsEn from "@/views/english/WeddingsEn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Wedding Venue Attica | Ktima Orion Keratea";
const description = "Celebrate your wedding with sea views, exclusive use and professional catering at Ktima Orion.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en/weddings",
  lang: "en",
  keywords: "wedding venue athens riviera, wedding keratea",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en/weddings" schemaType="EventVenue" />
      <WeddingsEn />
    </>
  );
}
