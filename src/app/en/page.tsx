import type { Metadata } from "next";
import IndexEn from "@/views/english/IndexEn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Ktima Orion Keratea | Wedding & Baptism Venue Attica";
const description = "Wedding and baptism venue in Keratea with sea views, parking for 100+ cars, air conditioning and nearby chapels.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en",
  lang: "en",
  keywords: "wedding venue keratea, ktima orion, baptism venue athens",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en" schemaType="EventVenue" />
      <IndexEn />
    </>
  );
}
