import type { Course } from "@/types/course";

export const law: Course = {
  slug: "law",
  name: "Law",
  category: "INTEGRATED, UNDERGRADUATE & POSTGRADUATE PROGRAMS",
  headline: "Argue, advise and lead with justice",
  accentWords: 2,
  intro:
    "Explore integrated and three-year law degrees, understand entrance exams like CLAT, and get guidance on choosing the right law school for your goals.",
  image: { src: "/courses/law.jpg", alt: "Law books and a gavel on a desk" },
  seo: {
    title: "Law Courses - BA LLB, BBA LLB, LLB, LLM Admission Guidance",
    description:
      "Explore BA LLB, BBA LLB, B.Com LLB, 3-year LLB and LLM programmes, CLAT and AILET entrance exams, eligibility and legal career paths in India.",
  },

  overview: {
    what: "Law programmes teach how legal systems work - how laws are made, interpreted and applied - and prepare you to advise clients, argue cases and work across business, government and public policy. Legal education leading to practice in India is regulated by the Bar Council of India (BCI).",
    learn:
      "You study core areas of law alongside reading, writing, research and advocacy skills. Moot courts, legal aid clinics and internships with advocates, law firms and companies give you practical experience.",
    subjects: [
      "Constitutional Law",
      "Law of Contracts",
      "Criminal Law & Procedure",
      "Law of Torts",
      "Family Law",
      "Corporate & Company Law",
      "Jurisprudence",
      "Legal Research & Moot Court",
    ],
    whoShouldConsider: [
      "Students from any stream who enjoy reading, reasoning and debate",
      "Those interested in justice, rights, governance or business",
      "People with strong communication and writing skills",
      "Students ready to prepare for CLAT or university law tests",
    ],
    levels: {
      ug: "Five-year integrated degrees (BA LLB, BBA LLB, B.Com LLB) after Class 12, or a three-year LLB after graduation.",
      pg: "LLM (usually one year) to specialise in areas such as corporate, constitutional or criminal law.",
    },
  },

  programs: [
    {
      name: "Bachelor of Arts and Bachelor of Laws",
      degree: "BA LLB (Hons.)",
      level: "Integrated",
      duration: "5 years",
      qualification: "Class 12 in any stream",
      entrance: "CLAT, AILET or university test",
    },
    {
      name: "Bachelor of Business Administration and Bachelor of Laws",
      degree: "BBA LLB (Hons.)",
      level: "Integrated",
      duration: "5 years",
      qualification: "Class 12 in any stream",
      entrance: "CLAT or university test",
    },
    {
      name: "Bachelor of Commerce and Bachelor of Laws",
      degree: "B.Com LLB (Hons.)",
      level: "Integrated",
      duration: "5 years",
      qualification: "Class 12 (Commerce preferred by some universities)",
      entrance: "CLAT or university test",
    },
    {
      name: "Bachelor of Laws",
      degree: "LLB",
      level: "Undergraduate",
      duration: "3 years",
      qualification: "Graduation in any discipline",
      entrance: "University test or merit (varies)",
    },
    {
      name: "Master of Laws",
      degree: "LLM",
      level: "Postgraduate",
      duration: "1 year (2-year options at some universities)",
      qualification: "LLB or integrated LLB degree",
      entrance: "CLAT PG, AILET or university test",
    },
  ],

  eligibility: [
    {
      title: "Five-year integrated LLB (BA / BBA / B.Com LLB)",
      items: [
        { label: "Qualification", text: "Passed Class 12 (or equivalent) from a recognised board." },
        { label: "Subjects", text: "Any stream is accepted for most programmes; some B.Com LLB programmes prefer Commerce." },
        {
          label: "Minimum marks",
          text: "Minimum marks are prescribed under Bar Council of India rules and by each university, and differ by category. Check the exam brochure and university notice for the current year.",
        },
        { label: "Age", text: "There is currently no upper age limit for CLAT UG; check the latest BCI and exam notifications." },
        { label: "Entrance", text: "CLAT for National Law Universities, AILET for NLU Delhi, and CLAT or the university's own test at private universities." },
      ],
    },
    {
      title: "Three-year LLB",
      items: [
        { label: "Qualification", text: "A bachelor's degree in any discipline from a recognised university." },
        { label: "Minimum marks", text: "As prescribed by BCI rules and the university - varies by category." },
        { label: "Entrance", text: "University entrance test or merit-based admission, depending on the university." },
      ],
    },
    {
      title: "LLM",
      items: [
        { label: "Qualification", text: "An LLB (three-year or integrated) from a recognised university." },
        { label: "Entrance", text: "CLAT PG, AILET PG or a university-specific test." },
      ],
    },
  ],

  exams: [
    { id: "clat", who: "Class 12 students aiming for integrated LLB at NLUs or private universities that accept CLAT; LLB graduates for LLM." },
    { id: "ailet", who: "Students who specifically want to apply to National Law University, Delhi." },
    { id: "university", who: "Applicants to private law schools that run their own entrance test, interview or merit-based admission." },
  ],

  careers: [
    { title: "Advocate / Litigator", text: "Represent clients in courts after enrolling with a State Bar Council and clearing the All India Bar Examination." },
    { title: "Corporate Lawyer", text: "Advise companies on contracts, transactions, compliance and disputes." },
    { title: "Legal Advisor / In-house Counsel", text: "Handle legal matters for businesses, banks and organisations." },
    { title: "Judicial Services", text: "Prepare for state judicial service examinations to become a civil judge." },
    { title: "Legal Researcher / Policy Analyst", text: "Work with think tanks, NGOs or government on law and policy." },
    { title: "Legal Journalist / Content Professional", text: "Report and write on legal developments for media and publishers." },
  ],
  higherStudies: ["LLM", "PhD in Law", "Postgraduate diplomas (IPR, Cyber Law, ADR)", "Company Secretary (CS)", "Study abroad (LLM)"],

  faqs: [
    {
      q: "Can I study law after 12th?",
      a: "Yes. Five-year integrated programmes such as BA LLB, BBA LLB and B.Com LLB are open to Class 12 students from any stream at most universities.",
    },
    {
      q: "What is the difference between a 5-year and a 3-year LLB?",
      a: "The 5-year integrated LLB combines a bachelor's degree with law and is taken after Class 12. The 3-year LLB is for students who already have a graduation degree.",
    },
    {
      q: "Is CLAT compulsory for law admission?",
      a: "CLAT is required for National Law Universities. Many private universities accept CLAT scores, but several also run their own entrance test or admit on merit.",
    },
    {
      q: "Which is better - BA LLB or BBA LLB?",
      a: "BA LLB pairs law with humanities subjects such as political science and history; BBA LLB pairs it with business and management. Choose based on whether you lean towards litigation and public law or corporate work.",
    },
    {
      q: "Can I become a judge after LLB?",
      a: "Yes. LLB graduates can appear for state judicial service examinations. Eligibility rules, such as practice requirements, are set by each state and the courts.",
    },
    {
      q: "Do I need to clear any exam to practise law?",
      a: "After your LLB, you enrol with a State Bar Council and must clear the All India Bar Examination (AIBE) conducted by the Bar Council of India to practise.",
    },
    {
      q: "What is the duration of LLM?",
      a: "LLM is usually a one-year programme in India. Some universities also offer two-year LLM options.",
    },
    {
      q: "How can Install Your Career help?",
      a: "We help you choose between programmes, plan for CLAT or university tests, and shortlist BCI-approved law schools. Admission decisions are made by the university.",
    },
  ],
};
