import type { Course } from "@/types/course";

export const physiotherapy: Course = {
  slug: "physiotherapy",
  name: "Physiotherapy",
  category: "UNDERGRADUATE & POSTGRADUATE PROGRAMS",
  headline: "Help people move, heal and thrive",
  accentWords: 2,
  intro:
    "Help people recover strength, mobility and confidence. Explore physiotherapy programmes and get guidance on eligibility, entrance routes and admissions.",
  image: { src: "/courses/physiotherapy.jpg", alt: "Physiotherapist helping a patient with an exercise" },
  seo: {
    title: "Physiotherapy Courses - BPT, MPT Admission Guidance",
    description:
      "Explore BPT and MPT programmes, eligibility, entrance exams, specialisations and career paths in physiotherapy, with admission guidance from Install Your Career.",
  },

  overview: {
    what: "Physiotherapy is a healthcare profession that helps people recover movement and function after injury, surgery, illness or disability. Physiotherapists use exercise, manual therapy, electrotherapy and education rather than medicines or surgery.",
    learn:
      "You build a strong base in anatomy, physiology and biomechanics, then learn to assess patients and plan treatment for orthopaedic, neurological, cardio-respiratory and sports conditions. Clinical postings in hospitals and a compulsory internship give you hands-on experience.",
    subjects: [
      "Anatomy",
      "Physiology",
      "Biomechanics & Kinesiology",
      "Exercise Therapy",
      "Electrotherapy",
      "Orthopaedic Physiotherapy",
      "Neurological Physiotherapy",
      "Cardio-Respiratory Physiotherapy",
    ],
    whoShouldConsider: [
      "Students with Physics, Chemistry and Biology who enjoy human sciences",
      "People who like hands-on work and helping others recover",
      "Sports and fitness enthusiasts interested in rehabilitation",
      "Students who want a healthcare career without the NEET-based MBBS route",
    ],
    levels: {
      ug: "Bachelor of Physiotherapy (BPT) after Class 12 with Physics, Chemistry and Biology.",
      pg: "Master of Physiotherapy (MPT) in specialisations such as orthopaedics, neurology, sports or cardio-respiratory.",
    },
  },

  programs: [
    {
      name: "Bachelor of Physiotherapy",
      degree: "BPT",
      level: "Undergraduate",
      duration: "4.5 years incl. 6-month internship",
      qualification: "Class 12 with Physics, Chemistry, Biology and English",
      entrance: "University test, CUET UG, NEET UG or state test (varies)",
    },
    {
      name: "MPT Orthopaedics",
      degree: "MPT",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "BPT with completed internship",
      entrance: "University entrance test or merit",
    },
    {
      name: "MPT Neurology",
      degree: "MPT",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "BPT with completed internship",
      entrance: "University entrance test or merit",
    },
    {
      name: "MPT Sports Physiotherapy",
      degree: "MPT",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "BPT with completed internship",
      entrance: "University entrance test or merit",
    },
    {
      name: "MPT Cardio-Respiratory",
      degree: "MPT",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "BPT with completed internship",
      entrance: "University entrance test or merit",
    },
    {
      name: "Diploma in Physiotherapy",
      degree: "Diploma",
      level: "Diploma",
      duration: "2 years (varies by institution)",
      qualification: "Class 12 with science",
      entrance: "Direct admission or institution test",
    },
  ],

  eligibility: [
    {
      title: "BPT",
      items: [
        { label: "Qualification", text: "Passed Class 12 (or equivalent) from a recognised board." },
        { label: "Subjects", text: "Physics, Chemistry, Biology and English." },
        {
          label: "Minimum marks",
          text: "A minimum aggregate in PCB is set by each university or state authority and may differ by category. Check the current admission notice.",
        },
        { label: "Age", text: "Some universities set a minimum age as on 31 December of the admission year - check the notice." },
        {
          label: "Entrance",
          text: "Varies: some universities run their own test, some use CUET UG, and some states or institutions use NEET UG scores for BPT.",
        },
      ],
    },
    {
      title: "MPT",
      items: [
        { label: "Qualification", text: "BPT from a recognised university with the internship completed." },
        { label: "Entrance", text: "University entrance test, interview or merit, depending on the university." },
      ],
    },
  ],

  exams: [
    { id: "neet-ug", who: "Students applying in states or institutions that use NEET UG scores for BPT admission." },
    { id: "cuet-ug", who: "Students applying to universities that accept CUET UG for BPT." },
    { id: "state-cet", who: "Students seeking state-quota BPT seats through state counselling." },
    { id: "university", who: "Most students applying to private universities, which often run their own test or admit on merit." },
  ],

  careers: [
    { title: "Physiotherapist", text: "Treat patients in hospitals, clinics and rehabilitation centres." },
    { title: "Sports Physiotherapist", text: "Work with athletes and teams on injury prevention and recovery." },
    { title: "Neuro-Rehabilitation Therapist", text: "Help patients recover after stroke, spinal injury or neurological illness." },
    { title: "Paediatric Physiotherapist", text: "Support children with developmental and movement conditions." },
    { title: "Private Practitioner", text: "Run your own physiotherapy clinic or home-care practice." },
    { title: "Ergonomics & Wellness Consultant", text: "Advise workplaces and fitness centres on posture and injury prevention." },
  ],
  higherStudies: [
    "MPT (Orthopaedics, Neurology, Sports, Cardio-Respiratory, Paediatrics)",
    "Certifications in manual therapy and sports rehabilitation",
    "MBA / MHA in Hospital Administration",
    "Master of Public Health",
    "PhD in Physiotherapy",
  ],

  faqs: [
    {
      q: "What is the duration of BPT?",
      a: "BPT is 4.5 years - four years of study followed by a six-month compulsory internship.",
    },
    {
      q: "Is NEET required for BPT?",
      a: "Not everywhere. Some states and institutions use NEET UG scores for BPT, while many private universities run their own entrance test or admit on merit. We'll tell you the process for each university you shortlist.",
    },
    {
      q: "What is the eligibility for BPT?",
      a: "Class 12 with Physics, Chemistry, Biology and English, with minimum marks set by the university. Some universities also have a minimum age requirement.",
    },
    {
      q: "Is a physiotherapist a doctor?",
      a: "Physiotherapists are qualified healthcare professionals who treat movement and function problems. They do not prescribe medicines or perform surgery, and rules on titles are set by the relevant regulator.",
    },
    {
      q: "What are the specialisations in MPT?",
      a: "Common MPT specialisations include orthopaedics, neurology, sports, cardio-respiratory and paediatrics. Options vary by university.",
    },
    {
      q: "Can I start my own clinic after BPT?",
      a: "Many physiotherapists run their own practice after gaining clinical experience. Registration and practice rules depend on your state, so check with the state council.",
    },
    {
      q: "Are scholarships available for physiotherapy?",
      a: "Some universities offer merit or need-based scholarships. Availability changes every year - we'll share the current options for your shortlisted universities.",
    },
    {
      q: "How can Install Your Career help with physiotherapy admission?",
      a: "We help you check eligibility, understand the entrance route for each university, shortlist options and prepare documents. Final admission decisions are made by the universities.",
    },
  ],
};
