import type { MetadataRoute } from "next";
import { GREEK_TO_ENGLISH_PATH, buildAbsoluteUrl } from "@/lib/seo/hreflang";
import { blogPosts } from "@/data/blogPosts";

const staticGreekPaths: readonly string[] = [
  "/",
  "/gamos",
  "/vaptisi",
  "/parti",
  "/eterikes-ekdiloseis",
  "/o-horos",
  "/emeis",
  "/ypiresies",
  "/dexiosi",
  "/fotografos",
  "/dj-mousiki",
  "/ekklisies",
  "/gallery",
  "/reviews",
  "/epikoinonia",
  "/contact",
  "/request",
  "/blog",
  "/ktima-gamou",
  "/ktima-vaptisis",
  "/el",
  "/el/ktima-gamou-athina",
  "/el/ktimata-vaptisis-athina",
  "/el/ekklisiaki-dipla-sti-thalassa",
  "/el/ktima-gamou-athens-riviera",
  "/el/ekklisies/agios-alexandros-daskaleio",
  "/el/ekklisies/profitis-ilias-thoriko",
  "/el/ekklisies/agios-panteleimonas-keratea",
  "/el/ekklisies/panagia-gkarika",
  "/el/ekklisies/agia-triada",
];

const staticEnglishPaths: readonly string[] = [
  "/en",
  "/en/about",
  "/en/reception",
  "/en/weddings",
  "/en/baptism",
  "/en/corporate-events",
  "/en/party",
  "/en/venue",
  "/en/churches",
  "/en/services",
  "/en/photographer",
  "/en/dj-music",
  "/en/reviews",
  "/en/contact",
  "/en/blog",
  "/en/gallery",
  "/en/churches/agia-triada",
];

function lastMod(): Date {
  return new Date("2026-05-03");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const path of staticGreekPaths) {
    const en = GREEK_TO_ENGLISH_PATH[path];
    entries.push({
      url: buildAbsoluteUrl(path),
      lastModified: lastMod(),
      changeFrequency: path === "/" || path === "/el" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path.startsWith("/el/") ? 0.75 : 0.85,
      alternates: en
        ? { languages: { el: buildAbsoluteUrl(path), en: buildAbsoluteUrl(en), "x-default": buildAbsoluteUrl(path) } }
        : undefined,
    });
  }
  for (const path of staticEnglishPaths) {
    if (path === "/en") {
      entries.push({
        url: buildAbsoluteUrl(path),
        lastModified: lastMod(),
        changeFrequency: "weekly",
        priority: 0.95,
        alternates: {
          languages: { el: buildAbsoluteUrl("/"), en: buildAbsoluteUrl("/en"), "x-default": buildAbsoluteUrl("/") },
        },
      });
      continue;
    }
    entries.push({
      url: buildAbsoluteUrl(path),
      lastModified: lastMod(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }
  for (const post of blogPosts) {
    entries.push({
      url: buildAbsoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.65,
      alternates: {
        languages: {
          el: buildAbsoluteUrl(`/blog/${post.slug}`),
          en: buildAbsoluteUrl(`/en/blog/${post.slug}`),
          "x-default": buildAbsoluteUrl(`/blog/${post.slug}`),
        },
      },
    });
  }
  return entries;
}
