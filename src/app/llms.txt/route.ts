import { SITE_URL, SITE_NAME_EL, PHONE, EMAIL } from "@/lib/seo/config";

export function GET(): Response {
  const body = `# ${SITE_NAME_EL} (Ktima Orion)
> Event venue — weddings, baptisms, corporate events, private parties — Keratea, Attica, Greece

## Site
- Primary: ${SITE_URL}
- Phone: ${PHONE}
- Email: ${EMAIL}
- Coordinates: 37.802493, 24.028817

## What we offer
- Wedding receptions and baptism celebrations with indoor/outdoor spaces
- Corporate events, conferences, and private parties
- Catering, decoration, DJ, photography partners
- Large free parking (100+ spaces), air-conditioned hall, gardens and pool area
- Multiple nearby seaside chapels (5–15 minutes)

## Key pages
- / — Greek homepage
- /gamos — Weddings
- /vaptisi — Baptisms
- /ekklisies — Nearby churches
- /en — English homepage

## Full machine-readable index
See ${SITE_URL}/llms-full.txt

Last-Updated: 2026-05-03
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
