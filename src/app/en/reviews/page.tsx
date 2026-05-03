import type { Metadata } from "next";
import ReviewsEn from "@/views/english/ReviewsEn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Reviews | Ktima Orion";
const description = "Read guest reviews from weddings and baptisms at Ktima Orion.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en/reviews",
  lang: "en",
  keywords: "ktima orion reviews",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en/reviews" schemaType="EventVenue" />
      <ReviewsEn />
    </>
  );
}
