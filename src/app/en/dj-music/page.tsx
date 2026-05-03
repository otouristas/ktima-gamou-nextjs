import type { Metadata } from "next";
import DjMusicEn from "@/views/english/DjMusicEn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "DJ & Music | Top Events at Ktima Orion";
const description = "Sound and DJ services for weddings and parties.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en/dj-music",
  lang: "en",
  keywords: "wedding dj athens",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en/dj-music" schemaType="EventVenue" />
      <DjMusicEn />
    </>
  );
}
