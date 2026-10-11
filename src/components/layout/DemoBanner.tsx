import { Info } from "lucide-react";
import { site } from "@/lib/site";

export function DemoBanner() {
  return (
    <div
      role="status"
      className="bg-amber-50 border-b border-amber-200/80 px-4 py-2.5 text-center text-sm text-amber-950"
    >
      <p className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2">
        <Info className="h-4 w-4 shrink-0 text-amber-700" aria-hidden />
        <span>
          <strong>Demonstration website</strong> — {site.demoNotice} Created by{" "}
          {site.studio}.
        </span>
      </p>
    </div>
  );
}
