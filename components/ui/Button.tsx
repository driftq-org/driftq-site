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
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const styles = {
  primary: "bg-black text-white hover:bg-black/90 focus-visible:ring-black shadow-soft",
  secondary: "bg-white text-black border border-black/10 hover:border-black/20 hover:bg-black/5 focus-visible:ring-black",
  ghost: "bg-transparent text-black hover:bg-black/5 focus-visible:ring-black"
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
}

export default Button;
