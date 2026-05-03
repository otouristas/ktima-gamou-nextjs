import type { Metadata } from "next";
import Fotografos from "@/views/greek/Fotografos";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Φωτογράφος Γάμου – Συνεργάτης Κτήματος Ωρίων";
const description = "Επαγγελματική φωτογράφιση γάμου και βάπτισης με το Studio Alpha στο Κτήμα Ωρίων.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/fotografos",
  lang: "el",
  keywords: "φωτογράφος γάμου κερατέα",
});

export default function Page() {
  return (
    <>
      <JsonLd
        title={title}
        description={description}
        canonicalPath="/fotografos"
        schemaType="EventVenue"
      />
      <Fotografos />
    </>
  );
}
