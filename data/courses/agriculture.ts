import type { Course } from "@/types/course";

export const agriculture: Course = {
  slug: "agriculture",
  name: "Agriculture",
  category: "UNDERGRADUATE & POSTGRADUATE PROGRAMS",
  headline: "Grow the future of food",
  accentWords: 1,
  intro:
    "Science, technology and sustainability meet in agriculture. Explore agriculture and allied programmes and get guidance on CUET, state tests and admissions.",
  image: { src: "/courses/agriculture.jpg", alt: "Agriculture student in a green crop field" },
  seo: {
    title: "Agriculture Courses - B.Sc Agriculture, Horticulture, Agri Engineering",
    description:
      "Explore B.Sc (Hons) Agriculture, Horticulture, Forestry, B.Tech Agricultural Engineering and M.Sc programmes, entrance exams, eligibility and careers in agriculture.",
  },

  overview: {
    what: "Agriculture is the science of producing food, fibre and other plant and animal products sustainably. Modern agricultural education combines crop science, soil health, technology, economics and environmental care. Degree standards are guided by the Indian Council of Agricultural Research (ICAR).",
    learn:
      "You study how crops grow, how to manage soil, water, pests and diseases, and how farms work as businesses. Programmes include field practicals, lab work and a rural or industry experience component where students work with farmers and agri-businesses.",
    subjects: [
      "Agronomy",
      "Soil Science",
      "Plant Breeding & Genetics",
      "Entomology",
      "Plant Pathology",
      "Horticulture",
      "Agricultural Economics",
      "Agricultural Extension",
    ],
    whoShouldConsider: [
      "Students with Biology, Agriculture or Mathematics in Class 12",
      "Those interested in food security, sustainability and the environment",
      "Students who enjoy field work as well as lab and classroom study",
      "Future entrepreneurs interested in agri-business or agri-tech",
    ],
    levels: {
      ug: "B.Sc (Hons) Agriculture, Horticulture, Forestry and B.Tech Agricultural Engineering after Class 12 with science.",
      pg: "M.Sc in specialisations such as Agronomy, Soil Science or Plant Breeding, plus MBA in Agri-Business.",
    },
  },

  programs: [
    {
      name: "B.Sc (Hons) Agriculture",
      degree: "B.Sc",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 with Physics, Chemistry and Biology/Mathematics/Agriculture (varies)",
      entrance: "CUET UG, state CET or university test",
    },
    {
      name: "B.Sc (Hons) Horticulture",
      degree: "B.Sc",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 with Physics, Chemistry and Biology/Mathematics (varies)",
      entrance: "CUET UG, state CET or university test",
    },
    {
      name: "B.Sc (Hons) Forestry",
      degree: "B.Sc",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 with science subjects (varies by university)",
      entrance: "CUET UG, state CET or university test",
    },
    {
      name: "B.Tech Agricultural Engineering",
      degree: "B.Tech",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 with Physics, Chemistry and Mathematics",
      entrance: "CUET UG, JEE Main, state CET or university test (varies)",
    },
    {
      name: "B.Sc (Hons) Community Science / Agri-Business",
      degree: "B.Sc",
      level: "Undergraduate",
      duration: "4 years (varies by university)",
      qualification: "Class 12 with science (some accept other streams - varies)",
      entrance: "University test or CUET UG",
    },
    {
      name: "M.Sc Agriculture",
      degree: "M.Sc",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "B.Sc Agriculture or a related agricultural degree",
      entrance: "ICAR AIEEA PG or university test",
    },
    {
      name: "MBA Agri-Business Management",
      degree: "MBA",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "Graduation, preferably in agriculture or allied sciences",
      entrance: "CAT/MAT/CMAT, ICAR test or university test (varies)",
    },
  ],

  eligibility: [
    {
      title: "B.Sc Agriculture & allied",
      items: [
        { label: "Qualification", text: "Passed Class 12 (or equivalent) from a recognised board." },
        {
          label: "Subjects",
          text: "Physics and Chemistry with Biology, Mathematics or Agriculture. Accepted subject combinations differ by university and programme.",
        },
        {
          label: "Minimum marks",
          text: "A minimum aggregate in Class 12 is set by each university and may differ by category. Check the current admission notice.",
        },
        { label: "Entrance", text: "ICAR-quota UG seats use CUET UG scores; state universities use state CETs; private universities may use their own test or merit." },
      ],
    },
    {
      title: "M.Sc Agriculture",
      items: [
        { label: "Qualification", text: "A four-year B.Sc Agriculture or allied degree from a recognised university." },
        { label: "Entrance", text: "ICAR AIEEA PG for ICAR-quota seats, or the university's own entrance test." },
      ],
    },
  ],

  exams: [
    { id: "cuet-ug", who: "Students applying for ICAR-quota UG seats and universities that accept CUET UG for agriculture." },
    { id: "state-cet", who: "Students applying to state agricultural universities through state-quota admissions." },
    { id: "icar-pg", who: "Agriculture graduates applying for M.Sc at ICAR-accredited universities." },
    { id: "university", who: "Students applying to private universities that run their own test or admit on merit." },
  ],

  careers: [
    { title: "Agricultural Officer", text: "Work in government agriculture departments on farmer support and schemes." },
    { title: "Agronomist", text: "Advise on crop production, soil management and farm practices." },
    { title: "Agri-Business Professional", text: "Work in seeds, fertilisers, food processing, supply chains and agri-retail." },
    { title: "Horticulturist", text: "Manage fruit, vegetable, flower and plantation crop production." },
    { title: "Agricultural Researcher", text: "Contribute to crop improvement, soil health and plant protection research." },
    { title: "Agri-Entrepreneur", text: "Start ventures in organic farming, agri-tech, nurseries or food products." },
  ],
  higherStudies: [
    "M.Sc in Agronomy, Soil Science, Plant Breeding or Entomology",
    "M.Sc Horticulture",
    "MBA Agri-Business Management",
    "M.Tech Agricultural Engineering",
    "PhD in Agricultural Sciences",
  ],

  faqs: [
    {
      q: "Which subjects do I need for B.Sc Agriculture?",
      a: "Usually Physics and Chemistry with Biology, Mathematics or Agriculture in Class 12. Accepted combinations vary by university, so check the admission notice.",
    },
    {
      q: "Can I do B.Sc Agriculture with PCM?",
      a: "Many universities accept PCM for B.Sc Agriculture, and PCM is required for B.Tech Agricultural Engineering. Some universities only accept PCB, so confirm before applying.",
    },
    {
      q: "Which entrance exam is needed for agriculture?",
      a: "ICAR-quota undergraduate seats are filled through CUET UG. State agricultural universities often use state CETs, and private universities may run their own test or admit on merit.",
    },
    {
      q: "What is the duration of B.Sc Agriculture?",
      a: "B.Sc (Hons) Agriculture is a four-year programme that includes field work and a rural or industry experience component.",
    },
    {
      q: "Is B.Sc Agriculture a good option for government jobs?",
      a: "Agriculture graduates can apply for roles such as agricultural officer and banking agriculture officer through competitive exams. Selection depends on those exams - no course guarantees a job.",
    },
    {
      q: "What can I do after B.Sc Agriculture?",
      a: "You can pursue M.Sc in a specialisation, an MBA in agri-business, or work in agri-business, research support, extension services or start your own venture.",
    },
    {
      q: "Are scholarships available for agriculture students?",
      a: "Some government and university scholarships exist for agriculture students. Availability changes every year - we'll share the current options for your shortlisted universities.",
    },
    {
      q: "How can Install Your Career help with agriculture admission?",
      a: "We help you check subject eligibility, understand CUET and state tests, shortlist universities and prepare your application. Final admission decisions are made by the universities.",
    },
  ],
};
