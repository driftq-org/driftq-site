"use client";

import Link from "next/link";
import { docsNav } from "@/lib/docs-nav";
import { useMemo, useState } from "react";

const DocsShell = (props: { currentPath: string; children: React.ReactNode }) => {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) {
      return docsNav;
    }

    return docsNav
      .map((s) => ({
        ...s,
        items: s.items.filter((i) => i.title.toLowerCase().includes(query)),
      }))
      .filter((s) => s.items.length > 0);
  }, [q]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(99,102,241,0.14),transparent_60%)] dark:bg-[radial-gradient(70%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent_60%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr]">
          <aside className="md:sticky md:top-20 md:h-[calc(100vh-120px)] md:overflow-auto">
            <div className="rounded-2xl border border-black/10 bg-white/60 p-4 shadow-soft backdrop-blur dark:border-white/10 dark:bg-zinc-950/50">
              <div className="mb-4">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search docs…"
                  className="
                    w-full rounded-xl border px-3 py-2 text-sm outline-none
                    border-black/10 bg-white text-zinc-900 placeholder:text-zinc-500
                    focus:ring-2 focus:ring-black/20
                    dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500
                    dark:focus:ring-white/15
                  "
                />
              </div>

              <nav className="space-y-6">
                {filtered.map((section) => (
                  <div key={section.title}>
                    <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                      {section.title}
                    </div>

                    <ul className="mt-2 space-y-1">
                      {section.items.map((item) => {
                        const active =
                          props.currentPath === item.href ||
                          (item.href !== "/docs" && props.currentPath.startsWith(item.href + "/"));

                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={[
                                "block rounded-lg px-2 py-1 text-sm transition-colors",
                                active
                                  ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                                  : "text-zinc-700 hover:bg-black/5 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white",
                              ].join(" ")}
                            >
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          <main className="min-w-0">
            <div className="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-soft backdrop-blur sm:p-8 dark:border-white/10 dark:bg-zinc-950/50">
              <div
                className={[
                  "prose prose-zinc max-w-none dark:prose-invert",
                  "leading-relaxed prose-p:leading-relaxed prose-li:my-1 prose-ul:my-4 prose-li:leading-relaxed",

                  "prose-headings:tracking-tight prose-headings:scroll-mt-24",
                  "prose-h1:text-4xl prose-h1:font-black sm:prose-h1:text-5xl",
                  "prose-h2:text-2xl prose-h2:font-extrabold",
                  "prose-h3:text-xl prose-h3:font-bold",

                  "[&_a]:text-indigo-400 [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-transparent",
                  "[&_a:hover]:text-indigo-300 [&_a:hover]:decoration-indigo-300",

                  "[&_pre]:rounded-2xl [&_pre]:border [&_pre]:border-black/10 [&_pre]:bg-zinc-950 [&_pre]:p-4 [&_pre]:text-zinc-100",
                  "dark:[&_pre]:border-white/10 dark:[&_pre]:bg-zinc-900",
                  "[&_pre]:overflow-x-auto",

                  "[&_code]:rounded-md [&_code]:bg-zinc-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.95em] [&_code]:text-zinc-900",
                  "dark:[&_code]:bg-zinc-800 dark:[&_code]:text-zinc-100",

                  "[&_blockquote]:rounded-xl [&_blockquote]:border-l-2 [&_blockquote]:border-indigo-500/60 [&_blockquote]:bg-black/5 [&_blockquote]:px-4 [&_blockquote]:py-3",
                  "dark:[&_blockquote]:bg-white/5",
                ].join(" ")}
              >
                {props.children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DocsShell;
