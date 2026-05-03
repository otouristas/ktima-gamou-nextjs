import type { Metadata } from "next";
import AgiaTriada from "@/views/greek/seo/churches/AgiaTriada";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";

const title = "Αγία Τριάδα Κερατέα | Εκκλησία Γάμου & Βάπτισης";
const description = "Ιερός ναός Αγίας Τριάδος στην Κερατέα για τελετή πριν τη δεξίωση στο Κτήμα Ωρίων.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonicalPath: "/el/ekklisies/agia-triada",
  lang: "el",
  keywords: "αγία τριάδα κερατέα",
});

export default function Page() {
  return (
    <>
      <JsonLd title={title} description={description} canonicalPath="/el/ekklisies/agia-triada" schemaType="EventVenue" />
      <AgiaTriada />
    </>
  );
}
