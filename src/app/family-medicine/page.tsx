import type { Metadata } from "next";
import {
  Activity,
  ClipboardList,
  Heart,
  Pill,
  Stethoscope,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { FeatureList } from "@/components/ui/FeatureList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Family Medicine",
  description:
    "Demonstration family medicine services including wellness exams, preventive care, and chronic disease management.",
};

const features = [
  {
    title: "Annual wellness exams",
    description:
      "Sample content for age-appropriate screenings, health goals, and preventive planning with your primary care clinician.",
    icon: Heart,
  },
  {
    title: "Preventive medicine",
    description:
      "Immunizations, lifestyle counseling, and risk assessment presented in patient-friendly language for demo purposes.",
    icon: Activity,
  },
  {
    title: "Routine physicals",
    description:
      "School, sports, and employment physicals — illustrated as part of a comprehensive primary care offering.",
    icon: Stethoscope,
  },
  {
    title: "Chronic disease management",
    description:
      "Ongoing support for conditions such as hypertension and diabetes, with care plans and follow-up scheduling.",
    icon: Pill,
  },
  {
    title: "Primary care services",
    description:
      "Same-day sick visits, referrals, and care coordination — fictional services for layout demonstration.",
    icon: ClipboardList,
  },
];

export default function FamilyMedicinePage() {
  return (
    <>
      <PageHero
        title="Family Medicine"
        subtitle="Compassionate primary care for every chapter of life — demonstration content for prospective medical clients."
        image={images.familyMedicine}
        imageAlt="Healthcare provider with stethoscope in a clinical setting"
        primaryCta={{ label: "Request Appointment", href: "/appointments" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          eyebrow={site.shortName}
          title="Primary care that puts you first"
          description="This page models how a family medicine practice can explain core services with clarity, warmth, and strong calls to action."
        />
        <FeatureList items={features} />
        <div className="mt-12 rounded-2xl bg-cream p-8">
          <p className="text-sm text-muted">
            All services described here are fictional examples for the {site.studio}{" "}
            portfolio. They do not represent actual clinical offerings.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="/appointments">Schedule a demo visit</Button>
            <Button href="/new-patients" variant="outline">
              New patient guide
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
