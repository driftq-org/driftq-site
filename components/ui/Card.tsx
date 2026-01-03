import { ReactNode } from "react";

const Card = (props: { title: string; children: ReactNode }) => (
  <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
    <div className="text-sm font-semibold text-black/70">{props.title}</div>
    <div className="mt-3 text-base text-black">{props.children}</div>
  </div>
);

export default Card;
