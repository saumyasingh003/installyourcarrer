import type { Course } from "@/types/course";

export const medical: Course = {
  slug: "medical",
  name: "Medical",
  category: "UNDERGRADUATE & POSTGRADUATE PROGRAMS",
  headline: "Build a future in healthcare",
  accentWords: 1,
  intro:
    "Explore medical education opportunities, discover the right course and receive professional guidance throughout your admission journey.",
  image: { src: "/courses/medical.jpg", alt: "Surgical team in masks looking down under operating theatre lights" },
  seo: {
    title: "Medical Courses - MBBS, BDS, BAMS, BHMS Admission Guidance",
    description:
      "Explore MBBS, BDS, BAMS, BHMS, BUMS and BSMS programmes, NEET UG eligibility, career paths and admission guidance for medical courses in India.",
  },

  overview: {
    what: "Medical education trains you to diagnose, treat and prevent illness. In India it covers modern medicine (MBBS), dentistry (BDS) and the AYUSH systems - Ayurveda, Homoeopathy, Unani and Siddha - each regulated by its own national commission.",
    learn:
      "You study how the human body works in health and disease, then move into clinical training at a teaching hospital: examining patients, understanding investigations and learning treatment under supervision. Every programme ends with a compulsory internship.",
    subjects: [
      "Anatomy",
      "Physiology",
      "Biochemistry",
      "Pathology",
      "Pharmacology",
      "Microbiology",
      "Community Medicine",
      "General Medicine & Surgery",
    ],
    whoShouldConsider: [
      "Students with Physics, Chemistry and Biology who enjoy life sciences",
      "Those prepared for a long, demanding course and lifelong learning",
      "People who want to work directly with patients and communities",
      "Students willing to prepare seriously for NEET UG",
    ],
    levels: {
      ug: "MBBS, BDS and AYUSH degrees (BAMS, BHMS, BUMS, BSMS) after Class 12 through NEET UG.",
      pg: "MD, MS and PG Diploma after MBBS (through NEET PG); MDS after BDS; MD/MS in AYUSH streams.",
    },
  },

  programs: [
    {
      name: "Bachelor of Medicine and Bachelor of Surgery",
      degree: "MBBS",
      level: "Undergraduate",
      duration: "5.5 years incl. 1-year internship",
      qualification: "Class 12 with Physics, Chemistry, Biology and English",
      entrance: "NEET UG",
    },
    {
      name: "Bachelor of Dental Surgery",
      degree: "BDS",
      level: "Undergraduate",
      duration: "5 years incl. 1-year internship",
      qualification: "Class 12 with Physics, Chemistry, Biology and English",
      entrance: "NEET UG",
    },
    {
      name: "Bachelor of Ayurvedic Medicine and Surgery",
      degree: "BAMS",
      level: "Undergraduate",
      duration: "5.5 years incl. internship",
      qualification: "Class 12 with Physics, Chemistry and Biology",
      entrance: "NEET UG",
    },
    {
      name: "Bachelor of Homoeopathic Medicine and Surgery",
      degree: "BHMS",
      level: "Undergraduate",
      duration: "5.5 years incl. internship",
      qualification: "Class 12 with Physics, Chemistry and Biology",
      entrance: "NEET UG",
    },
    {
      name: "Bachelor of Unani Medicine and Surgery",
      degree: "BUMS",
      level: "Undergraduate",
      duration: "5.5 years incl. internship",
      qualification: "Class 12 with Physics, Chemistry and Biology (Urdu may be required)",
      entrance: "NEET UG",
    },
    {
      name: "Bachelor of Siddha Medicine and Surgery",
      degree: "BSMS",
      level: "Undergraduate",
      duration: "5.5 years incl. internship",
      qualification: "Class 12 with Physics, Chemistry and Biology",
      entrance: "NEET UG",
    },
    {
      name: "Doctor of Medicine / Master of Surgery",
      degree: "MD / MS",
      level: "Postgraduate",
      duration: "3 years",
      qualification: "MBBS with completed internship and registration",
      entrance: "NEET PG",
    },
    {
      name: "Allied Healthcare Programmes",
      degree: "B.Sc / BPT / BMLT",
      level: "Undergraduate",
      duration: "3–4.5 years (varies by programme)",
      qualification: "Class 12 with science subjects",
      entrance: "University test, CUET UG or NEET UG (varies)",
    },
  ],

  eligibility: [
    {
      title: "MBBS / BDS",
      items: [
        { label: "Qualification", text: "Passed Class 12 (or equivalent) from a recognised board." },
        { label: "Subjects", text: "Physics, Chemistry, Biology/Biotechnology and English as core subjects." },
        {
          label: "Minimum marks",
          text: "A minimum aggregate in Physics, Chemistry and Biology is prescribed by the National Medical Commission / Dental Council and differs by category. Check the current NEET UG information bulletin.",
        },
        { label: "Age", text: "A minimum age requirement applies as on 31 December of the admission year - see the NEET UG bulletin." },
        { label: "Entrance", text: "Qualifying NEET UG is compulsory for MBBS and BDS admission across India." },
        { label: "Admission", text: "Seats are allotted through MCC (All India Quota, deemed universities) or state counselling, based on NEET rank." },
      ],
    },
    {
      title: "AYUSH (BAMS, BHMS, BUMS, BSMS)",
      items: [
        { label: "Qualification", text: "Passed Class 12 with Physics, Chemistry and Biology." },
        { label: "Entrance", text: "NEET UG qualification is required; counselling is run by AACCC and state authorities." },
        { label: "Additional", text: "Some BUMS programmes require knowledge of Urdu - check the university's notice." },
      ],
    },
  ],

  exams: [
    { id: "neet-ug", who: "Every student applying for MBBS, BDS or AYUSH programmes after Class 12." },
    { id: "neet-pg", who: "MBBS graduates who want to specialise through MD, MS or PG Diploma." },
  ],

  careers: [
    { title: "Medical Doctor", text: "Practise as a registered medical practitioner in hospitals, clinics or community health." },
    { title: "Surgeon", text: "After an MS in a surgical specialty, perform and lead surgical care." },
    { title: "Dental Surgeon", text: "Diagnose and treat oral health conditions in clinics and hospitals (BDS/MDS)." },
    { title: "AYUSH Practitioner", text: "Practise Ayurveda, Homoeopathy, Unani or Siddha medicine." },
    { title: "Medical Researcher", text: "Work in clinical research, public health studies or pharmaceutical research." },
    { title: "Public Health Professional", text: "Work in government health services, NGOs or health programmes." },
  ],
  higherStudies: ["MD / MS / DNB", "MDS (Dental)", "MD / MS in AYUSH", "MPH (Public Health)", "Hospital Administration"],

  faqs: [
    {
      q: "Which medical courses are available after 12th?",
      a: "With Physics, Chemistry and Biology you can pursue MBBS, BDS, BAMS, BHMS, BUMS and BSMS through NEET UG, as well as nursing, physiotherapy and allied health programmes.",
    },
    {
      q: "What is the eligibility for MBBS?",
      a: "You need to have passed Class 12 with Physics, Chemistry, Biology and English, meet the minimum marks and age rules set for your category, and qualify NEET UG. The exact rules are published each year in the NEET UG information bulletin.",
    },
    {
      q: "Is NEET compulsory for medical admissions?",
      a: "Yes. NEET UG is compulsory for MBBS, BDS and AYUSH admissions in India, including at private and deemed universities.",
    },
    {
      q: "What is the duration of MBBS?",
      a: "MBBS is 5.5 years - 4.5 years of academic study followed by a one-year compulsory rotating internship.",
    },
    {
      q: "Which universities offer medical programmes?",
      a: "Medical seats are offered by government colleges, deemed universities and private universities, and are allotted through NEET counselling. Contact our team to discuss options that fit your NEET score and budget.",
    },
    {
      q: "Are scholarships available?",
      a: "Some universities and governments offer merit or need-based scholarships. Availability changes every year - we'll share the current options for the universities you shortlist.",
    },
    {
      q: "What documents are required?",
      a: "Usually your NEET scorecard and admit card, Class 10 and 12 mark sheets, ID proof, photographs, and category or domicile certificates where applicable. Each counselling authority publishes its own list.",
    },
    {
      q: "How can Install Your Career help with admission?",
      a: "We help you understand counselling rounds, shortlist suitable options for your score, prepare documents and stay on top of deadlines. Final seat allotment is made by the counselling authority and university.",
    },
  ],
};
