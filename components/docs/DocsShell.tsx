"use client";

import Link from "next/link";
import { docsNav } from "@/lib/docs-nav";
import { useMemo, useState } from "react";

const DocsShell = (props: { currentPath: string; children: React.ReactNode }) => {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return docsNav;

    return docsNav
      .map((s) => ({ ...s, items: s.items.filter((i) => i.title.toLowerCase().includes(query)) }))
      .filter((s) => s.items.length > 0);
  }, [q]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[260px_1fr]">
        <aside className="md:sticky md:top-20 md:h-[calc(100vh-120px)] md:overflow-auto">
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
            {
              filtered.map((section) => (
                <div key={section.title}>
                  <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    {section.title}
                  </div>

                  <ul className="mt-2 space-y-1">
                    {
                      section.items.map((item) => {
                        const active = props.currentPath === item.href;

                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={[
                                "block rounded-lg px-2 py-1 text-sm transition-colors",
                                active
                                  ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                                  : "text-zinc-700 hover:bg-black/5 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
                              ].join(" ")}
                            >
                              {item.title}
                            </Link>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              ))
            }
          </nav>
        </aside>

        <main className="min-w-0">
          {/* prose needs explicit dark tweaks or it will look washed */}
          <div className="prose prose-slate max-w-none dark:prose-invert">
            {props.children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocsShell;
