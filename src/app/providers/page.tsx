import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProviderCard } from "@/components/ProviderCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { providers } from "@/lib/providers";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Providers",
  description:
    "Fictional medical provider profiles demonstrating professional team pages for Evergreen Family Medicine & Psychiatry.",
};

export default function ProvidersPage() {
  return (
    <>
      <PageHero
        title="Our Providers"
        subtitle="Experienced clinicians dedicated to integrated care — all profiles below are fictional examples for this demonstration."
        image={images.providers}
        imageAlt="Medical team in professional attire"
        primaryCta={{ label: "Request Appointment", href: "/appointments" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="Clinical team"
          title="Meet the Evergreen team"
          description="Each card includes credentials, specialty focus, and a prominent fictional-example label for transparency."
        />
        <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          <strong>Important:</strong> Dr. Elena Chen, Dr. Marcus Okonkwo, and Jordan Rivera
          are not real people and do not practice at any actual facility. Photos are stock
          images for design demonstration.
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {providers.map((p) => (
            <ProviderCard key={p.id} provider={p} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted">
            Ready to preview the scheduling experience for {site.studio}?
          </p>
          <div className="mt-4">
            <Button href="/appointments">Request Appointment</Button>
          </div>
        </div>
      </section>
    </>
  );
}
