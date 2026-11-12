import type { Course } from "@/types/course";

export const engineering: Course = {
  slug: "engineering",
  name: "Engineering",
  category: "UNDERGRADUATE, DIPLOMA & POSTGRADUATE PROGRAMS",
  headline: "Engineer the technology of tomorrow",
  accentWords: 1,
  intro:
    "Compare engineering branches, understand entrance routes and get guidance on choosing the right B.Tech, diploma or M.Tech programme for your interests.",
  image: { src: "/courses/v2/engineering.jpg", alt: "Three engineering students in safety goggles building a robot at a lab workbench" },
  seo: {
    title: "Engineering Courses - B.Tech, Diploma & M.Tech Admission Guidance",
    description:
      "Explore B.Tech branches like Computer Science, Mechanical, Civil, Electrical and ECE, JEE Main eligibility, entrance exams, careers and admission guidance.",
  },

  overview: {
    what: "Engineering applies mathematics and science to design, build and improve systems - from software and electronics to machines, buildings and power networks. Degree programmes in India are approved by AICTE and offered by universities and institutes across the country.",
    learn:
      "The first year builds a common foundation in mathematics, physics, programming and engineering basics. From the second year you specialise in your chosen branch through theory, laboratory work, projects and internships, finishing with a major project.",
    subjects: [
      "Engineering Mathematics",
      "Engineering Physics & Chemistry",
      "Programming & Data Structures",
      "Engineering Mechanics",
      "Electrical & Electronics Basics",
      "Engineering Graphics",
      "Branch-specific core subjects",
      "Projects & Internships",
    ],
    whoShouldConsider: [
      "Students with Physics, Chemistry and Mathematics who enjoy problem-solving",
      "Those curious about how software, machines or structures work",
      "Students who like building things and learning through projects",
      "Diploma holders looking to move into a degree through lateral entry",
    ],
    levels: {
      ug: "B.Tech / B.E. (4 years) after Class 12, or a 3-year diploma after Class 10 with lateral entry into the second year of B.Tech.",
      pg: "M.Tech / M.E. (2 years) after B.Tech, through GATE or a university's own admission process.",
    },
  },

  programs: [
    {
      name: "B.Tech Computer Science and Engineering",
      degree: "B.Tech",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 with Physics and Mathematics, plus Chemistry/Computer Science or another approved subject",
      entrance: "JEE Main, state CET or university test",
    },
    {
      name: "B.Tech Computer Science (AI & Data Science)",
      degree: "B.Tech",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 with Physics and Mathematics",
      entrance: "JEE Main, state CET or university test",
    },
    {
      name: "B.Tech Information Technology",
      degree: "B.Tech",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 with Physics and Mathematics",
      entrance: "JEE Main, state CET or university test",
    },
    {
      name: "B.Tech Electronics and Communication Engineering",
      degree: "B.Tech",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 with Physics and Mathematics",
      entrance: "JEE Main, state CET or university test",
    },
    {
      name: "B.Tech Electrical Engineering",
      degree: "B.Tech",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 with Physics and Mathematics",
      entrance: "JEE Main, state CET or university test",
    },
    {
      name: "B.Tech Mechanical Engineering",
      degree: "B.Tech",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 with Physics and Mathematics",
      entrance: "JEE Main, state CET or university test",
    },
    {
      name: "B.Tech Civil Engineering",
      degree: "B.Tech",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 with Physics and Mathematics",
      entrance: "JEE Main, state CET or university test",
    },
    {
      name: "Diploma in Engineering (Polytechnic)",
      degree: "Diploma",
      level: "Diploma",
      duration: "3 years",
      qualification: "Class 10 (some institutes also admit Class 12 students)",
      entrance: "State polytechnic test or university admission",
    },
    {
      name: "Master of Technology",
      degree: "M.Tech",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "B.Tech / B.E. in a relevant branch",
      entrance: "GATE or university test / interview",
    },
  ],

  eligibility: [
    {
      title: "B.Tech / B.E.",
      items: [
        { label: "Qualification", text: "Passed Class 12 (or equivalent) from a recognised board." },
        {
          label: "Subjects",
          text: "Physics and Mathematics are compulsory, along with one of Chemistry, Computer Science, Biotechnology or another subject listed in the current AICTE norms.",
        },
        {
          label: "Minimum marks",
          text: "AICTE prescribes a minimum aggregate in the qualifying subjects, with relaxation for reserved categories. Universities may set higher cut-offs - check the current admission notice.",
        },
        { label: "Entrance", text: "JEE Main, a state CET or the university's own entrance test, depending on the university." },
        { label: "Admission", text: "Through central (JoSAA/CSAB), state or university counselling, or direct university admission." },
      ],
    },
    {
      title: "Lateral Entry & M.Tech",
      items: [
        { label: "Lateral entry", text: "Diploma holders in engineering, or B.Sc graduates with Mathematics, can join B.Tech directly in the second year at many universities." },
        { label: "M.Tech", text: "B.Tech / B.E. (or an equivalent degree) in a relevant branch, with GATE or the university's own entrance and interview." },
        { label: "Additional", text: "Branch eligibility and seat availability vary by university and admission year." },
      ],
    },
  ],

  exams: [
    { id: "jee-main", who: "Class 12 science students (PCM) applying to B.Tech at NITs, IIITs and universities that accept JEE scores." },
    { id: "jee-advanced", who: "Top JEE Main qualifiers who want to compete for IIT seats." },
    { id: "state-cet", who: "Students seeking state-quota engineering seats in their home state or another state." },
    { id: "university", who: "Students applying directly to private universities that run their own engineering entrance." },
    { id: "gate", who: "B.Tech graduates planning an M.Tech or a PSU career." },
  ],

  careers: [
    { title: "Software Engineer", text: "Design, build and maintain applications, platforms and services." },
    { title: "Data Engineer / Analyst", text: "Build data pipelines and turn data into insights for organisations." },
    { title: "Electronics & Embedded Engineer", text: "Work on chips, devices, IoT systems and telecommunications." },
    { title: "Mechanical Engineer", text: "Design and manufacture machines, vehicles and industrial systems." },
    { title: "Civil Engineer", text: "Plan and build roads, bridges, buildings and water systems." },
    { title: "Electrical Engineer", text: "Work on power generation, distribution, automation and electric mobility." },
  ],
  higherStudies: ["M.Tech / M.E.", "MBA", "MS abroad", "Research (PhD)", "Public sector exams (ESE / PSU)"],

  faqs: [
    {
      q: "Which engineering branch should I choose?",
      a: "Choose based on your interests and strengths rather than trends alone. Computer Science and IT suit students who enjoy programming; Mechanical, Civil and Electrical suit those interested in physical systems. Our counsellors can help you compare branches.",
    },
    {
      q: "Is JEE Main compulsory for B.Tech admission?",
      a: "Not always. NITs, IIITs and many universities use JEE Main, but several private universities admit students through their own entrance test, state CET scores or merit. Requirements differ by university.",
    },
    {
      q: "Can I do B.Tech without Chemistry in Class 12?",
      a: "Yes, in many cases. Physics and Mathematics are compulsory, and the third subject can be Chemistry, Computer Science, Biotechnology or another subject listed in the current AICTE norms. Confirm with the university's admission notice.",
    },
    {
      q: "What is lateral entry in B.Tech?",
      a: "Lateral entry lets diploma holders in engineering (and some B.Sc graduates) join B.Tech directly in the second year, completing the degree in three years.",
    },
    {
      q: "What is the difference between B.Tech and B.E.?",
      a: "Both are four-year undergraduate engineering degrees with equal recognition. The name depends on the university; the career value is the same.",
    },
    {
      q: "Do I need GATE for M.Tech?",
      a: "GATE is the main national route to M.Tech, but many universities also offer admission through their own entrance test or interview.",
    },
    {
      q: "What documents are required for admission?",
      a: "Usually Class 10 and 12 mark sheets, entrance scorecard (if applicable), ID proof, photographs, transfer/migration certificates and category certificates where applicable.",
    },
    {
      q: "How can Install Your Career help?",
      a: "We help you compare branches and universities, understand entrance and counselling options and complete applications on time. Admission decisions are made by the universities.",
    },
  ],
};
