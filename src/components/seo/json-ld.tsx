import type { ReactElement } from "react";
import { buildAbsoluteUrl } from "@/lib/seo/hreflang";
import {
  SITE_URL,
  SITE_NAME_EL,
  DEFAULT_OG_IMAGE,
  PHONE,
  GEO_LAT,
  GEO_LNG,
} from "@/lib/seo/config";

export interface BreadcrumbItem {
  readonly name: string;
  readonly url: string;
}

export type SchemaType = "LocalBusiness" | "Event" | "EventVenue";

export interface JsonLdProps {
  readonly title: string;
  readonly description: string;
  readonly canonicalPath: string;
  readonly schemaType?: SchemaType;
  readonly breadcrumbs?: readonly BreadcrumbItem[];
  readonly eventDate?: string;
  readonly ogImagePath?: string;
}

function fullUrl(path: string): string {
  return buildAbsoluteUrl(path.startsWith("/") ? path : `/${path}`);
}

/**
 * Renders Schema.org JSON-LD for EventVenue, LocalBusiness, Event, and optional BreadcrumbList.
 */
export function JsonLd({
  title,
  description,
  canonicalPath,
  schemaType = "EventVenue",
  breadcrumbs = [],
  eventDate,
  ogImagePath = DEFAULT_OG_IMAGE,
}: JsonLdProps): ReactElement {
  const fullCanonical = fullUrl(canonicalPath);
  const fullOgImage = ogImagePath.startsWith("http")
    ? ogImagePath
    : fullUrl(ogImagePath);
  const logo = fullUrl("/images/logo-dark.png");
  const address = {
    "@type": "PostalAddress" as const,
    addressLocality: "Κερατέα",
    addressRegion: "Αττική",
    addressCountry: "GR",
  };
  const geo = {
    "@type": "GeoCoordinates" as const,
    latitude: GEO_LAT,
    longitude: GEO_LNG,
  };
  let mainEntity: Record<string, unknown>;
  if (schemaType === "LocalBusiness") {
    mainEntity = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME_EL,
      description,
      url: fullCanonical,
      logo,
      image: fullOgImage,
      address,
      geo,
      telephone: PHONE,
      priceRange: "€€€",
      servesCuisine: "Greek",
      hasMap: `https://maps.google.com/?q=${GEO_LAT},${GEO_LNG}`,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "23:00",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "50",
      },
    };
  } else if (schemaType === "Event") {
    mainEntity = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: title,
      description,
      image: fullOgImage,
      location: {
        "@type": "Place",
        name: SITE_NAME_EL,
        address,
        geo,
      },
      organizer: {
        "@type": "Organization",
        name: SITE_NAME_EL,
        url: SITE_URL,
      },
      ...(eventDate ? { startDate: eventDate } : {}),
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: fullCanonical,
      },
    };
  } else {
    mainEntity = {
      "@context": "https://schema.org",
      "@type": "EventVenue",
      name: SITE_NAME_EL,
      description,
      url: fullCanonical,
      logo,
      image: fullOgImage,
      address,
      geo,
      telephone: PHONE,
      priceRange: "€€€",
      servesCuisine: "Greek",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "50",
      },
    };
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainEntity) }}
      />
      {breadcrumbs.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: crumb.name,
                item: fullUrl(crumb.url),
              })),
            }),
          }}
        />
      ) : null}
    </>
  );
}

export interface FaqJsonLdProps {
  readonly items: readonly { question: string; answer: string }[];
}

/** FAQPage structured data for rich results. */
export function FaqJsonLd({ items }: FaqJsonLdProps): ReactElement {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
