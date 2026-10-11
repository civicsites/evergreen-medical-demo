import type { Metadata } from "next";
import { FileText, IdCard, Shield } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { BulletList } from "@/components/ui/FeatureList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "New Patients",
  description:
    "Demonstration new patient information including what to expect, sample insurance details, and preparation tips.",
};

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        title="New Patients"
        subtitle="What to expect before your first visit — sample policies and preparation guides for this demo site."
        image={images.waitingRoom}
        imageAlt="Bright, welcoming medical waiting area"
        primaryCta={{ label: "Request Appointment", href: "/appointments" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <SectionHeading
                eyebrow="First visit"
                title="What to expect"
                description="Illustrative patient journey from check-in to follow-up."
              />
              <BulletList
                items={[
                  "Arrive 15 minutes early to review fictional intake forms (demo only).",
                  "Meet your clinician for a comprehensive history and goal-setting conversation.",
                  "Receive a sample care plan summary — not stored on this website.",
                  "Schedule follow-up or telehealth visits via the demonstration booking tool.",
                ]}
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="Coverage"
                title="Insurance information (sample)"
                description="Placeholder payer list for design demonstration — verify real coverage with your actual insurer."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Demo Health Plan",
                  "Sample PPO Network",
                  "Fictional Medicare Advantage",
                  "Example Medicaid MCO",
                  "Placeholder HMO Partners",
                  "Self-pay & sliding scale (demo copy)",
                ].map((plan) => (
                  <div
                    key={plan}
                    className="rounded-xl border border-navy/10 bg-cream px-4 py-3 text-sm font-medium text-navy"
                  >
                    {plan}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Prepare" title="Appointment preparation" />
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    icon: IdCard,
                    title: "Bring ID",
                    text: "Sample reminder to bring photo ID and insurance card to a real visit.",
                  },
                  {
                    icon: FileText,
                    title: "Medication list",
                    text: "Include doses and pharmacy information for accurate review.",
                  },
                  {
                    icon: Shield,
                    title: "Questions ready",
                    text: "Write down symptoms, timelines, and goals for your visit.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm"
                  >
                    <item.icon className="h-7 w-7 text-teal" aria-hidden />
                    <h3 className="font-display mt-3 font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-2xl border border-navy/10 bg-navy p-6 text-white md:p-8 h-fit">
            <h2 className="font-display text-xl font-semibold">Sample patient policies</h2>
            <ul className="mt-4 space-y-4 text-sm text-white/85 leading-relaxed">
              <li>
                <strong className="text-white">Cancellations:</strong> 24-hour notice requested
                (fictional policy for demo layout).
              </li>
              <li>
                <strong className="text-white">Records:</strong> This site does not store medical
                records or transmit PHI.
              </li>
              <li>
                <strong className="text-white">Payments:</strong> No payment processing is
                enabled on this demonstration.
              </li>
              <li>
                <strong className="text-white">Privacy:</strong> Not HIPAA-compliant — portfolio
                sample only by {site.studio}.
              </li>
            </ul>
            <div className="mt-8">
              <Button href="/contact" variant="primary" className="w-full justify-center">
                Contact (demo)
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
