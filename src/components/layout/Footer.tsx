import Link from "next/link";
import { Logo } from "@/components/Logo";
import { contact, navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-navy/10 bg-navy text-white/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div className="lg:col-span-2">
          <Logo variant="light" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
            {site.tagline} This fictional practice website demonstrates modern medical
            web design for {site.studio} client presentations.
          </p>
          <p className="mt-4 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-xs text-amber-100">
            Fictional demonstration only — not a real healthcare provider. No PHI is
            collected. Not HIPAA-compliant.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-white">Quick links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/75 hover:text-teal-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-white">Sample contact</h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/75">
            <p>
              {contact.address.line1}
              <br />
              {contact.address.line2}
              <br />
              {contact.address.city}, {contact.address.state} {contact.address.zip}
            </p>
            <p>
              <a href={`tel:${contact.phone.replace(/\D/g, "")}`} className="hover:text-teal-light">
                {contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="hover:text-teal-light">
                {contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/60 md:px-6">
        <p>
          © {site.copyrightYear} {site.name} — Fictional demonstration website created by{" "}
          <span className="text-teal-light">{site.studio}</span>. All providers and
          contact details are fictional examples.
        </p>
      </div>
    </footer>
  );
}
