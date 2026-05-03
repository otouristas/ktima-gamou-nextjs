import type { Metadata } from "next";
import Ypiresies from "@/views/greek/Ypiresies";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Υπηρεσίες Γάμου & Βάπτισης | Κτήμα Ωρίων";
const description = "Catering, διακόσμηση, φωτογράφος, DJ και πλήρης συντονισμός εκδήλωσης στο Κτήμα Ωρίων.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/ypiresies",
  lang: "el",
  keywords: "υπηρεσίες γάμου, catering κερατέα",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/ypiresies"
        schemaType="EventVenue"
      />
      <Ypiresies />
    </>
  );
}
