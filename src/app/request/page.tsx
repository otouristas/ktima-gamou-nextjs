import type { Metadata } from "next";
import Request from "@/views/greek/Request";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Αίτημα Πληροφοριών | Κτήμα Ωρίων";
const description = "Συμπληρώστε τη φόρμα για προσφορά γάμου, βάπτισης ή εταιρικής εκδήλωσης.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/request",
  lang: "el",
  keywords: "αίτημα προσφοράς κτήμα",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/request"
        schemaType="EventVenue"
      />
      <Request />
    </>
  );
}
