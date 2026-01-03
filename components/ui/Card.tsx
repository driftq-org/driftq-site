import { ReactNode } from "react";

const Card = (props: { title: string; children: ReactNode }) => (
  <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-zinc-950">
    <div className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">{props.title}</div>
    <div className="mt-3 text-base text-zinc-950 dark:text-zinc-100">{props.children}</div>
  </div>
);

export default Card;
