import fs from "node:fs";
import path from "node:path";

export const DOCS_DIR = path.join(process.cwd(), "content", "docs");

export function docPathFromSlug(slug: string[]) {
  const rel = slug.length === 0 ? "index.mdx" : path.join(...slug) + ".mdx";
  return path.join(DOCS_DIR, rel);
}

export function readDocSource(slug: string[]) {
  const p = docPathFromSlug(slug);
  if (!fs.existsSync(p)) {
    return null;
  }

  return fs.readFileSync(p, "utf-8");
}

export function listAllDocSlugs(): string[][] {
  const out: string[][] = [];
  const walk = (dir: string, prefix: string[] = []) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith("_")) {
        continue;
      }

      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full, [...prefix, entry.name]);
      }

      if (entry.isFile() && entry.name.endsWith(".mdx")) {
        if (entry.name === "index.mdx" && prefix.length === 0) {
          out.push([]);
        } else if (entry.name === "index.mdx") {
          out.push(prefix);
        } else {
          out.push([...prefix, entry.name.replace(/\.mdx$/, "")]);
        }
      }
    }
  };
  walk(DOCS_DIR, []);
  return out;
}
