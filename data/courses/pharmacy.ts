import type { Course } from "@/types/course";

export const pharmacy: Course = {
  slug: "pharmacy",
  name: "Pharmacy",
  category: "DIPLOMA, UNDERGRADUATE & POSTGRADUATE PROGRAMS",
  headline: "Master the science of medicines",
  accentWords: 1,
  intro:
    "Discover pharmacy programmes from D.Pharm to M.Pharm, understand eligibility and entrance routes, and get guidance on building a career in pharmaceutical sciences.",
  image: { src: "/courses/pharmacy.jpg", alt: "Pharmacy student working with medicines in a laboratory" },
  seo: {
    title: "Pharmacy Courses - B.Pharm, D.Pharm, Pharm.D & M.Pharm Admission",
    description:
      "Explore D.Pharm, B.Pharm, Pharm.D and M.Pharm programmes, PCI-based eligibility, entrance exams like GPAT, career paths and admission guidance.",
  },

  overview: {
    what: "Pharmacy is the science of discovering, developing, making and safely dispensing medicines. Pharmacy education in India is regulated by the Pharmacy Council of India (PCI), and registration as a pharmacist requires a PCI-approved qualification.",
    learn:
      "You learn how drugs are formulated, how they act on the body, how quality is tested and how medicines are used safely. Training combines classroom study with laboratory practicals and practical exposure in hospitals or industry.",
    subjects: [
      "Pharmaceutics",
      "Pharmaceutical Chemistry",
      "Pharmacology",
      "Pharmacognosy",
      "Human Anatomy & Physiology",
      "Pharmaceutical Analysis",
      "Biopharmaceutics",
      "Hospital & Clinical Pharmacy",
    ],
    whoShouldConsider: [
      "Science students (PCB or PCM) interested in chemistry and biology",
      "Those curious about how medicines are made and how they work",
      "Students interested in healthcare without direct surgical practice",
      "People who want options across industry, hospitals, research or their own pharmacy",
    ],
    levels: {
      ug: "D.Pharm (2 years) or B.Pharm (4 years) after Class 12; Pharm.D (6 years) for a clinical pharmacy route.",
      pg: "M.Pharm (2 years) after B.Pharm in specialisations like Pharmaceutics, Pharmacology and Quality Assurance.",
    },
  },

  programs: [
    {
      name: "Diploma in Pharmacy",
      degree: "D.Pharm",
      level: "Diploma",
      duration: "2 years + practical training",
      qualification: "Class 12 with Physics, Chemistry and Biology or Mathematics",
      entrance: "Merit or state / university test (varies)",
    },
    {
      name: "Bachelor of Pharmacy",
      degree: "B.Pharm",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 with Physics, Chemistry and Biology or Mathematics, plus English",
      entrance: "State CET, CUET UG or university test",
    },
    {
      name: "Bachelor of Pharmacy (Lateral Entry)",
      degree: "B.Pharm (LE)",
      level: "Undergraduate",
      duration: "3 years (joins in 2nd year)",
      qualification: "D.Pharm from a PCI-approved institution",
      entrance: "State / university process",
    },
    {
      name: "Doctor of Pharmacy",
      degree: "Pharm.D",
      level: "Integrated",
      duration: "6 years incl. 1-year internship",
      qualification: "Class 12 with Physics, Chemistry and Biology or Mathematics, or D.Pharm",
      entrance: "State CET or university test",
    },
    {
      name: "M.Pharm Pharmaceutics",
      degree: "M.Pharm",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "B.Pharm from a PCI-approved institution",
      entrance: "GPAT or university test",
    },
    {
      name: "M.Pharm Pharmacology",
      degree: "M.Pharm",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "B.Pharm from a PCI-approved institution",
      entrance: "GPAT or university test",
    },
    {
      name: "M.Pharm Pharmaceutical Chemistry / Quality Assurance",
      degree: "M.Pharm",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "B.Pharm from a PCI-approved institution",
      entrance: "GPAT or university test",
    },
  ],

  eligibility: [
    {
      title: "D.Pharm / B.Pharm / Pharm.D",
      items: [
        { label: "Qualification", text: "Passed Class 12 (or equivalent) from a recognised board." },
        { label: "Subjects", text: "Physics and Chemistry, with Biology or Mathematics. English is usually required for B.Pharm." },
        {
          label: "Minimum marks",
          text: "Minimum marks, if any, are set by the Pharmacy Council of India, the state and the university, and can differ by category. Check the current admission notice.",
        },
        { label: "Age", text: "A minimum age applies for some programmes, such as Pharm.D - see the university notice." },
        { label: "Entrance", text: "State CETs, CUET UG or the university's own test, depending on the state and university." },
      ],
    },
    {
      title: "M.Pharm",
      items: [
        { label: "Qualification", text: "B.Pharm from a PCI-approved institution." },
        { label: "Registration", text: "Some universities ask for registration with a State Pharmacy Council." },
        { label: "Entrance", text: "GPAT score or the university's own entrance test and interview." },
      ],
    },
  ],

  exams: [
    { id: "state-cet", who: "Students seeking B.Pharm or Pharm.D seats through state counselling." },
    { id: "cuet-ug", who: "Students applying to universities that accept CUET UG for B.Pharm." },
    { id: "university", who: "Students applying directly to private universities with their own admission process." },
    { id: "gpat", who: "B.Pharm graduates applying for M.Pharm admission." },
  ],

  careers: [
    { title: "Registered Pharmacist", text: "Dispense medicines and counsel patients in hospitals or community pharmacies." },
    { title: "Clinical Pharmacist", text: "Work with doctors on safe and effective drug therapy (especially after Pharm.D)." },
    { title: "Production & Quality Professional", text: "Manufacture medicines and test their quality in the pharmaceutical industry." },
    { title: "Drug Regulatory Affairs", text: "Help companies meet the rules for approving and marketing medicines." },
    { title: "Pharmacovigilance / Clinical Research", text: "Monitor drug safety and support clinical trials." },
    { title: "Medical Representative / Pharma Marketing", text: "Bridge pharmaceutical companies and healthcare professionals." },
  ],
  higherStudies: ["M.Pharm", "MBA (Pharmaceutical Management)", "MS abroad", "PhD in Pharmaceutical Sciences", "Drug Inspector exams"],

  faqs: [
    {
      q: "What is the difference between D.Pharm, B.Pharm and Pharm.D?",
      a: "D.Pharm is a 2-year diploma that qualifies you to register as a pharmacist. B.Pharm is a 4-year degree with wider industry and research options. Pharm.D is a 6-year clinical programme focused on patient care in hospitals.",
    },
    {
      q: "Can I do B.Pharm with Mathematics instead of Biology?",
      a: "Yes. B.Pharm generally accepts Class 12 students with Physics and Chemistry plus either Biology or Mathematics. Confirm with the university's admission notice.",
    },
    {
      q: "Is NEET required for pharmacy?",
      a: "NEET is generally not required for pharmacy. Admission is usually through state CETs, CUET UG, a university's own test or merit, depending on the state and university.",
    },
    {
      q: "Why is PCI approval important?",
      a: "Registration as a pharmacist requires a qualification from a Pharmacy Council of India approved institution. Always check the institution's approval status for the current year.",
    },
    {
      q: "Can D.Pharm students join B.Pharm?",
      a: "Yes. D.Pharm holders can join B.Pharm directly in the second year through lateral entry at many universities.",
    },
    {
      q: "What is GPAT used for?",
      a: "GPAT is a national test for B.Pharm graduates used for M.Pharm admission and related scholarships. Some universities also run their own M.Pharm entrance.",
    },
    {
      q: "How can Install Your Career help?",
      a: "We help you choose between D.Pharm, B.Pharm and Pharm.D, check approval status, understand entrance options and complete applications. Admission decisions are made by the universities.",
    },
  ],
};
