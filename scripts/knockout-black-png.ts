/**
 * Removes solid/near-black backgrounds from logo and home icon PNGs so they
 * work on light site backgrounds (originals were full-bleed black rectangles).
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const TARGETS: readonly string[] = [
  "public/images/logo-dark.png",
  "public/images/logo-white.png",
  "public/images/icon-home1.png",
  "public/images/icon-home3.png",
  "public/images/icon-home5.png",
];

function shouldKnockout(r: number, g: number, b: number, a: number): boolean {
  if (a === 0) {
    return false;
  }
  const sum = r + g + b;
  const max = Math.max(r, g, b);
  // Only remove true black / anti-alias around it; keep artwork strokes.
  return sum < 38 && max < 22;
}

async function processPng(relativePath: string): Promise<void> {
  const filePath = path.join(process.cwd(), relativePath);
  if (!fs.existsSync(filePath)) {
    console.warn("skip missing:", relativePath);
    return;
  }
  const { data, info } = await sharp(filePath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  if (channels !== 4) {
    throw new Error(`Expected RGBA, got ${channels} ch for ${relativePath}`);
  }
  let knocked = 0;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    if (shouldKnockout(r, g, b, a)) {
      data[i + 3] = 0;
      knocked++;
    }
  }
  await sharp(data, { raw: { width, height, channels: 4 } }).png({ compressionLevel: 9 }).toFile(filePath);
  console.log("ok", relativePath, "pixels cleared:", knocked);
}

async function main(): Promise<void> {
  for (const rel of TARGETS) {
    await processPng(rel);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
