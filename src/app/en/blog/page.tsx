import type { Metadata } from "next";
import BlogEn from "@/views/english/BlogEn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Blog | Wedding & Baptism Tips";
const description = "Articles about planning weddings and baptisms in Attica.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/en/blog",
  lang: "en",
  keywords: "wedding blog greece",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/en/blog" schemaType="EventVenue" />
      <BlogEn />
    </>
  );
}
