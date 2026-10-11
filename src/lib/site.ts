export const site = {
  name: "Evergreen Family Medicine & Psychiatry",
  shortName: "Evergreen Medical",
  tagline: "Your Health. Your Mind. Our Priority.",
  description:
    "Fictional demonstration website showcasing family medicine and psychiatry services. Created by Civic Sites Studio for design portfolio purposes.",
  studio: "Civic Sites Studio",
  copyrightYear: 2026,
  demoNotice:
    "This is a fictional demonstration website. It is not a real healthcare provider and does not collect personal health information.",
} as const;

export const contact = {
  phone: "(555) 482-0193",
  fax: "(555) 482-0194",
  email: "hello@evergreen-demo.example",
  address: {
    line1: "1240 Cedar Ridge Parkway",
    line2: "Suite 200",
    city: "Maple Grove",
    state: "OR",
    zip: "97201",
  },
  hours: [
    { days: "Monday – Thursday", time: "8:00 AM – 6:00 PM" },
    { days: "Friday", time: "8:00 AM – 4:00 PM" },
    { days: "Saturday", time: "9:00 AM – 12:00 PM (Family Medicine only)" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/family-medicine", label: "Family Medicine" },
  { href: "/psychiatry", label: "Psychiatry" },
  { href: "/telehealth", label: "Telehealth" },
  { href: "/providers", label: "Our Providers" },
  { href: "/new-patients", label: "New Patients" },
  { href: "/appointments", label: "Appointments" },
  { href: "/contact", label: "Contact" },
] as const;

export const images = {
  hero:
    "https://images.unsplash.com/photo-1631217868264-e5b1bb5e4abb?auto=format&fit=crop&w=2400&q=80",
  familyMedicine:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
  psychiatry:
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80",
  telehealth:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
  providers:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1600&q=80",
  waitingRoom:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
  consultation:
    "https://images.unsplash.com/photo-1666214280391-d20748ebd03c?auto=format&fit=crop&w=1600&q=80",
} as const;
