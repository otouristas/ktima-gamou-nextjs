import { SITE_URL } from "./config";

/** Greek pathname → English alternate pathname (when a dedicated EN page exists). */
export const GREEK_TO_ENGLISH_PATH: Readonly<Record<string, string>> = {
  "/": "/en",
  "/emeis": "/en/about",
  "/dexiosi": "/en/reception",
  "/gamos": "/en/weddings",
  "/vaptisi": "/en/baptism",
  "/eterikes-ekdiloseis": "/en/corporate-events",
  "/parti": "/en/party",
  "/o-horos": "/en/venue",
  "/ekklisies": "/en/churches",
  "/ypiresies": "/en/services",
  "/fotografos": "/en/photographer",
  "/dj-mousiki": "/en/dj-music",
  "/reviews": "/en/reviews",
  "/epikoinonia": "/en/contact",
  "/contact": "/en/contact",
  "/gallery": "/en/gallery",
  "/blog": "/en/blog",
  "/request": "/en/contact",
  "/el": "/en",
  "/el/": "/en",
};

export function resolveEnglishAlternatePath(greekPath: string): string | undefined {
  const normalized = greekPath === "" ? "/" : greekPath.startsWith("/") ? greekPath : `/${greekPath}`;
  return GREEK_TO_ENGLISH_PATH[normalized];
}

export function buildAbsoluteUrl(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(path, SITE_URL).toString();
}
