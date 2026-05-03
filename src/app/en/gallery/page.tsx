import type { Metadata } from "next";
import Gallery from "@/views/greek/Gallery";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Photo Gallery | Ktima Orion";
const description = "Photos from weddings, baptisms and events at Ktima Orion.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en/gallery",
  lang: "en",
  keywords: "ktima orion photos",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en/gallery" schemaType="EventVenue" />
      <Gallery />
    </>
  );
}
