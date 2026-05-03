/**
 * Batch-optimise raster images under public/images and public/final-photos.
 * Run: npm run images:optimize
 * Skips re-encoding when .webp + .avif exist and are newer than the source raster.
 */
import type { Dirent } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const MAX_EDGE = 2400;
const JPEG_QUALITY = 82;
const WEBP_QUALITY = 85;
const AVIF_QUALITY = 80;
const ROOTS = [path.join(process.cwd(), "public", "images"), path.join(process.cwd(), "public", "final-photos")];
const RASTER_EXT = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]);

interface ManifestEntry {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly blurDataURL: string;
}

async function walk(dir: string): Promise<string[]> {
  const out: string[] = [];
  let entries: Dirent[] = [];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...(await walk(full)));
    } else if (e.isFile()) {
      const ext = path.extname(e.name);
      if (RASTER_EXT.has(ext)) {
        out.push(full);
      }
    }
  }
  return out;
}

function publicUrlFromAbs(absPath: string): string {
  const relFromPublic = path.relative(path.join(process.cwd(), "public"), absPath).split(path.sep).join("/");
  return `/${relFromPublic}`;
}

async function shouldSkipOptimisation(absPath: string): Promise<boolean> {
  const ext = path.extname(absPath);
  const baseNoExt = absPath.slice(0, -ext.length);
  const webpPath = `${baseNoExt}.webp`;
  const avifPath = `${baseNoExt}.avif`;
  try {
    const [stSrc, stWebp, stAvif] = await Promise.all([fs.stat(absPath), fs.stat(webpPath), fs.stat(avifPath)]);
    return stWebp.mtimeMs >= stSrc.mtimeMs && stAvif.mtimeMs >= stSrc.mtimeMs;
  } catch {
    return false;
  }
}

async function readManifestEntry(absPath: string): Promise<ManifestEntry> {
  const pubSrc = publicUrlFromAbs(absPath);
  const meta = await sharp(absPath).metadata();
  const w = meta.width ?? 1600;
  const h = meta.height ?? 1066;
  const buf = await sharp(absPath).resize(20, 20, { fit: "inside" }).blur().jpeg({ quality: 40 }).toBuffer();
  const blurDataURL = `data:image/jpeg;base64,${buf.toString("base64")}`;
  return {
    src: pubSrc,
    width: w,
    height: h,
    blurDataURL,
  };
}

async function optimiseFile(absPath: string): Promise<ManifestEntry | null> {
  const pubSrc = publicUrlFromAbs(absPath);
  const ext = path.extname(absPath);
  const baseNoExt = absPath.slice(0, -ext.length);
  const webpPath = `${baseNoExt}.webp`;
  const avifPath = `${baseNoExt}.avif`;
  const meta = await sharp(absPath).rotate().metadata();
  const w = meta.width ?? 1600;
  const h = meta.height ?? 1066;
  const resized = sharp(absPath).rotate().resize({
    width: w >= h ? MAX_EDGE : undefined,
    height: h > w ? MAX_EDGE : undefined,
    fit: "inside",
    withoutEnlargement: true,
  });
  const jpegBuffer = await resized
    .clone()
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
    .toBuffer();
  await fs.writeFile(absPath, jpegBuffer);
  await resized.clone().webp({ quality: WEBP_QUALITY }).toFile(webpPath);
  await resized.clone().avif({ quality: AVIF_QUALITY }).toFile(avifPath);
  const buf = await sharp(absPath).resize(20, 20, { fit: "inside" }).blur().jpeg({ quality: 40 }).toBuffer();
  const blurDataURL = `data:image/jpeg;base64,${buf.toString("base64")}`;
  const finalMeta = await sharp(absPath).metadata();
  return {
    src: pubSrc,
    width: finalMeta.width ?? w,
    height: finalMeta.height ?? h,
    blurDataURL,
  };
}

async function main(): Promise<void> {
  const manifest: Record<string, ManifestEntry> = {};
  for (const root of ROOTS) {
    const files = await walk(root);
    for (const f of files) {
      if (f.endsWith(".webp") || f.endsWith(".avif")) {
        continue;
      }
      try {
        if (await shouldSkipOptimisation(f)) {
          const entry = await readManifestEntry(f);
          manifest[entry.src] = entry;
          console.log("SKIP (up-to-date derivatives)", f);
          continue;
        }
        const entry = await optimiseFile(f);
        if (entry) {
          manifest[entry.src] = entry;
          console.log("OK", f);
        }
      } catch (err) {
        console.error("FAIL", f, err);
      }
    }
  }
  const manifestPath = path.join(process.cwd(), "public", "images", "manifest.json");
  await fs.mkdir(path.dirname(manifestPath), { recursive: true });
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
  console.log("Wrote manifest", manifestPath, "entries", Object.keys(manifest).length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
