// Import basePath directly from next.config.ts — guaranteed correct at build time.
// GitHub Actions sets NEXT_PUBLIC_BASE_PATH="/drmariisa" which next.config reads.
// Local dev and Vercel leave it empty.
import nextConfig from "../../next.config";

const bp: string = nextConfig.basePath || "";

export function asset(path: string): string {
  return `${bp}${path}`;
}
