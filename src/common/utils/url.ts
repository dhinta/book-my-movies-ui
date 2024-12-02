export function slugify(str: string) {
  return str.replace(/\s+/g, '-').toLowerCase();
}
