import DocsShell from "@/components/docs/DocsShell";
import React from "react";
import { Callout, UseCase } from "@/components/docs/DocsUI";

const UseCasesPage = () => (
  <DocsShell currentPath="/docs/use-cases">
    <h1>Use Cases</h1>
    <p>
      Engineers don’t adopt infrastructure because it sounds cool. They adopt it because it removes
      pain: timeouts, duplicate side-effects, retry chaos, and “we can’t reproduce what happened”
      incidents.
    </p>
    <p>
      DriftQ is most valuable when you have <strong>slow/flaky/expensive work</strong> (LLMs, tool
      calls, ingestion) and you need it to be <strong>durable, retryable, and debuggable</strong> —
      without turning your FastAPI request handlers into a fragile workflow engine.
    </p>

    <div className="not-prose my-6 grid gap-4 md:grid-cols-3">
      <Callout tone="good" title="Use DriftQ when…">
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>work can’t fit safely inside an HTTP request</li>
          <li>retries would cause duplicate side-effects</li>
          <li>you need ownership/leases and explicit ack/nack</li>
          <li>you want replay, auditability, and DLQ</li>
        </ul>
      </Callout>

      <Callout tone="bad" title="Probably overkill when…">
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>tasks are sub-second and synchronous is fine</li>
          <li>duplicates/loss are acceptable</li>
          <li>you don’t need retries, DLQ, or replay</li>
        </ul>
      </Callout>

      <Callout tone="neutral" title="One-line pitch">
        DriftQ turns unreliable “background work” into a consistent workflow system: deduped,
        retryable, observable, and resumable.
      </Callout>
    </div>

    <h2>Where DriftQ fits in a Next.js + FastAPI + LangChain app</h2>
    <p>
      A common pattern is: FastAPI stays the <em>front door</em> (auth, validation, quotas). DriftQ
      becomes the <em>work backbone</em>. Workers execute LLM/tool pipelines. The Next.js frontend
      subscribes to run status and results (SSE, WebSocket, polling — your call).
    </p>

    <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
      <Callout tone="neutral" title="Typical flow">
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Next.js calls FastAPI: POST /runs (or /ask)</li>
          <li>FastAPI validates, then enqueues a message to DriftQ</li>
          <li>Workers consume and execute the pipeline</li>
          <li>Workers ack success / nack failure with retries and DLQ</li>
          <li>UI shows progress and can reconnect using the same run ID</li>
        </ol>
      </Callout>

      <Callout tone="warn" title="The key discipline">
        Define your envelope (run_id, tenant_id, user_id), choose stable idempotency keys, and
        decide what “ack means done” for each step. That’s what prevents expensive duplicates.
      </Callout>
    </div>

    <h2>Use cases</h2>
    <p>
      Each scenario below is the same structure: what hurts, how DriftQ helps, and what you gain.
      This is the stuff teams hit daily in real production apps.
    </p>

    <div className="not-prose my-6 space-y-6">
      <UseCase
        title="Async LLM runs (no more request timeouts)"
        tags={["LLM", "FastAPI", "Workers"]}
        problem={
          <>
            LLM + retrieval + tool calls can take 5–60 seconds. Doing this inside a FastAPI
            request/response causes timeouts, client retries, and user refreshes that trigger the
            same run multiple times.
          </>
        }
        how={
          <>
            FastAPI enqueues a durable “run” message into DriftQ and returns immediately. Workers
            consume and execute the pipeline with ownership + retries + idempotency.
          </>
        }
        outcome={
          <>
            Fast, predictable APIs. Durable runs. Less duplicated cost. Workers scale independently
            from the web tier.
          </>
        }
      />

      <UseCase
        title="Streaming tokens + reconnect support"
        tags={["Streaming", "SSE/WebSocket", "Resumable UX"]}
        problem={
          <>
            Streaming directly from an HTTP request breaks when the client disconnects (mobile,
            tab switch, refresh). Users reconnect and accidentally restart expensive work.
          </>
        }
        how={
          <>
            DriftQ coordinates run lifecycle. The UI subscribes to run updates keyed by run_id.
            Disconnects don’t kill the run; the user reconnects and continues.
          </>
        }
        outcome={
          <>
            Streaming UX that survives disconnects. Fewer “it restarted” bugs. Less wasted spend.
          </>
        }
      />

      <UseCase
        title="Idempotency for expensive LLM calls"
        tags={["Idempotency", "Cost control"]}
        problem={
          <>
            Double-clicks, retries, and deploy restarts cause the same prompt to be executed twice,
            wasting money and possibly producing inconsistent state.
          </>
        }
        how={
          <>
            Use a stable idempotency key per run (e.g., hash of user_id + conversation_id + prompt +
            params). DriftQ reserves/leases ownership for that key and commits it on ack.
          </>
        }
        outcome={
          <>
            Retries become safe. Costs drop. “Why did it run twice?” stops happening.
          </>
        }
      />

      <UseCase
        title="Tool-calling agents without duplicate side-effects"
        tags={["Agents", "Tool calls", "Correctness"]}
        problem={
          <>
            LangChain-style agents call tools: send emails, create tickets, charge cards, provision
            resources. If a run retries, you can easily execute side-effects twice.
          </>
        }
        how={
          <>
            Model each tool step as its own message with its own idempotency key. Ack commits the
            effect. Nack retries with backoff. DLQ quarantines poison tasks.
          </>
        }
        outcome={
          <>
            Exactly-once effects (in practice). Fewer production incidents and less “agent did it
            twice” embarrassment.
          </>
        }
      />

      <UseCase
        title="Backpressure under provider rate limits"
        tags={["Backpressure", "429", "Reliability"]}
        problem={
          <>
            When OpenAI/Anthropic rate-limit you (or you spike traffic), synchronous handling causes
            cascading failures: timeouts → retries → more load → outage.
          </>
        }
        how={
          <>
            DriftQ absorbs bursts and can reject/slow producers under overload. Workers enforce
            concurrency caps and retry with backoff instead of stampeding.
          </>
        }
        outcome={
          <>
            Graceful degradation. More “slower but alive” and less “everything down”. Incidents get
            easier to manage.
          </>
        }
      />

      <UseCase
        title="Document ingestion & embeddings (RAG pipelines)"
        tags={["RAG", "Embeddings", "Ingestion"]}
        problem={
          <>
            Ingestion is multi-step (fetch → parse → chunk → embed → index). Failures create partial
            indexes, repeated embeddings, and messy manual recovery.
          </>
        }
        how={
          <>
            Represent ingestion as step messages with per-step idempotency. DLQ bad documents without
            blocking the rest. Replay a run when needed.
          </>
        }
        outcome={
          <>
            Predictable ingestion. Less wasted embedding spend. Easy recovery and debugging.
          </>
        }
      />

      <UseCase
        title="Webhook storms"
        tags={["Webhooks", "Burst traffic", "Deduping"]}
        problem={
          <>
            Webhooks arrive in bursts and often duplicate. Synchronous processing leads to timeouts,
            and the sender retries, amplifying the storm.
          </>
        }
        how={
          <>
            FastAPI validates and enqueues immediately. Workers process asynchronously using the
            webhook event ID as an idempotency key.
          </>
        }
        outcome={
          <>
            Stable ingestion. Controlled processing. Fewer outages during bursts.
          </>
        }
      />

      <UseCase
        title="Replacing cron scripts with durable jobs"
        tags={["Cron", "Scheduled tasks", "Ops"]}
        problem={
          <>
            Cron on one machine fails silently, runs twice, or gets forgotten. You discover issues
            days later.
          </>
        }
        how={
          <>
            Treat scheduled tasks as messages. A scheduler produces into DriftQ. Workers run with
            retries/backoff and DLQ.
          </>
        }
        outcome={
          <>
            You know what ran and what failed. Jobs survive restarts. Less “cron roulette.”
          </>
        }
      />

      <UseCase
        title="Replay for debugging and incident response"
        tags={["Replay", "WAL", "Audit"]}
        problem={
          <>
            A customer reports “your app did something weird.” Logs are incomplete. State already
            mutated. You can’t reproduce the run reliably.
          </>
        }
        how={
          <>
            WAL-backed persistence + structured envelopes enable replay of workflows or specific
            steps. Trace events make “what happened” human-readable.
          </>
        }
        outcome={
          <>
            Faster root-cause analysis. Better trust. A path to compliance/auditing if you need it.
          </>
        }
      />
    </div>

    <h2>When DriftQ is not the right tool</h2>
    <p>
      If your app is tiny, tasks are sub-second, and you can tolerate occasional loss/duplication,
      you’ll move faster with something simpler. DriftQ is infrastructure — it must earn its place.
    </p>

    <div className="not-prose my-6">
      <Callout tone="warn" title="Blunt adoption advice">
        Don’t integrate DriftQ into everything at once. Pick one high-pain workflow (LLM run,
        ingestion, webhooks, notifications). Prove reliability and cost savings. Then expand.
      </Callout>
    </div>
  </DocsShell>
);

export default UseCasesPage;
