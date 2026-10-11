import Image from "next/image";
import {
  Brain,
  Calendar,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Users,
  Video,
} from "lucide-react";
import { ProviderCard } from "@/components/ProviderCard";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { providers } from "@/lib/providers";
import { images, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <PageHero
        large
        title={site.name}
        subtitle={site.tagline}
        image={images.hero}
        imageAlt="Healthcare professional consulting with a patient in a modern clinic"
        primaryCta={{ label: "Request Appointment", href: "/appointments" }}
        secondaryCta={{ label: "Explore Services", href: "/family-medicine" }}
      >
        <p className="mt-6 max-w-xl rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/90 backdrop-blur-sm">
          Fictional demonstration practice — showcasing integrated family medicine and
          psychiatry care for {site.studio}.
        </p>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="Welcome"
          title="Care for body and mind, under one roof"
          description="Evergreen Family Medicine & Psychiatry is a sample website illustrating how a modern practice can present warm, trustworthy primary care alongside compassionate mental health services."
        />
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={images.consultation}
              alt="Doctor speaking with patient in a bright examination room"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              From annual wellness visits to psychiatric evaluations, this demonstration
              layout helps prospective clients envision a cohesive patient experience —
              clear navigation, accessible language, and prominent paths to schedule care.
            </p>
            <p>
              Every detail on this site is fictional, including providers, phone numbers,
              and office locations. It is designed solely to showcase web design capabilities.
            </p>
            <Button href="/new-patients">New patient information</Button>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Services"
            title="Family Medicine & Psychiatry"
            description="Two complementary specialties, presented with equal clarity and care."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <ServiceCard
              title="Family Medicine"
              description="Preventive care, chronic disease support, and everyday primary care for every stage of life."
              href="/family-medicine"
              icon={Stethoscope}
            />
            <ServiceCard
              title="Psychiatry"
              description="Evaluations, therapy coordination, and medication management for mood, anxiety, and attention concerns."
              href="/psychiatry"
              icon={Brain}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="overflow-hidden rounded-3xl bg-navy text-white lg:grid lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-full">
            <Image
              src={images.telehealth}
              alt="Patient having a video visit on a laptop"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <SectionHeading
              eyebrow="Telehealth"
              title="Flexible visits from home"
              description="Sample telehealth content shows how virtual psychiatry and follow-up visits can be explained clearly — technology requirements, privacy reminders, and scheduling paths."
              light
            />
            <ul className="mb-8 space-y-3 text-white/85">
              <li className="flex gap-3">
                <Video className="h-5 w-5 shrink-0 text-teal-light" aria-hidden />
                Secure video visits for eligible follow-ups and psychiatry (demo copy)
              </li>
              <li className="flex gap-3">
                <Calendar className="h-5 w-5 shrink-0 text-teal-light" aria-hidden />
                Same-day demonstration slots in the booking preview
              </li>
            </ul>
            <Button href="/telehealth" variant="primary" className="w-fit">
              Learn about telehealth
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Our team"
            title="Meet our providers"
            description="Three fictional clinician profiles demonstrate professional layout, credentials, and clear demo labeling."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {providers.map((p) => (
              <ProviderCard key={p.id} provider={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/providers" variant="secondary">
              View all providers
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Why Evergreen"
            title="Why choose us"
            description="Sample value propositions that resonate with patients seeking integrated care."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: HeartPulse,
                title: "Whole-person care",
                text: "Primary care and mental health coordinated in one fictional practice model.",
              },
              {
                icon: Users,
                title: "Family-focused",
                text: "Demonstration copy for pediatrics through senior wellness and caregiver support.",
              },
              {
                icon: ShieldCheck,
                title: "Clear communication",
                text: "Plain-language policies, hours, and what-to-expect guides for new patients.",
              },
              {
                icon: Video,
                title: "In-person & virtual",
                text: "Flexible appointment types highlighted in the interactive scheduling demo.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-sm"
              >
                <item.icon className="mx-auto h-8 w-8 text-teal" aria-hidden />
                <h3 className="font-display mt-4 text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button href="/appointments">Request Appointment</Button>
            <Button href="/contact" variant="outline">
              Contact our office
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
