import type { Metadata } from "next";
import Vaptisi from "@/views/greek/Vaptisi";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Κτήμα Βάπτισης Αττική | Χώρος για Βάπτιση με Εκκλησάκι – Κτήμα Ωρίων";
const description = "Κτήμα βάπτισης Κερατέα: ασφαλής κήπος, παιδικό μενού, δίπλα σε εκκλησίες. Ιδανικό κτήμα για βάπτιση στην Αττική.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/vaptisi",
  lang: "el",
  keywords: "κτήμα βάπτισης, κτήμα για βάπτιση, βάπτιση κερατέα, χώρος βάπτισης αττική",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/vaptisi"
        schemaType="EventVenue"
      />
      <Vaptisi />
    </>
  );
}
