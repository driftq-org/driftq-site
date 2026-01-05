import DocsShell from "@/components/docs/DocsShell";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/docs/MDXComponents";
import { notFound } from "next/navigation";
import { listAllDocSlugs, readDocSource } from "@/lib/docs";

export const dynamicParams = false;

export function generateStaticParams() {
  // Your /docs root is handled by app/docs/page.tsx, so skip []
  return listAllDocSlugs()
    .filter((slug) => slug.length > 0)
    .map((slug) => ({ slug }));
}

type Params = { slug?: string[] };

const DocPage = async ({ params }: { params: Params }) => {
  const slug = params.slug ?? [];
  const source = readDocSource(slug);
  if (!source) {
    return notFound();
  }

  const { content, frontmatter } = await compileMDX<{ title?: string; description?: string }>({
    source,
    options: { parseFrontmatter: true },
    components: mdxComponents
  });

  const currentPath = "/docs" + (slug.length ? "/" + slug.join("/") : "");

  return (
    <DocsShell currentPath={currentPath}>
      {
        frontmatter?.title
          ? <h1 className="text-3xl font-black tracking-tight text-zinc-950 dark:text-white sm:text-4xl">{frontmatter.title}</h1>
          : null
      }

      {
        frontmatter?.description
          ? <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">{frontmatter.description}</p>
          : null
      }

      <div className={frontmatter?.title || frontmatter?.description ? "mt-8" : ""}>{content}</div>
    </DocsShell>
  );
};

export default DocPage;
