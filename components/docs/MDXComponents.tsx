import Link from "next/link";

export const mdxComponents = {
  a: (props: any) => {
    const href: string | undefined = props?.href;
    const isExternal = href?.startsWith("http");

    if (href && isExternal) {
      return <a {...props} target="_blank" rel="noreferrer" />;
    }

    if (href) {
      return <Link href={href}>{props.children}</Link>;
    }

    return <a {...props} />;
  },
  code: (props: any) => <code className="rounded bg-black/5 px-1 py-0.5">{props.children}</code>
} as const;
