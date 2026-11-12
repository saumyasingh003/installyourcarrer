import type { Course } from "@/types/course";

export const design: Course = {
  slug: "design",
  name: "Design",
  category: "UNDERGRADUATE & POSTGRADUATE PROGRAMS",
  headline: "Shape how the world looks",
  accentWords: 1,
  intro:
    "From fashion and interiors to products and digital experiences, explore design programmes and get guidance on portfolios, entrance tests and admissions.",
  image: { src: "/courses/v2/design.jpg", alt: "Two fashion design students working with fabric in a sunlit studio", position: "object-[70%_50%]" },
  seo: {
    title: "Design Courses - B.Des, M.Des, Fashion & Interior Design Admission Guidance",
    description:
      "Explore B.Des in Fashion, Interior, Product, Communication and UI/UX Design, M.Des, design entrance exams like UCEED and NID DAT, and design careers.",
  },

  overview: {
    what: "Design is the discipline of solving problems creatively - deciding how clothes, spaces, products, brands and apps look, feel and work for the people who use them.",
    learn:
      "You build strong foundations in drawing, colour, form and materials, then specialise. Studio projects, user research, prototyping and industry internships help you build a portfolio that shows how you think.",
    subjects: [
      "Design Fundamentals & Drawing",
      "Colour, Form & Composition",
      "Materials & Techniques",
      "Design History & Culture",
      "Design Research & User Studies",
      "Digital Tools & Prototyping",
      "Typography & Visual Communication",
      "Portfolio Development",
    ],
    whoShouldConsider: [
      "Students from any stream who love sketching, making or visual storytelling",
      "Those who notice how things are made and want to improve them",
      "People comfortable with feedback, iteration and studio work",
      "Students willing to prepare for aptitude tests and build a portfolio",
    ],
    levels: {
      ug: "B.Des (usually 4 years) in specialisations such as Fashion, Interior, Product, Communication and UI/UX Design.",
      pg: "M.Des (2 years) for graduates who want to specialise further or move into design from another field.",
    },
  },

  programs: [
    {
      name: "B.Des Fashion Design",
      degree: "B.Des",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 in any stream",
      entrance: "NIFT, UCEED, NID DAT or university test",
    },
    {
      name: "B.Des Interior Design",
      degree: "B.Des",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 in any stream",
      entrance: "University design aptitude test or national design tests",
    },
    {
      name: "B.Des Product / Industrial Design",
      degree: "B.Des",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 in any stream",
      entrance: "UCEED, NID DAT or university test",
    },
    {
      name: "B.Des Communication / Graphic Design",
      degree: "B.Des",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 in any stream",
      entrance: "UCEED, NID DAT or university test",
    },
    {
      name: "B.Des UI/UX & Interaction Design",
      degree: "B.Des",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 in any stream",
      entrance: "UCEED or university test",
    },
    {
      name: "B.Sc Fashion / Interior Design",
      degree: "B.Sc",
      level: "Undergraduate",
      duration: "3–4 years (varies by university)",
      qualification: "Class 12 in any stream",
      entrance: "University test or merit",
    },
    {
      name: "Master of Design",
      degree: "M.Des",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "Bachelor's degree (design or a related field, as accepted by the university)",
      entrance: "CEED, NID DAT (M.Des), NIFT or university test",
    },
  ],

  eligibility: [
    {
      title: "B.Des / B.Sc Design",
      items: [
        { label: "Qualification", text: "Passed Class 12 (or equivalent) from a recognised board." },
        { label: "Subjects", text: "Most design programmes accept students from Science, Commerce or Arts." },
        {
          label: "Minimum marks",
          text: "Some universities set a minimum aggregate in Class 12; others only require a pass. Check the university's current admission notice.",
        },
        { label: "Age", text: "National exams such as UCEED and NIFT set age limits for some categories - see their official information brochures." },
        { label: "Entrance", text: "A design aptitude test is common - national (UCEED, NID DAT, NIFT) or the university's own." },
        { label: "Additional", text: "Many universities add a portfolio review, studio test or personal interview." },
      ],
    },
    {
      title: "M.Des",
      items: [
        { label: "Qualification", text: "A bachelor's degree; some programmes accept graduates from any discipline, others prefer design, architecture or engineering." },
        { label: "Entrance", text: "CEED, NID DAT (PG), NIFT or the university's own test, usually followed by a portfolio review and interview." },
      ],
    },
  ],

  exams: [
    { id: "uceed", who: "Class 12 students aiming for B.Des at IITs and institutes that accept UCEED scores." },
    { id: "nid-dat", who: "Students targeting NID - and anyone wanting strong practice for design aptitude tests." },
    { id: "nift", who: "Students interested in fashion, textile, accessory or lifestyle design." },
    { id: "ceed", who: "Graduates applying for M.Des programmes." },
    { id: "university", who: "Applicants to private universities that run their own design aptitude test and portfolio review." },
  ],

  careers: [
    { title: "Fashion Designer", text: "Design apparel and accessories for labels, retail brands or your own studio." },
    { title: "Interior Designer", text: "Plan functional, beautiful spaces for homes, offices, retail and hospitality." },
    { title: "Product Designer", text: "Design everyday objects, furniture and devices from concept to manufacture." },
    { title: "Graphic / Brand Designer", text: "Create visual identities, packaging, publications and campaigns." },
    { title: "UI/UX Designer", text: "Design apps and websites that are easy and enjoyable to use." },
    { title: "Design Researcher / Strategist", text: "Study users and shape what products and services should become." },
  ],
  higherStudies: ["M.Des", "Master's in Interaction / Service Design", "MBA in Design or Luxury Management", "Specialised certifications in UX or CAD", "Study abroad in design"],

  faqs: [
    {
      q: "Can I do design after 12th in Commerce or Arts?",
      a: "Yes. Most B.Des programmes accept students from any stream. Your creativity, aptitude test performance and portfolio matter more than your Class 12 subjects.",
    },
    {
      q: "Which entrance exams are there for design?",
      a: "The main national ones are UCEED, NID DAT and NIFT for undergraduate study, and CEED for M.Des. Many private universities also run their own design aptitude test.",
    },
    {
      q: "Do I need to know how to draw well?",
      a: "Basic sketching helps, as most tests include drawing and visualisation. You don't need to be an artist - observation, ideas and problem-solving count just as much, and drawing improves with practice.",
    },
    {
      q: "What is a design portfolio?",
      a: "A collection of your work - sketches, projects, photographs or digital pieces - that shows how you think and create. Many universities ask for one at the interview stage.",
    },
    {
      q: "What is the difference between B.Des and B.Sc in design?",
      a: "B.Des is usually a 4-year professional degree with intensive studio work. B.Sc design programmes are often 3 years and can be more theory-based. The right choice depends on your goals.",
    },
    {
      q: "Which design specialisation should I choose?",
      a: "It depends on what you enjoy making - clothes, spaces, objects, visuals or digital experiences. Our counsellors can help you explore the options before you apply.",
    },
    {
      q: "Are design careers stable?",
      a: "Design roles exist across fashion, retail, technology, media and manufacturing, and many designers also freelance. Opportunities depend on your skills, portfolio and specialisation - no course can guarantee a job.",
    },
    {
      q: "How can Install Your Career help?",
      a: "We help you pick a specialisation, understand entrance tests, plan your portfolio and shortlist universities. Admission decisions are made by the university.",
    },
  ],
};
