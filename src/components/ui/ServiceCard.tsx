import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, description, href, icon: Icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg hover:shadow-teal/10"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="font-display text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-2 flex-1 text-muted leading-relaxed">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal group-hover:gap-2 transition-all">
        Learn more
        <ArrowRight className="h-4 w-4" aria-hidden />
      </span>
    </Link>
  );
}
