import type { Course } from "@/types/course";

export const management: Course = {
  slug: "management",
  name: "Management",
  category: "UNDERGRADUATE, INTEGRATED & POSTGRADUATE PROGRAMS",
  headline: "Lead businesses with confidence and vision",
  accentWords: 2,
  intro:
    "Explore BBA, integrated and MBA programmes, understand entrance exams like CAT and MAT, and get guidance on the management path that fits your goals.",
  image: { src: "/courses/v2/management.jpg", alt: "Young South Asian professionals discussing a presentation in a modern office", position: "object-[65%_50%]" },
  seo: {
    title: "Management Courses - BBA, MBA & Integrated BBA+MBA Admission",
    description:
      "Explore BBA, MBA and integrated management programmes, specialisations, entrance exams like CAT, MAT, CMAT and XAT, careers and admission guidance.",
  },

  overview: {
    what: "Management education teaches how organisations work - how they plan, make decisions, manage money and people, and reach customers. It prepares you for roles across industries, from startups and corporates to family businesses.",
    learn:
      "You learn the core functions of business and how they connect, through case studies, presentations, group projects and internships. Later you specialise in an area such as Marketing, Finance, Human Resources or Business Analytics.",
    subjects: [
      "Principles of Management",
      "Financial & Management Accounting",
      "Marketing Management",
      "Human Resource Management",
      "Business Economics",
      "Operations Management",
      "Business Analytics",
      "Entrepreneurship",
    ],
    whoShouldConsider: [
      "Students from any stream - Science, Commerce or Arts",
      "Those who enjoy leading teams, communicating and solving business problems",
      "Students planning to run or grow a family business or startup",
      "Graduates looking to move into management roles",
    ],
    levels: {
      ug: "BBA (3 years, or 4 years with honours under NEP at some universities) after Class 12; integrated BBA+MBA (5 years).",
      pg: "MBA (2 years) after graduation in any discipline, with specialisations in Marketing, Finance, HR, Business Analytics and more.",
    },
  },

  programs: [
    {
      name: "Bachelor of Business Administration",
      degree: "BBA",
      level: "Undergraduate",
      duration: "3 years (4 years with honours at some universities)",
      qualification: "Class 12 in any stream",
      entrance: "CUET UG, university test or merit",
    },
    {
      name: "BBA Business Analytics",
      degree: "BBA",
      level: "Undergraduate",
      duration: "3–4 years (varies by university)",
      qualification: "Class 12 in any stream (some universities prefer Mathematics)",
      entrance: "CUET UG, university test or merit",
    },
    {
      name: "BBA Digital Marketing / International Business",
      degree: "BBA",
      level: "Undergraduate",
      duration: "3–4 years (varies by university)",
      qualification: "Class 12 in any stream",
      entrance: "CUET UG, university test or merit",
    },
    {
      name: "Integrated BBA + MBA",
      degree: "BBA + MBA",
      level: "Integrated",
      duration: "5 years",
      qualification: "Class 12 in any stream",
      entrance: "University test or merit",
    },
    {
      name: "Master of Business Administration",
      degree: "MBA",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "Bachelor's degree in any discipline",
      entrance: "CAT, MAT, CMAT, XAT or university test",
    },
    {
      name: "MBA Marketing / Finance / Human Resources",
      degree: "MBA",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "Bachelor's degree in any discipline",
      entrance: "CAT, MAT, CMAT, XAT or university test",
    },
    {
      name: "MBA Business Analytics",
      degree: "MBA",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "Bachelor's degree (quantitative background helpful)",
      entrance: "CAT, MAT, CMAT, XAT or university test",
    },
    {
      name: "MBA Healthcare / Hospital Management",
      degree: "MBA",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "Bachelor's degree (some universities prefer a healthcare background)",
      entrance: "CAT, MAT, CMAT or university test",
    },
  ],

  eligibility: [
    {
      title: "BBA / Integrated BBA + MBA",
      items: [
        { label: "Qualification", text: "Passed Class 12 (or equivalent) from a recognised board." },
        { label: "Subjects", text: "Any stream is usually accepted. Some analytics-focused programmes prefer Mathematics." },
        {
          label: "Minimum marks",
          text: "Minimum aggregate marks, if any, are set by each university and may differ by category. Check the current admission notice.",
        },
        { label: "Entrance", text: "CUET UG, the university's own aptitude test, or merit, depending on the university." },
        { label: "Additional", text: "Some universities include a group discussion or personal interview." },
      ],
    },
    {
      title: "MBA",
      items: [
        { label: "Qualification", text: "A bachelor's degree in any discipline from a recognised university. Final-year students can usually apply provisionally." },
        {
          label: "Minimum marks",
          text: "Minimum graduation marks are set by AICTE norms and the university, and differ by category.",
        },
        { label: "Entrance", text: "CAT, MAT, CMAT, XAT or the university's own test." },
        { label: "Selection", text: "Often includes group discussion, written ability test and personal interview." },
      ],
    },
  ],

  exams: [
    { id: "cat", who: "Graduates aiming for IIMs and top B-schools that accept CAT scores." },
    { id: "mat", who: "Graduates who want flexible test dates for MBA admission at participating universities." },
    { id: "cmat", who: "Graduates applying to AICTE-approved MBA programmes that accept CMAT." },
    { id: "xat", who: "Graduates applying to XLRI and other institutes that accept XAT." },
    { id: "cuet-ug", who: "Class 12 students applying to BBA at universities that accept CUET UG." },
    { id: "university", who: "Students applying directly to private universities with their own aptitude test and interview." },
  ],

  careers: [
    { title: "Marketing & Brand Manager", text: "Plan campaigns, build brands and understand customers." },
    { title: "Financial Analyst", text: "Analyse investments, budgets and company performance." },
    { title: "HR Manager", text: "Recruit, develop and support people in organisations." },
    { title: "Business Analyst", text: "Use data to improve decisions, processes and products." },
    { title: "Operations Manager", text: "Run supply chains, logistics and day-to-day operations efficiently." },
    { title: "Entrepreneur", text: "Start your own venture or grow a family business." },
  ],
  higherStudies: ["MBA / PGDM", "Executive MBA", "CFA / CMA / CS", "MS in Business Analytics", "PhD / Fellow Programme in Management"],

  faqs: [
    {
      q: "Can I do BBA after Class 12 Science or Arts?",
      a: "Yes. BBA is open to students from any stream. Some analytics-focused programmes may prefer Mathematics in Class 12.",
    },
    {
      q: "Is CAT compulsory for MBA?",
      a: "No. CAT is required by IIMs and many top B-schools, but universities also accept MAT, CMAT, XAT or their own entrance test.",
    },
    {
      q: "Which MBA specialisation should I choose?",
      a: "Choose based on your interests and strengths: Marketing for communication and strategy, Finance for numbers and markets, HR for people management, and Business Analytics for data. Our counsellors can help you decide.",
    },
    {
      q: "What is an integrated BBA + MBA?",
      a: "It is a 5-year programme you join after Class 12 that combines a BBA and an MBA, saving you a separate MBA admission process. Exit options vary by university.",
    },
    {
      q: "Do I need work experience for an MBA?",
      a: "Most full-time MBA programmes admit fresh graduates. Executive MBA programmes usually require work experience.",
    },
    {
      q: "What documents are required for admission?",
      a: "Usually Class 10 and 12 mark sheets, graduation mark sheets (for MBA), entrance scorecard, ID proof, photographs and category certificates where applicable.",
    },
    {
      q: "How can Install Your Career help?",
      a: "We help you choose between BBA, integrated and MBA routes, compare specialisations and universities, and prepare for applications and interviews. Admission decisions are made by the universities.",
    },
  ],
};
