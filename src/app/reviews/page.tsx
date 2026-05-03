import type { Metadata } from "next";
import Reviews from "@/views/greek/Reviews";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Κριτικές & Αξιολογήσεις | Κτήμα Ωρίων";
const description = "Διαβάστε τις εμπειρίες ζευγαριών και οικογενειών από γάμους και βαπτίσεις στο Κτήμα Ωρίων.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/reviews",
  lang: "el",
  keywords: "αξιολογήσεις κτήμα ωρίων",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/reviews"
        schemaType="EventVenue"
      />
      <Reviews />
    </>
  );
}
