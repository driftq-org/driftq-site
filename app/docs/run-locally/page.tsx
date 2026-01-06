import DocsShell from "@/components/docs/DocsShell";
import { Code, CodeSpan } from "@/components/docs/DocsUI";

const IMAGE = "ghcr.io/driftq-org/driftq-core";
const DEFAULT_VERSION = "1.0.0";

const RunLocallyPage = () => (
  <DocsShell currentPath="/docs/run-locally">
    <div className="not-prose">
      <div className="space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-black tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Run DriftQ-Core locally
          </h1>

          <p className="max-w-2xl text-zinc-600 dark:text-zinc-300">
            The 2-minute path to running DriftQ-Core on any machine with Docker. Use a pinned version for reproducible
            runs (recommended).
          </p>
        </div>

        <div className="rounded-3xl border border-black/10 bg-black/5 p-6 dark:border-white/10 dark:bg-white/5">
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Option A (recommended): Pull from GHCR and run
          </div>

          <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-200">
            Pin a version so your run is reproducible. <CodeSpan>latest</CodeSpan> tracks <CodeSpan>main</CodeSpan>{" "}
            (convenient, but can break unexpectedly).
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <div className="mb-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">mac/linux</div>
              <Code>{`export DRIFTQ_VERSION="${DEFAULT_VERSION}"
docker pull ${IMAGE}:$DRIFTQ_VERSION
docker run --rm -p 8080:8080 -v driftq-data:/data ${IMAGE}:$DRIFTQ_VERSION`}</Code>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">windows powershell</div>
              <Code>{`$env:DRIFTQ_VERSION="${DEFAULT_VERSION}"
docker pull ${IMAGE}:$env:DRIFTQ_VERSION
docker run --rm -p 8080:8080 -v driftq-data:/data ${IMAGE}:$env:DRIFTQ_VERSION`}</Code>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">verify</div>
              <Code>{`# mac/linux
curl http://localhost:8080/v1/version

# windows powershell
curl.exe http://localhost:8080/v1/version`}</Code>
            </div>

            <div className="text-sm text-zinc-700 dark:text-zinc-200">
              <div className="font-semibold text-zinc-900 dark:text-zinc-100">Useful tags</div>
              <ul className="mt-2 space-y-1">
                <li>• <CodeSpan>{`${IMAGE}:${DEFAULT_VERSION}`}</CodeSpan> (recommended: reproducible)</li>
                <li>• <CodeSpan>{`${IMAGE}:latest`}</CodeSpan> (tracks <CodeSpan>main</CodeSpan>)</li>
                <li>• <CodeSpan>{`${IMAGE}:sha-<...>`}</CodeSpan> (exact build)</li>
              </ul>
            </div>

            <p className="text-sm text-zinc-700 dark:text-zinc-200">
              Stop it with <CodeSpan>Ctrl+C</CodeSpan>. To wipe persisted WAL/data:
            </p>

            <Code>{`docker volume rm driftq-data`}</Code>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-black/5 p-6 dark:border-white/10 dark:bg-white/5">
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Option B: Docker Compose (recommended if you cloned the repo)
          </div>

          <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-200">
            Compose uses a named volume so WAL persists. You can override the image tag with{" "}
            <CodeSpan>DRIFTQ_VERSION</CodeSpan>.
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <div className="mb-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">mac/linux</div>
              <Code>{`export DRIFTQ_VERSION="${DEFAULT_VERSION}"
docker compose up`}</Code>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">windows powershell</div>
              <Code>{`$env:DRIFTQ_VERSION="${DEFAULT_VERSION}"
docker compose up`}</Code>
            </div>

            <div className="text-sm text-zinc-700 dark:text-zinc-200">
              DriftQ listens on <CodeSpan>http://localhost:8080</CodeSpan>. WAL is stored in a named Docker volume
              mounted at <CodeSpan>/data</CodeSpan> inside the container.
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">stop</div>
              <Code>{`docker compose down`}</Code>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">wipe WAL/data</div>
              <Code>{`docker compose down -v`}</Code>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                minimal compose example (defaults to {DEFAULT_VERSION})
              </div>
              <Code>{`services:
  driftqd:
    image: ${IMAGE}:\${DRIFTQ_VERSION:-${DEFAULT_VERSION}}
    ports:
      - "8080:8080"
    volumes:
      - driftq-data:/data

volumes:
  driftq-data:`}</Code>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-black/5 p-6 dark:border-white/10 dark:bg-white/5">
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Option C: Build locally (dev)
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <div className="mb-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">mac/linux</div>
              <Code>{`docker build -t driftq-core:local \\
  --build-arg VERSION=dev \\
  --build-arg COMMIT="$(git rev-parse --short HEAD)" \\
  .`}</Code>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">windows powershell</div>
              <Code>{`docker build -t driftq-core:local \`
  --build-arg VERSION=dev \`
  --build-arg COMMIT=$(git rev-parse --short HEAD) \`
  .`}</Code>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">run</div>
              <Code>{`docker run --rm -p 8080:8080 -v driftq-data:/data driftq-core:local`}</Code>
            </div>
          </div>
        </div>

        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Note: this page mirrors the{" "}
          <a
            href="https://github.com/driftq-org/DriftQ-Core?tab=readme-ov-file#driftq-core"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            repo README
          </a>
        </p>
      </div>
    </div>
  </DocsShell>
);

export default RunLocallyPage;
