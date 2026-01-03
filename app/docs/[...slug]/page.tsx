import DocsShell from "@/components/docs/DocsShell";
import { compileMDX } from "next-mdx-remote/rsc";
import { listAllDocSlugs, readDocSource } from "@/lib/docs";
import { mdxComponents } from "@/components/docs/MDXComponents";
import { notFound } from "next/navigation";

type Params = { slug?: string[] };

// const generateStaticParams = () => listAllDocSlugs().map((slug) => ({ slug }));

const DocPage = async ({ params }: { params: Params }) => {
  const slug = params.slug ?? [];
  const source = readDocSource(slug);
  if (!source) return notFound();

  const { content, frontmatter } = await compileMDX<{ title?: string; description?: string }>({
    source,
    options: { parseFrontmatter: true },
    components: mdxComponents
  });

  const currentPath = "/docs" + (slug.length ? "/" + slug.join("/") : "");
  return (
    <DocsShell currentPath={currentPath}>
      {frontmatter?.title ? <h1>{frontmatter.title}</h1> : null}
      {frontmatter?.description ? <p className="text-black/70">{frontmatter.description}</p> : null}
      {content}
    </DocsShell>
  );
}

export default DocPage;
