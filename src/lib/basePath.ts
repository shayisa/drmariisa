// Next.js inlines NEXT_PUBLIC_ env vars at build time.
// GitHub Actions sets NEXT_PUBLIC_BASE_PATH="/drmariisa"
// Local dev and Vercel leave it empty.
const bp: string = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${bp}${path}`;
}
