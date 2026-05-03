/**
 * Map legacy `/assets/*` paths (Vite-era) to files under `public/images` (Next rewrite target).
 */
export function normalizePublicImageSrc(src: string): string {
  if (src.startsWith("/assets/")) {
    return `/images/${src.slice("/assets/".length)}`;
  }
  return src;
}
