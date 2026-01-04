import Link from "next/link";
import { site } from "@/lib/site";

const linkCls =
  "text-zinc-600 hover:text-zinc-900 transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white " +
  "dark:text-zinc-300 dark:hover:text-white dark:focus-visible:ring-white/20 dark:focus-visible:ring-offset-zinc-950";

const SiteFooter = () => (
  <footer className="border-t border-black/10 bg-white dark:border-white/10 dark:bg-zinc-950">
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold text-zinc-950 dark:text-white">{site.name}</div>
          <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{site.tagline}</div>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <Link href="/docs" className={linkCls}>Docs</Link>
          <Link href="/docs/observability/metrics" className={linkCls}>Metrics</Link>
          <Link href="/docs/roadmap" className={linkCls}>Roadmap</Link>
          <a href={site.githubUrl} className={linkCls} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <div className="mt-8 text-xs text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} DriftQ. Built for developers shipping reliable AI workflows.
      </div>
    </div>
  </footer>
);

export default SiteFooter;
