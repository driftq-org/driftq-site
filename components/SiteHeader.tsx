import Button from "@/components/ui/Button";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import { site } from "@/lib/site";

const SiteHeader = () => (
  <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-zinc-950/70">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <Link href="/" className="flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-black font-black text-white dark:bg-white dark:text-black">
          DQ
        </div>
        <div className="font-semibold">{site.name}</div>
      </Link>

      <nav className="hidden items-center gap-6 text-sm md:flex">
        <Link href="/docs" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
          Docs
        </Link>
        <Link
          href="/docs/observability/metrics"
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
        >
          Metrics
        </Link>
        <Link href="/docs/roadmap" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
          Roadmap
        </Link>
        <a
          href={site.githubUrl}
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </nav>

      <div className="flex items-center gap-2">
        <ThemeToggle />

        <Button href="/docs" variant="secondary" className="hidden sm:inline-flex">
          Read the docs
        </Button>
        <Button href={site.githubUrl} className="hidden sm:inline-flex">
          View on GitHub
        </Button>
        <Button href="/docs" className="sm:hidden" variant="primary">
          Docs
        </Button>
      </div>
    </div>
  </header>
);

export default SiteHeader;
