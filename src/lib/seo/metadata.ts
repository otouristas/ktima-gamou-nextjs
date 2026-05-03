import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME_EL,
  DEFAULT_OG_IMAGE,
  GEO_LAT,
  GEO_LNG,
} from "./config";
import { buildAbsoluteUrl, GREEK_TO_ENGLISH_PATH, resolveEnglishAlternatePath } from "./hreflang";

export interface BuildMetadataInput {
  readonly title: string;
  readonly description: string;
  /** Path only, e.g. `/gamos` or `/en/weddings` */
  readonly canonicalPath: string;
  readonly lang?: "el" | "en";
  readonly keywords?: string;
  readonly ogImage?: string;
}

function toOgImageUrl(ogImage: string): string {
  if (ogImage.startsWith("http")) {
    return ogImage;
  }
  return buildAbsoluteUrl(ogImage.startsWith("/") ? ogImage : `/${ogImage}`);
}

function resolveGreekPathForEnglish(englishPath: string): string {
  const entry = Object.entries(GREEK_TO_ENGLISH_PATH).find(([, en]) => en === englishPath);
  if (entry) {
    return entry[0];
  }
  if (englishPath.startsWith("/en/blog/")) {
    return englishPath.replace(/^\/en/, "") || "/blog";
  }
  return "/";
}

/**
 * Builds Next.js Metadata with canonical on ktimaorion.gr, Open Graph, Twitter, and hreflang when an EN twin exists.
 */
export function buildMetadata(input: BuildMetadataInput): Metadata {
  const {
    title,
    description,
    canonicalPath,
    lang = "el",
    keywords,
    ogImage = DEFAULT_OG_IMAGE,
  } = input;
  const canonicalUrl = buildAbsoluteUrl(canonicalPath);
  const fullOg = toOgImageUrl(ogImage);
  const siteName = lang === "en" ? "Ktima Orion" : SITE_NAME_EL;
  let languages: Record<string, string>;
  if (lang === "el") {
    const enAlt = resolveEnglishAlternatePath(canonicalPath);
    languages = {
      el: canonicalUrl,
      "x-default": canonicalUrl,
      ...(enAlt ? { en: buildAbsoluteUrl(enAlt) } : {}),
    };
  } else {
    const elPath = resolveGreekPathForEnglish(canonicalPath);
    languages = {
      en: canonicalUrl,
      el: buildAbsoluteUrl(elPath),
      "x-default": buildAbsoluteUrl(elPath),
    };
  }
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: keywords ? keywords.split(",").map((k) => k.trim()) : undefined,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      type: "website",
      locale: lang === "en" ? "en_US" : "el_GR",
      url: canonicalUrl,
      siteName,
      title,
      description,
      images: [{ url: fullOg, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullOg],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    authors: [{ name: siteName }],
    other: {
      "geo.region": "GR-A1",
      "geo.placename": "Κερατέα",
      "geo.position": `${GEO_LAT};${GEO_LNG}`,
      ICBM: `${GEO_LAT}, ${GEO_LNG}`,
    },
    verification: {
      google: ["SjeFWz1wOp8tRyLIARvDR6ECjYEb0Ea_raXH1UIKzdo", "xuVpFU3oswJIf8NTCV-D8mDL6xd6leTUk62qJBDsmSM"],
    },
  };
}
