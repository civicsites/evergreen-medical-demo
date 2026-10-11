import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Laptop, Lock, Wifi } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { BulletList } from "@/components/ui/FeatureList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Telehealth",
  description:
    "Demonstration telehealth information including how virtual visits work, benefits, and appointment options.",
};

export default function TelehealthPage() {
  return (
    <>
      <PageHero
        title="Telehealth"
        subtitle="Convenient virtual visits for eligible psychiatry and follow-up care — sample educational content only."
        image={images.telehealth}
        imageAlt="Telehealth video consultation on a computer"
        primaryCta={{ label: "Book a demo appointment", href: "/appointments" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Virtual care"
              title="How telehealth works"
              description="A step-by-step overview suitable for real practices, shown here with fictional details."
            />
            <ol className="space-y-4">
              {[
                "Request a telehealth appointment using the demonstration scheduler.",
                "Receive a sample confirmation message with fictional login instructions.",
                "Join from a private location with a stable internet connection and charged device.",
                "Meet with a fictional provider for a simulated visit experience.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4 rounded-xl bg-cream p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-muted leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={images.consultation}
              alt="Clinician on video call with patient"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Benefits"
            title="Why patients choose online visits"
            light
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Save travel time",
                text: "Sample benefit copy for busy families and professionals.",
              },
              {
                icon: Wifi,
                title: "Flexible scheduling",
                text: "Demonstration midday and early evening slot language.",
              },
              {
                icon: Lock,
                title: "Private setting",
                text: "Reminder to use a quiet space — not a claim of regulatory compliance.",
              },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <b.icon className="h-8 w-8 text-teal-light" aria-hidden />
                <h3 className="font-display mt-4 text-xl font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Appointment options"
              title="When telehealth may be offered"
              description="Fictional eligibility examples for layout purposes."
            />
            <BulletList
              items={[
                "Psychiatry follow-up visits (demonstration)",
                "Medication management check-ins (demonstration)",
                "Selected family medicine follow-ups (demonstration)",
                "Not intended for emergency or crisis care",
              ]}
            />
          </div>
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <Laptop className="h-10 w-10 text-teal" aria-hidden />
            <h3 className="font-display mt-4 text-xl font-semibold text-navy">
              Technical tips (sample)
            </h3>
            <BulletList
              items={[
                "Use Chrome, Safari, or Edge on a current device",
                "Headphones recommended for privacy",
                "Have a list of current medications ready",
                "This demo does not connect to a real video platform",
              ]}
            />
            <div className="mt-8">
              <Button href="/appointments">{site.shortName} — Request Appointment</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
