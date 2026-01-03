import Link from "next/link";
import React from "react";

export const mdxComponents = {
  a: (props: any) => {
    const href: string | undefined = props?.href;
    const isExternal = typeof href === "string" && href.startsWith("http");

    const cls =
      "underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-500 " +
      "text-zinc-900 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-400";

    if (href && isExternal) {
      // keep any existing className but ensure readable defaults
      return (
        <a
          {...props}
          className={[cls, props.className].filter(Boolean).join(" ")}
          target="_blank"
          rel="noreferrer"
        />
      );
    }

    if (href) {
      return (
        <Link
          href={href}
          className={[cls, props.className].filter(Boolean).join(" ")}
        >
          {props.children}
        </Link>
      );
    }

    return <a {...props} className={[cls, props.className].filter(Boolean).join(" ")} />;
  },

  code: (props: any) => (
    <code className="rounded bg-zinc-100 px-1 py-0.5 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
      {props.children}
    </code>
  )
} as const;
