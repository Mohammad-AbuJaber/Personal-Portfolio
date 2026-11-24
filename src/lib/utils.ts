export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// Files in /public don't get the GitHub Pages prefix automatically,
// unlike next/link and next/image.
export function withBasePath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
