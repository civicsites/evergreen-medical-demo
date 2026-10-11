import Image from "next/image";
import type { Provider } from "@/lib/providers";

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-cream">
        <Image
          src={provider.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
          Fictional example
        </span>
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal">
          {provider.specialty}
        </p>
        <h3 className="font-display mt-1 text-2xl font-semibold text-navy">{provider.name}</h3>
        <p className="mt-1 text-sm font-medium text-muted">{provider.credentials}</p>
        <p className="mt-1 text-sm text-sage">{provider.role}</p>
        <p className="mt-4 text-muted leading-relaxed">{provider.bio}</p>
        <p className="mt-4 border-t border-navy/10 pt-4 text-sm text-muted">
          <span className="font-semibold text-navy">Education: </span>
          {provider.education}
        </p>
      </div>
    </article>
  );
}
