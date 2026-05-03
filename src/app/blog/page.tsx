import type { Metadata } from "next";
import Blog from "@/views/greek/Blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Blog | Συμβουλές Γάμου & Βάπτισης – Κτήμα Ωρίων";
const description = "Άρθρα για οργάνωση γάμου, βάπτισης και εκδηλώσεων στην Κερατέα και την Αττική.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/blog",
  lang: "el",
  keywords: "blog γάμου αττική",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/blog"
        schemaType="EventVenue"
      />
      <Blog />
    </>
  );
}
