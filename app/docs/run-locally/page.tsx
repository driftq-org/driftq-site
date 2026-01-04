import Button from "@/components/ui/Button";
import DocsShell from "@/components/docs/DocsShell";

const RunLocallyPage = () => (
  <DocsShell currentPath="/docs/run-locally">
    <div className="not-prose">
      <div className="space-y-8">
        {/* badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          Quickstart
          <span className="text-zinc-400 dark:text-zinc-500">•</span>
          Docker images coming soon
        </div>

        {/* header */}
        <div className="space-y-3">
          <h1 className="text-4xl font-black tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            Run DriftQ-Core locally
          </h1>

          <p className="max-w-2xl text-zinc-600 dark:text-zinc-300">
            This page will become the 2-minute path to running DriftQ-Core locally. Docker images will be added soon.
          </p>
        </div>

        {/* inset section (not another full “card”) */}
        <div className="rounded-3xl border border-black/10 bg-black/5 p-6 dark:border-white/10 dark:bg-white/5">
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            What’s coming here
          </div>

          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
            <li>• Docker image for DriftQ-Core</li>
            <li>• docker compose example for local dev</li>
            <li>• Copy/paste curl quickstart (produce → consume → ack → metrics)</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/docs" variant="secondary">
              View Docs
            </Button>
            <Button href="/docs/roadmap" variant="secondary">
              View Roadmap
            </Button>
          </div>

          <p className="mt-5 text-xs text-zinc-500 dark:text-zinc-400">
            TODO (note to myself): add the Docker image, put the exact commands here first, then mirror them into the README.
          </p>
        </div>
      </div>
    </div>
  </DocsShell>
);

export default RunLocallyPage;
