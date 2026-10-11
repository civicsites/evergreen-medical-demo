import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact, images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Fictional contact information and office hours for the Evergreen Family Medicine & Psychiatry demonstration website.",
};

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(
    `${contact.address.line1}, ${contact.address.city}, ${contact.address.state}`,
  );

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Sample office hours and fictional contact details for this Civic Sites Studio demonstration."
        image={images.waitingRoom}
        imageAlt="Medical office reception area"
        primaryCta={{ label: "Request Appointment", href: "/appointments" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Contact information"
              description="All phone numbers, emails, and addresses on this page are placeholders."
            />
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone className="h-6 w-6 shrink-0 text-teal" aria-hidden />
                <div>
                  <p className="font-semibold text-navy">Phone (fictional)</p>
                  <a
                    href={`tel:${contact.phone.replace(/\D/g, "")}`}
                    className="text-muted hover:text-teal"
                  >
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="h-6 w-6 shrink-0 text-teal" aria-hidden />
                <div>
                  <p className="font-semibold text-navy">Email (fictional)</p>
                  <a href={`mailto:${contact.email}`} className="text-muted hover:text-teal">
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="h-6 w-6 shrink-0 text-teal" aria-hidden />
                <div>
                  <p className="font-semibold text-navy">Address (demonstration)</p>
                  <address className="not-italic text-muted leading-relaxed">
                    {contact.address.line1}
                    <br />
                    {contact.address.line2}
                    <br />
                    {contact.address.city}, {contact.address.state} {contact.address.zip}
                  </address>
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <Button href="/appointments">Request Appointment</Button>
            </div>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Clock className="h-7 w-7 text-teal" aria-hidden />
              <h2 className="font-display text-2xl font-semibold text-navy">Office hours</h2>
            </div>
            <table className="mt-6 w-full text-left text-sm">
              <caption className="sr-only">Sample office hours</caption>
              <tbody>
                {contact.hours.map((row) => (
                  <tr key={row.days} className="border-b border-navy/10 last:border-0">
                    <th scope="row" className="py-3 pr-4 font-semibold text-navy">
                      {row.days}
                    </th>
                    <td className="py-3 text-muted">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Location"
            title="Demonstration location"
            description="Map embed placeholder — coordinates and facility are fictional."
          />
          <div className="overflow-hidden rounded-2xl border border-navy/10 bg-cream">
            <iframe
              title="Fictional demonstration map near Maple Grove, Oregon"
              className="h-72 w-full grayscale opacity-90 md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-122.72%2C45.48%2C-122.64%2C45.52&layer=mapnik&marker=45.5%2C-122.68`}
            />
            <p className="px-4 py-3 text-xs text-muted">
              Sample map for {site.name}. Not an actual clinic location.{" "}
              <a
                href={`https://www.openstreetmap.org/search?query=${mapsQuery}`}
                className="text-teal hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on OpenStreetMap
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
