import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureList({ items }: { items: FeatureItem[] }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage/15 text-sage">
            <item.icon className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
            <p className="mt-2 text-muted leading-relaxed">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-teal" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
