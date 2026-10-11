import type { Metadata } from "next";
import { AppointmentScheduler } from "@/components/appointments/AppointmentScheduler";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Appointments",
  description:
    "Interactive demonstration appointment scheduler for Evergreen Family Medicine & Psychiatry. No data is collected.",
};

export default function AppointmentsPage() {
  return (
    <>
      <PageHero
        title="Request Appointment"
        subtitle="Try the interactive scheduling demonstration — select a service, visit type, and simulated date."
        image={images.hero}
        imageAlt="Scheduling and calendar concept in healthcare setting"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="Scheduling demo"
          title="Book a demonstration visit"
          description={`This tool is part of the ${site.studio} portfolio. It simulates confirmation messages only and does not create real appointments.`}
          align="center"
        />
        <AppointmentScheduler />
      </section>
    </>
  );
}
