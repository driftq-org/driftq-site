import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { InlineCode, GradientWord } from "@/components/docs/DocsUI";

const containerCls = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const linkCls = "underline underline-offset-4 decoration-transparent hover:decoration-white/70 text-indigo-400 hover:text-indigo-300 transition";
const ctaLinkCls =
  "inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 " +
  "underline underline-offset-4 decoration-transparent hover:decoration-indigo-300/60 transition";

const ProgressBox = () => (
  <div className="w-fit rounded-2xl border border-zinc-200/70 bg-white/70 px-3 py-2 text-xs text-zinc-700 shadow-soft backdrop-blur dark:border-white/10 dark:bg-zinc-950/60 dark:text-zinc-200">
    <div className="flex flex-col gap-2">
      {/* status */}
      <div className="inline-flex items-center gap-2">
        <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-900 dark:border-amber-900/40 dark:bg-amber-900/20 dark:text-amber-200">
          Alpha — not production-ready
        </span>
      </div>

      <div className="h-px w-full bg-black/5 dark:bg-white/10" />

      <div className="flex flex-col gap-1.5">
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span className="font-semibold">Shipped:</span>
          <span>DriftQ-Core MVP</span>
        </div>

        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span className="font-semibold">Shipped:</span>
          <span>Docker images, docs polish, etc.</span>
        </div>

        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="font-semibold">Now:</span>
          <span>AI Workflow Engine &amp; RAG Platform</span>
        </div>
      </div>
    </div>
  </div>
);

const HomePage = () => (
  <main>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(99,102,241,0.14),transparent_60%)] dark:bg-[radial-gradient(70%_50%_at_50%_0%,rgba(99,102,241,0.20),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-52 bg-gradient-to-b from-indigo-100/80 via-white/40 to-transparent dark:from-indigo-500/10 dark:via-zinc-950/20" />

      <div className={`${containerCls} pt-14 pb-6 sm:pt-20 sm:pb-8`}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="max-w-4xl">
            <h1 className="mt-0 text-4xl font-black tracking-tight text-zinc-950 sm:text-6xl dark:text-white">
              The <GradientWord>message queue</GradientWord> built for AI workflows.
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              DriftQ is the AI-native reliability layer for agent workflows. DriftQ-Core is the broker you
              can run today. See the{" "}
              <Link href="/docs/roadmap" className={linkCls}>
                roadmap
              </Link>{" "}
              for what’s next.
            </p>

            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              DriftQ-Core is the repo you run today.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/docs/run-locally"
                className="!bg-indigo-600 hover:!bg-indigo-500 dark:!bg-indigo-500 dark:hover:!bg-indigo-400"
              >
                Run locally
              </Button>
              <Button href="/docs" variant="primary" className="hidden sm:inline-flex">
                View Docs
              </Button>
            </div>
          </div>

          <div className="lg:ml-auto lg:pt-3">
            <ProgressBox />
          </div>
        </div>
      </div>
    </section>

    <section className={`${containerCls} py-10 sm:py-12`}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-black tracking-tight text-zinc-950 dark:text-white">
            What you can build with DriftQ
          </h2>

          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            DriftQ is not “just a queue”. It’s the reliability layer for systems that need retries, backoff, idempotency, and observability — without fragile glue code.
          </p>

          <ul className="mt-6 space-y-3 text-zinc-700 dark:text-zinc-200">
            <li>• Agent pipelines that fan-out work and safely retry failures</li>
            <li>• Long-running workflows with durable steps and strict DLQ handling</li>
            <li>• Streaming consumers that can crash and recover without double-processing</li>
            <li>• Backpressure-aware producers that get explicit 429 + Retry-After</li>
          </ul>

          <div className="mt-5">
            <Link href="/docs/use-cases" className={ctaLinkCls}>
              <span aria-hidden>→</span>
              <span>See real-world use cases</span>
            </Link>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Concrete scenarios: Next.js + FastAPI + LangChain pipelines, retries, DLQ, replay, and more.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-zinc-200/70 bg-white p-5 shadow-soft sm:p-6 lg:p-7 dark:border-white/10 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">Example</div>

            <pre className="mt-3 max-h-[420px] overflow-auto rounded-2xl bg-zinc-50 p-4 text-[12px] leading-relaxed text-zinc-900 sm:p-5 sm:text-[13px] dark:bg-zinc-900 dark:text-zinc-100">
{`# Create a topic
curl -i -X POST "http://localhost:8080/v1/topics?name=t&partitions=1"

# Produce with a retry policy
curl -i -X POST "http://localhost:8080/v1/produce?topic=t&value=hello&retry_max_attempts=2"

# Stream consume (NDJSON)
curl --no-buffer "http://localhost:8080/v1/consume?topic=t&group=g&owner=o&lease_ms=5000"

# Ack a message
curl -i -X POST "http://localhost:8080/v1/ack?topic=t&group=g&owner=o&partition=0&offset=0"

# Metrics
curl -s "http://localhost:8080/metrics" | findstr consumer_lag`}
            </pre>
          </div>
        </div>
      </div>
    </section>

    <section className={`${containerCls} pb-14 sm:pb-18`}>
      <div className="mb-7">
        <h3 className="text-xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Core capabilities
        </h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">
          The primitives you need for safe, retryable AI work.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card title="Streaming consume">
          NDJSON streaming from <InlineCode>/v1/consume</InlineCode> with per-owner leases.
        </Card>
        <Card title="Retry + DLQ">Automatic redelivery, envelope retry policy, and strict DLQ routing.</Card>
        <Card title="Idempotency">Consume-scope idempotency keys to prevent duplicate side effects.</Card>
        <Card title="Observability">
          Prometheus metrics for inflight, lag, DLQ totals, and backpressure rejects.
        </Card>
      </div>
    </section>
  </main>
);

export default HomePage;
