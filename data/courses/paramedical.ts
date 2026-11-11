import type { Course } from "@/types/course";

export const paramedical: Course = {
  slug: "paramedical",
  name: "Paramedical",
  category: "ALLIED HEALTH PROGRAMS",
  headline: "The skilled hands behind every diagnosis",
  accentWords: 2,
  intro:
    "Discover allied health careers in laboratories, imaging, operation theatres and critical care - and get guidance on choosing the right programme and university.",
  image: { src: "/courses/paramedical.jpg", alt: "Allied health professional working with diagnostic equipment" },
  seo: {
    title: "Paramedical Courses - BMLT, Radiology, OT Technology Admission Guidance",
    description:
      "Explore BMLT, B.Sc Radiology & Imaging, OT Technology, Optometry, Cardiac Care and Dialysis Technology programmes, eligibility, entrance routes and careers.",
  },

  overview: {
    what: "Paramedical (allied health) programmes prepare you for the technical and diagnostic roles that keep hospitals running - from testing samples in a lab to operating imaging equipment and assisting in surgery. Allied and healthcare professions in India are now regulated under the National Commission for Allied and Healthcare Professions (NCAHP) Act, 2021.",
    learn:
      "You learn the science behind a specialised area of healthcare and get hands-on training with real equipment, followed by clinical postings or an internship in a hospital, diagnostic centre or laboratory.",
    subjects: [
      "Human Anatomy & Physiology",
      "Biochemistry",
      "Pathology & Haematology",
      "Clinical Microbiology",
      "Radiation Physics & Imaging",
      "Anaesthesia & OT Techniques",
      "Patient Care & Medical Ethics",
      "Equipment Handling & Safety",
    ],
    whoShouldConsider: [
      "Science students who enjoy practical, hands-on work",
      "Those interested in healthcare but looking beyond MBBS",
      "Students who are detail-oriented and comfortable with technology",
      "People who want a focused course with clear job roles",
    ],
    levels: {
      ug: "B.Sc and bachelor's degrees in specific allied health areas after Class 12 (science), plus diploma options.",
      pg: "M.Sc in the same specialisation, such as M.Sc MLT, Radiology & Imaging or OT Technology.",
    },
  },

  programs: [
    {
      name: "Bachelor of Medical Laboratory Technology",
      degree: "BMLT / B.Sc MLT",
      level: "Undergraduate",
      duration: "3–4 years (varies by university)",
      qualification: "Class 12 with Physics, Chemistry and Biology",
      entrance: "University test, CUET UG or merit (varies)",
    },
    {
      name: "B.Sc Radiology & Imaging Technology",
      degree: "B.Sc",
      level: "Undergraduate",
      duration: "3–4 years (varies by university)",
      qualification: "Class 12 with Physics, Chemistry and Biology",
      entrance: "University test, CUET UG or merit (varies)",
    },
    {
      name: "B.Sc Operation Theatre Technology",
      degree: "B.Sc",
      level: "Undergraduate",
      duration: "3–4 years (varies by university)",
      qualification: "Class 12 with Physics, Chemistry and Biology",
      entrance: "University test, CUET UG or merit (varies)",
    },
    {
      name: "Bachelor of Optometry",
      degree: "B.Optom",
      level: "Undergraduate",
      duration: "4 years incl. internship",
      qualification: "Class 12 with Physics, Chemistry and Biology or Mathematics",
      entrance: "University test, CUET UG or merit (varies)",
    },
    {
      name: "B.Sc Cardiac Care Technology",
      degree: "B.Sc",
      level: "Undergraduate",
      duration: "3–4 years (varies by university)",
      qualification: "Class 12 with Physics, Chemistry and Biology",
      entrance: "University test, CUET UG or merit (varies)",
    },
    {
      name: "B.Sc Dialysis Technology",
      degree: "B.Sc",
      level: "Undergraduate",
      duration: "3–4 years (varies by university)",
      qualification: "Class 12 with Physics, Chemistry and Biology",
      entrance: "University test, CUET UG or merit (varies)",
    },
    {
      name: "Diploma in Medical Laboratory Technology",
      degree: "DMLT",
      level: "Diploma",
      duration: "2 years",
      qualification: "Class 12 with science subjects",
      entrance: "Merit or institute test",
    },
    {
      name: "M.Sc Medical Laboratory Technology",
      degree: "M.Sc MLT",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "BMLT / B.Sc MLT or a related allied health degree",
      entrance: "University test, CUET PG or merit (varies)",
    },
  ],

  eligibility: [
    {
      title: "Bachelor's programmes (BMLT, Radiology, OT, Cardiac Care, Dialysis)",
      items: [
        { label: "Qualification", text: "Passed Class 12 (or equivalent) from a recognised board." },
        { label: "Subjects", text: "Physics, Chemistry and Biology are generally required; English is usually a compulsory subject." },
        {
          label: "Minimum marks",
          text: "Minimum aggregate marks are set by each university and may differ by category. Check the university's current admission notice.",
        },
        { label: "Age", text: "Some universities set a minimum age (usually 17) at the time of admission - confirm in the notice." },
        {
          label: "Entrance",
          text: "Admission may be through a university test, CUET UG, a state entrance test or Class 12 merit. A few institutions use NEET UG scores.",
        },
        { label: "Additional", text: "A medical fitness certificate may be requested at the time of admission." },
      ],
    },
    {
      title: "B.Optom",
      items: [
        { label: "Subjects", text: "Class 12 with Physics and Chemistry, along with Biology or Mathematics, as accepted by the university." },
        { label: "Entrance", text: "University-specific test, CUET UG or merit-based admission." },
      ],
    },
    {
      title: "M.Sc (allied health)",
      items: [
        { label: "Qualification", text: "A bachelor's degree in the same or a closely related allied health discipline." },
        { label: "Entrance", text: "University entrance test, CUET PG or merit, depending on the university." },
      ],
    },
  ],

  exams: [
    { id: "cuet-ug", who: "Students applying to universities that accept CUET UG for allied health B.Sc programmes." },
    { id: "neet-ug", who: "Students targeting institutions or states that fill paramedical seats using NEET UG scores." },
    { id: "state-cet", who: "Students seeking state-quota allied health seats in their home state." },
    { id: "university", who: "Most applicants to private universities, which commonly run their own test or admit on merit." },
  ],

  careers: [
    { title: "Medical Lab Technologist", text: "Run diagnostic tests on blood and tissue samples in hospital and pathology labs." },
    { title: "Radiology / Imaging Technologist", text: "Operate X-ray, CT and MRI equipment and support radiologists." },
    { title: "Operation Theatre Technologist", text: "Prepare the OT, manage equipment and assist surgical and anaesthesia teams." },
    { title: "Optometrist", text: "Test vision, prescribe corrective lenses and screen for eye conditions." },
    { title: "Cardiac Care Technologist", text: "Assist with ECG, echo and cath lab procedures in cardiology departments." },
    { title: "Dialysis Technologist", text: "Run and monitor dialysis for patients with kidney disease." },
  ],
  higherStudies: [
    "M.Sc in your specialisation",
    "Master of Public Health (MPH)",
    "Hospital & Healthcare Management",
    "Clinical Research",
    "PhD in allied health sciences",
  ],

  faqs: [
    {
      q: "What are paramedical courses?",
      a: "They are allied health programmes that train you for specialised technical roles in healthcare - such as laboratory technology, imaging, operation theatre support, optometry, cardiac care and dialysis.",
    },
    {
      q: "Can I join a paramedical course without NEET?",
      a: "Yes, in most cases. Many universities admit students through their own test, CUET UG or Class 12 merit. A few institutions and states do use NEET UG scores, so check the notice for each university.",
    },
    {
      q: "Which subjects do I need in Class 12?",
      a: "Physics, Chemistry and Biology are generally required. B.Optom may also accept Mathematics in place of Biology at some universities.",
    },
    {
      q: "What is the difference between a diploma and a B.Sc?",
      a: "A diploma such as DMLT is shorter and focused on core skills. A B.Sc goes deeper into the science, includes longer clinical training and is usually needed for an M.Sc or supervisory roles.",
    },
    {
      q: "How long do paramedical degree courses take?",
      a: "Most bachelor's programmes take 3 to 4 years, often including an internship. B.Optom is typically 4 years. The exact duration depends on the university.",
    },
    {
      q: "Who regulates allied health professions in India?",
      a: "Allied and healthcare professions are now governed by the National Commission for Allied and Healthcare Professions (NCAHP) Act, 2021. The degree itself is awarded by a UGC-recognised university.",
    },
    {
      q: "Where can paramedical graduates work?",
      a: "Hospitals, diagnostic centres, pathology labs, eye-care clinics, dialysis units and research labs. Opportunities depend on your specialisation, skills and location.",
    },
    {
      q: "How can Install Your Career help?",
      a: "We help you choose a specialisation that suits your interests, check eligibility, compare universities and complete your application. Admission decisions are made by the university.",
    },
  ],
};
