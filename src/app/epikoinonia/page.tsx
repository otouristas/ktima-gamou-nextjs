import type { Metadata } from "next";
import Epikoinonia from "@/views/greek/Epikoinonia";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Επικοινωνία | Κτήμα Ωρίων Κερατέα";
const description = "Ζητήστε προσφορά ή ραντεβού επίσκεψης. Τηλ. 2299 068812, info@ktimaorion.gr.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/epikoinonia",
  lang: "el",
  keywords: "επικοινωνία κτήμα ωρίων",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/epikoinonia"
        schemaType="EventVenue"
      />
      <Epikoinonia />
    </>
  );
}
