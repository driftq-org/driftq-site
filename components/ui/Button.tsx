import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950";

const styles = {
  primary:
    "bg-zinc-950 text-white hover:bg-zinc-900 focus-visible:ring-zinc-950 shadow-soft " +
    "dark:bg-white dark:text-zinc-950 dark:hover:bg-white/90 dark:focus-visible:ring-white",

  secondary:
    "border border-black/10 bg-white text-zinc-950 hover:border-black/20 hover:bg-black/5 focus-visible:ring-zinc-950 " +
    "dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/20 dark:focus-visible:ring-white",

  ghost:
    "bg-transparent text-zinc-950 hover:bg-black/5 focus-visible:ring-zinc-950 " +
    "dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-white",
} as const;

const Button = (props: Props) => {
  const variant = props.variant ?? "primary";
  const cls = `${base} ${styles[variant]} ${props.className ?? ""}`;

  if (props.href) {
    return (
      <Link href={props.href} className={cls}>
        {props.children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} className={cls} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
