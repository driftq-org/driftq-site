import { site } from "@/lib/site";

const SiteFooter = () => (
  <footer className="border-t border-black/10 bg-white">
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold">{site.name}</div>
          <div className="mt-1 text-sm text-black/60">{site.tagline}</div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <a className="text-black/70 hover:text-black" href={site.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="text-black/70 hover:text-black" href="/docs">
            Docs
          </a>
          <a className="text-black/70 hover:text-black" href="/docs/observability/metrics">
            Metrics
          </a>
        </div>
      </div>
      <div className="mt-8 text-xs text-black/50">
        © {new Date().getFullYear()} DriftQ. Built for developers shipping reliable AI workflows.
      </div>
    </div>
  </footer>
);

export default SiteFooter;
