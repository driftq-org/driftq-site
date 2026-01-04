export type NavItem = { title: string; href: string };
export type NavSection = { title: string; items: NavItem[] };

export const docsNav: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Overview", href: "/docs" },
      { title: "Run locally", href: "/docs/run-locally" },
      { title: "Quickstart", href: "/docs/quickstart" }
    ]
  },
  {
    title: "Concepts",
    items: [
      { title: "Topics, Groups, Owners", href: "/docs/concepts/topics-groups-owners" },
      { title: "Leases & Redelivery", href: "/docs/concepts/leases-redelivery" },
      { title: "Retries & DLQ", href: "/docs/concepts/retries-dlq" },
      { title: "Idempotency", href: "/docs/concepts/idempotency" }
    ]
  },
  {
    title: "API",
    items: [
      { title: "HTTP Endpoints", href: "/docs/api/http" },
      { title: "Message Envelope", href: "/docs/api/envelope" }
    ]
  },
  {
    title: "Observability",
    items: [{ title: "Metrics", href: "/docs/observability/metrics" }]
  },
  {
    title: "Project",
    items: [{ title: "Roadmap", href: "/docs/roadmap" }]
  }
];
