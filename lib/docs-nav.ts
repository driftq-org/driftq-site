export type NavItem = { title: string; href: string };
export type NavSection = { title: string; items: NavItem[] };

const slash = (href: string) => {
  // leave external links / anchors / mailto alone
  if (!href.startsWith("/")) {
    return href;
  }

  if (href === "/") {
    return href;
  }

  if (href.endsWith("/")) {
    return href;
  }

  // don't touch file paths like /favicon.ico
  if (href.includes(".")) {
    return href;
  }

  return href + "/";
};

const rawDocsNav: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Overview", href: "/docs" },
      { title: "Run locally", href: "/docs/run-locally" },
      { title: "Quickstart", href: "/docs/quickstart" },
      { title: "Use Cases", href: "/docs/use-cases" }
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

export const docsNav: NavSection[] = rawDocsNav.map((sec) => ({
  ...sec,
  items: sec.items.map((it) => ({ ...it, href: slash(it.href) }))
}));