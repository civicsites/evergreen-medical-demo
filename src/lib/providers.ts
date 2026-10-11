export type Provider = {
  id: string;
  name: string;
  credentials: string;
  role: string;
  specialty: string;
  bio: string;
  education: string;
  image: string;
  fictional: true;
};

export const providers: Provider[] = [
  {
    id: "chen",
    name: "Dr. Elena Chen, MD",
    credentials: "Board-Certified Family Medicine",
    role: "Medical Director (Fictional Example)",
    specialty: "Family Medicine",
    bio: "Dr. Chen focuses on whole-person primary care, preventive wellness, and long-term partnerships with patients and families. This profile is a fictional demonstration only.",
    education: "Fictional University School of Medicine · Residency, Riverside Family Medicine",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
    fictional: true,
  },
  {
    id: "okonkwo",
    name: "Dr. Marcus Okonkwo, DO",
    credentials: "Board-Certified Psychiatry",
    role: "Psychiatry Lead (Fictional Example)",
    specialty: "Psychiatry",
    bio: "Dr. Okonkwo provides thoughtful psychiatric evaluations and collaborative medication management with an emphasis on anxiety, mood, and attention concerns. Fictional provider for demo purposes.",
    education: "Fictional College of Osteopathic Medicine · Fellowship, Integrative Psychiatry",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    fictional: true,
  },
  {
    id: "rivera",
    name: "Jordan Rivera, PMHNP-BC",
    credentials: "Psychiatric Mental Health Nurse Practitioner",
    role: "Telehealth & Psychiatry (Fictional Example)",
    specialty: "Psychiatry · Telehealth",
    bio: "Jordan supports virtual and in-office mental health visits, ADHD assessments, and follow-up care planning. This is a sample profile for website demonstration.",
    education: "Fictional School of Nursing · MSN, Psychiatric Mental Health",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    fictional: true,
  },
];
