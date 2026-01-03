import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const GradientWord = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
    {children}
  </span>
);

const HomePage = () => (
  <main>
    <section className="relative overflow-hidden">
      {/* light + dark radial */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(99,102,241,0.14),transparent_60%)] dark:bg-[radial-gradient(70%_50%_at_50%_0%,rgba(99,102,241,0.20),transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs text-zinc-700 shadow-soft backdrop-blur dark:border-white/10 dark:bg-zinc-950/60 dark:text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            DriftQ-Core MVP shipped
            <span className="text-zinc-400 dark:text-zinc-500">•</span>
            Observability + DLQ + Idempotency
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-zinc-950 sm:text-6xl dark:text-white">
            The <GradientWord>message queue</GradientWord> built for AI workflows.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            DriftQ-Core is a lightweight broker with streaming consume, leases, retries, idempotency, DLQ routing,
            and first-class metrics — designed to become the backbone for agent pipelines and workflow runtimes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/docs">Read the docs</Button>
            <Button href="/docs/quickstart" variant="secondary">
              Quickstart (curl)
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card title="Streaming consume">
              NDJSON streaming from <code>/v1/consume</code> with per-owner leases.
            </Card>
            <Card title="Retry + DLQ">Automatic redelivery, envelope retry policy, and strict DLQ routing.</Card>
            <Card title="Idempotency">Consume-scope idempotency keys to prevent duplicate side effects.</Card>
            <Card title="Observability">Prometheus metrics for inflight, lag, DLQ totals, and backpressure rejects.</Card>
          </div>
        </div>
      </div>
    </section>

    {/* WHAT YOU CAN BUILD */}
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-zinc-950 dark:text-white">
            What you can build with DriftQ
          </h2>

          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            DriftQ is not “just a queue”. It is the reliability layer for AI systems that need retries, backoff,
            idempotency, and observability — without bringing a full Kafka cluster to a knife fight.
          </p>

          <ul className="mt-6 space-y-3 text-zinc-700 dark:text-zinc-200">
            <li>• Agent pipelines that fan-out work and safely retry failures</li>
            <li>• Long-running workflows with durable steps and strict DLQ handling</li>
            <li>• Streaming consumers that can crash and recover without double-processing</li>
            <li>• Backpressure-aware producers that get explicit 429 + Retry-After</li>
          </ul>

          <div className="mt-8 flex gap-3">
            <Button href="/docs/concepts/leases-redelivery">Learn leases</Button>
            <Button href="/docs/observability/metrics" variant="secondary">
              See metrics
            </Button>
          </div>
        </div>

        {/* Example box stuff*/}
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-zinc-950">
          <div className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">Example</div>
          <div className="mt-3 text-sm">
            <pre className="overflow-x-auto rounded-2xl bg-zinc-50 p-4 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
              {
                `# Create a topic
                curl -i -X POST "http://localhost:8080/v1/topics?name=t&partitions=1"

                # Produce with a retry policy
                curl -i -X POST "http://localhost:8080/v1/produce?topic=t&value=hello&retry_max_attempts=2"

                # Stream consume (NDJSON)
                curl --no-buffer "http://localhost:8080/v1/consume?topic=t&group=g&owner=o&lease_ms=5000"

                # Ack a message
                curl -i -X POST "http://localhost:8080/v1/ack?topic=t&group=g&owner=o&partition=0&offset=0"

                # Metrics
                curl -s "http://localhost:8080/metrics" | findstr consumer_lag`
              }
            </pre>
          </div>
        </div>
      </div>
    </section>

    <section className="border-t border-black/10 bg-zinc-950 text-white dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-3xl font-black tracking-tight">Ready to explore DriftQ v2?</h3>
            <p className="mt-3 text-white/70">
              The next phase evolves DriftQ from a broker into an AI workflow runtime and RAG orchestration engine.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Button href="/docs/roadmap" variant="secondary" className="!bg-white !text-black hover:!bg-zinc-100">
              Roadmap
            </Button>
            <Button href="/docs" className="!bg-indigo-500 hover:!bg-indigo-400">
              Docs
            </Button>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default HomePage;
