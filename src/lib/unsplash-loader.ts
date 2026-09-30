import type { ImageLoaderProps } from "next/image";

// Serve photos straight from Unsplash's CDN, letting it resize and pick the format.
export default function unsplashLoader({ src, width, quality }: ImageLoaderProps) {
  const url = new URL(src);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 75));
  return url.toString();
}
