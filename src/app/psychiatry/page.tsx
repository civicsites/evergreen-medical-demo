import type { Metadata } from "next";
import { Brain, ClipboardCheck, MessageCircle, Pill, Sparkles } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { FeatureList } from "@/components/ui/FeatureList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Psychiatry",
  description:
    "Demonstration psychiatry services including evaluations, anxiety and depression care, ADHD assessments, and medication management.",
};

const features = [
  {
    title: "Psychiatric evaluations",
    description:
      "Sample intake process describing comprehensive assessment, diagnosis discussion, and collaborative treatment planning.",
    icon: ClipboardCheck,
  },
  {
    title: "Anxiety and depression",
    description:
      "Demonstration copy for evidence-informed care pathways, follow-up intervals, and coordination with therapy providers.",
    icon: MessageCircle,
  },
  {
    title: "ADHD assessments",
    description:
      "Structured evaluation overview for adults and adolescents — fictional workflow for website presentation only.",
    icon: Sparkles,
  },
  {
    title: "Medication management",
    description:
      "Ongoing medication reviews, side-effect monitoring, and shared decision-making illustrated for demo visitors.",
    icon: Pill,
  },
  {
    title: "Mental health consultations",
    description:
      "Consultative visits for second opinions, treatment transitions, and care team collaboration (sample content).",
    icon: Brain,
  },
];

export default function PsychiatryPage() {
  return (
    <>
      <PageHero
        title="Psychiatry"
        subtitle="Thoughtful mental health care with respect, privacy, and partnership — fictional demonstration content."
        image={images.psychiatry}
        imageAlt="Professional in a calm office setting representing mental health care"
        primaryCta={{ label: "Request Appointment", href: "/appointments" }}
        secondaryCta={{ label: "Telehealth options", href: "/telehealth" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="Mental health"
          title="Support for your emotional well-being"
          description="Psychiatry pages benefit from reassuring tone and clear expectations. This demonstration balances clinical credibility with approachable language."
        />
        <FeatureList items={features} />
        <p className="mt-10 rounded-xl border border-navy/10 bg-white p-6 text-sm text-muted">
          {site.demoNotice} If you or someone you know is in crisis, contact local emergency
          services or a real crisis helpline — this demo site cannot provide clinical help.
        </p>
        <div className="mt-8">
          <Button href="/providers">Meet our psychiatry team (fictional)</Button>
        </div>
      </section>
    </>
  );
}
