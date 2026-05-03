import type { Metadata } from "next";
import BaptismEn from "@/views/english/BaptismEn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Baptism Venue Attica | Ktima Orion";
const description = "Family-friendly baptism celebration with garden space and menus for children.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en/baptism",
  lang: "en",
  keywords: "baptism venue near me, christening venue athens",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en/baptism" schemaType="EventVenue" />
      <BaptismEn />
    </>
  );
}
