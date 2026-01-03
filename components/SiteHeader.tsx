// import Button from "@/components/ui/Button";
// import Link from "next/link";
// import Image from "next/image";
// import ThemeToggle from "@/components/theme-toggle";
// import { site } from "@/lib/site";

// const linkCls =
//   "rounded-lg px-2 py-1 text-sm transition " +
//   "text-zinc-600 hover:text-zinc-900 hover:bg-black/5 " +
//   "dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/10";

// const SiteHeader = () => (
//   <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-zinc-950/70">
//     <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
//       <Link href="/" className="flex items-center gap-2">
//       <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-black dark:bg-white">
//         <Image
//           src="/logo.png"
//           alt="DriftQ logo"
//           fill
//           className="object-cover dark:invert"
//           priority
//         />
//       </div>

//         <div className="font-semibold">{site.name}</div>
//       </Link>

//       <nav className="hidden items-center gap-2 md:flex">
//         <Link href="/docs" className={linkCls}>
//           Docs
//         </Link>
//         <Link href="/docs/observability/metrics" className={linkCls}>
//           Metrics
//         </Link>
//         <Link href="/docs/roadmap" className={linkCls}>
//           Roadmap
//         </Link>
//         <a href={site.githubUrl} className={linkCls} target="_blank" rel="noreferrer">
//           GitHub
//         </a>
//       </nav>

//       <div className="flex items-center gap-2">
//         <ThemeToggle />

//         <Button href="/docs" variant="secondary" className="hidden sm:inline-flex">
//           Read the docs
//         </Button>
//         <Button href={site.githubUrl} className="hidden sm:inline-flex">
//           View on GitHub
//         </Button>
//         <Button href="/docs" className="sm:hidden" variant="primary">
//           Docs
//         </Button>
//       </div>
//     </div>
//   </header>
// );

// export default SiteHeader;



import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
import { site } from "@/lib/site";

const linkCls =
  "rounded-lg px-2 py-1 text-sm transition " +
  "text-zinc-600 hover:text-zinc-900 hover:bg-black/5 " +
  "dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/10";

const SiteHeader = () => (
  <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-zinc-950/70">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <Link href="/" className="flex items-center gap-2">
        <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-transparent">
          <Image
            src="/logo.png"
            alt="DriftQ logo"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="font-semibold">{site.name}</div>
      </Link>

      <nav className="hidden items-center gap-2 md:flex">
        <Link href="/docs" className={linkCls}>Docs</Link>
        <Link href="/docs/observability/metrics" className={linkCls}>Metrics</Link>
        <Link href="/docs/roadmap" className={linkCls}>Roadmap</Link>
        <a href={site.githubUrl} className={linkCls} target="_blank" rel="noreferrer">GitHub</a>
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
