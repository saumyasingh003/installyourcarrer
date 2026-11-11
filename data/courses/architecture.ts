import type { Course } from "@/types/course";

export const architecture: Course = {
  slug: "architecture",
  name: "Architecture",
  category: "UNDERGRADUATE & POSTGRADUATE PROGRAMS",
  headline: "Design the spaces people live in",
  accentWords: 2,
  intro:
    "Combine creativity, technology and social purpose. Explore architecture and planning programmes and get guidance on NATA, JEE Main Paper 2 and admissions.",
  image: { src: "/courses/architecture.jpg", alt: "Architecture student working on a building model" },
  seo: {
    title: "Architecture Courses - B.Arch, B.Plan, M.Arch Admission Guidance",
    description:
      "Explore B.Arch, B.Plan, M.Arch and M.Plan programmes, NATA and JEE Main Paper 2, eligibility, career paths and admission guidance for architecture in India.",
  },

  overview: {
    what: "Architecture is the art and science of designing buildings and the spaces around them. In India, the five-year B.Arch is regulated by the Council of Architecture (CoA), and graduates must register with the CoA to practise as architects. Planning programmes focus on towns, cities and regions.",
    learn:
      "You learn to turn ideas into buildable designs through studio projects - sketching, model-making, technical drawing and digital tools - while understanding structures, materials, climate, history and the needs of the people who use a space. Most programmes include a practical training semester in an architect's office.",
    subjects: [
      "Architectural Design Studio",
      "Building Construction & Materials",
      "Structural Systems",
      "History of Architecture",
      "Climate-Responsive Design",
      "Building Services",
      "Landscape & Urban Design",
      "Computer-Aided Design (CAD/BIM)",
    ],
    whoShouldConsider: [
      "Students who enjoy drawing, sketching and visual thinking",
      "Those with Mathematics who like combining creativity with problem-solving",
      "People curious about how cities, homes and public spaces shape lives",
      "Students comfortable with long studio hours and project-based work",
    ],
    levels: {
      ug: "B.Arch (5 years) after Class 12 with Mathematics, through NATA or JEE Main Paper 2; B.Plan (4 years) for planning.",
      pg: "M.Arch in specialisations such as urban design, landscape or sustainable architecture; M.Plan for urban and regional planning.",
    },
  },

  programs: [
    {
      name: "Bachelor of Architecture",
      degree: "B.Arch",
      level: "Undergraduate",
      duration: "5 years incl. practical training",
      qualification: "Class 12 with Physics, Chemistry and Mathematics (or 10+3 Diploma with Mathematics)",
      entrance: "NATA or JEE Main Paper 2",
    },
    {
      name: "Bachelor of Planning",
      degree: "B.Plan",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 with Mathematics",
      entrance: "JEE Main Paper 2 (B.Planning) or university test",
    },
    {
      name: "B.Des Interior Design",
      degree: "B.Des",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 in any stream (varies by university)",
      entrance: "University design aptitude test or interview",
    },
    {
      name: "Master of Architecture",
      degree: "M.Arch",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "B.Arch from a recognised institution",
      entrance: "GATE (Architecture & Planning) or university test",
    },
    {
      name: "M.Arch Urban Design / Landscape Architecture",
      degree: "M.Arch",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "B.Arch (some specialisations accept related degrees)",
      entrance: "GATE or university test",
    },
    {
      name: "Master of Planning",
      degree: "M.Plan",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "B.Arch, B.Plan or a related degree (varies by university)",
      entrance: "GATE or university test",
    },
  ],

  eligibility: [
    {
      title: "B.Arch",
      items: [
        {
          label: "Qualification",
          text: "Passed Class 12 with Physics, Chemistry and Mathematics, or a 10+3 Diploma with Mathematics, as recognised by the Council of Architecture.",
        },
        {
          label: "Minimum marks",
          text: "Minimum marks in PCM and in aggregate are prescribed by the Council of Architecture. Check the current CoA notification and the university's admission notice.",
        },
        { label: "Entrance", text: "A valid NATA score or JEE Main Paper 2 (B.Arch) score is generally required." },
        { label: "Admission", text: "Through central (JoSAA for NITs), state or university counselling, depending on the institution." },
      ],
    },
    {
      title: "M.Arch / M.Plan",
      items: [
        { label: "Qualification", text: "B.Arch (for M.Arch) or B.Arch/B.Plan/related degree (for M.Plan) from a recognised institution." },
        { label: "Entrance", text: "GATE score, or the university's own entrance test and interview." },
        { label: "Additional", text: "Some universities ask for a portfolio of design work." },
      ],
    },
  ],

  exams: [
    { id: "nata", who: "Students applying for B.Arch at universities and colleges across India." },
    { id: "jee-main", who: "Students targeting B.Arch or B.Planning at NITs, SPAs and universities that accept Paper 2." },
    { id: "gate", who: "B.Arch and B.Plan graduates applying for M.Arch or M.Plan." },
    { id: "university", who: "Students applying to universities that run their own aptitude test or portfolio review." },
  ],

  careers: [
    { title: "Architect", text: "Design residential, commercial and public buildings after registering with the Council of Architecture." },
    { title: "Urban Designer", text: "Shape streets, neighbourhoods and public spaces with planners and local bodies." },
    { title: "Town & Country Planner", text: "Prepare land-use and development plans for cities and regions." },
    { title: "Landscape Architect", text: "Design parks, campuses and outdoor environments." },
    { title: "Interior Architect", text: "Plan interior spaces, lighting, materials and furniture layouts." },
    { title: "Sustainability Consultant", text: "Help projects improve energy use and meet green building standards." },
  ],
  higherStudies: [
    "M.Arch (Urban Design, Landscape, Sustainable Architecture)",
    "M.Plan (Urban / Regional / Transport Planning)",
    "Conservation & Heritage Studies",
    "Construction & Project Management",
    "PhD in Architecture or Planning",
  ],

  faqs: [
    {
      q: "What is the duration of B.Arch?",
      a: "B.Arch is a five-year programme, usually including a semester of practical training in an architect's office.",
    },
    {
      q: "Is Mathematics compulsory for B.Arch?",
      a: "Yes. The Council of Architecture requires Class 12 with Physics, Chemistry and Mathematics, or a 10+3 Diploma with Mathematics.",
    },
    {
      q: "What is the difference between NATA and JEE Main Paper 2?",
      a: "NATA is conducted by the Council of Architecture and tests drawing and aptitude for B.Arch. JEE Main Paper 2 is conducted by NTA and is used for B.Arch and B.Planning at NITs and many other institutions. Many students attempt both.",
    },
    {
      q: "Do I need to be good at drawing?",
      a: "Basic sketching and visual sense help, and both NATA and JEE Paper 2 test drawing ability. Skills improve a lot with practice and through the course itself.",
    },
    {
      q: "What is the difference between B.Arch and B.Plan?",
      a: "B.Arch focuses on designing buildings and spaces. B.Plan focuses on planning towns, cities, transport and land use at a larger scale.",
    },
    {
      q: "Can I practise as an architect after B.Arch?",
      a: "Yes, after registering with the Council of Architecture. Only CoA-registered persons can use the title 'Architect' in India.",
    },
    {
      q: "Are scholarships available for architecture students?",
      a: "Some universities offer merit-based scholarships linked to entrance scores or Class 12 marks. Options change every year - we'll share the current details for your shortlisted universities.",
    },
    {
      q: "How can Install Your Career help with architecture admission?",
      a: "We help you understand NATA and JEE Paper 2, shortlist suitable universities, prepare applications and track counselling deadlines. Final admission decisions are made by the universities.",
    },
  ],
};
