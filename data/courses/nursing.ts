import type { Course } from "@/types/course";

export const nursing: Course = {
  slug: "nursing",
  name: "Nursing",
  category: "UNDERGRADUATE & POSTGRADUATE PROGRAMS",
  headline: "Care for people, lead in healthcare",
  accentWords: 2,
  intro:
    "Explore nursing programmes, understand eligibility and entrance routes, and get guidance on starting a respected, in-demand career in patient care.",
  image: { src: "/courses/v2/nursing-care.jpg", alt: "Nurse in blue scrubs helping an elderly man walk with a walker in a bright care home", position: "object-[30%_40%]" },
  seo: {
    title: "Nursing Courses - B.Sc Nursing, ANM & M.Sc Nursing Admission",
    description:
      "Explore B.Sc Nursing, Post Basic B.Sc Nursing, ANM and M.Sc Nursing programmes, INC-based eligibility, entrance exams, careers and admission guidance.",
  },

  overview: {
    what: "Nursing prepares you to care for patients, support doctors and families, and promote health in hospitals and communities. Nursing education in India is regulated by the Indian Nursing Council (INC) together with State Nursing Councils.",
    learn:
      "You learn the science behind the body and disease alongside hands-on nursing skills - patient assessment, medication administration, emergency care and communication. A large part of the course is supervised clinical practice in hospital wards and communities.",
    subjects: [
      "Anatomy & Physiology",
      "Nursing Foundations",
      "Medical-Surgical Nursing",
      "Child Health Nursing",
      "Mental Health Nursing",
      "Community Health Nursing",
      "Midwifery & Obstetric Nursing",
      "Pharmacology",
    ],
    whoShouldConsider: [
      "Science students with Physics, Chemistry and Biology",
      "People who are caring, patient and calm under pressure",
      "Students comfortable working in hospitals and shifts",
      "Those interested in healthcare careers in India or abroad",
    ],
    levels: {
      ug: "B.Sc Nursing (4 years) after Class 12 with PCB; ANM (2 years) for community health work; Post Basic B.Sc Nursing for registered nurses.",
      pg: "M.Sc Nursing (2 years) in specialities such as Medical-Surgical, Paediatric, Psychiatric or Community Health Nursing.",
    },
  },

  programs: [
    {
      name: "Bachelor of Science in Nursing",
      degree: "B.Sc Nursing",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 with Physics, Chemistry, Biology and English",
      entrance: "NEET UG, state / university test (varies)",
    },
    {
      name: "Post Basic B.Sc Nursing",
      degree: "P.B.B.Sc Nursing",
      level: "Undergraduate",
      duration: "2 years",
      qualification: "Registered nurse (RN & RM) with a recognised diploma in nursing",
      entrance: "University / state test",
    },
    {
      name: "Auxiliary Nursing and Midwifery",
      degree: "ANM",
      level: "Diploma",
      duration: "2 years",
      qualification: "Class 12 (stream requirements vary by state)",
      entrance: "Merit or state / institute test",
    },
    {
      name: "M.Sc Nursing (Medical-Surgical)",
      degree: "M.Sc Nursing",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "B.Sc Nursing / Post Basic B.Sc Nursing and registration as a nurse",
      entrance: "University / state test",
    },
    {
      name: "M.Sc Nursing (Child Health / Paediatric)",
      degree: "M.Sc Nursing",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "B.Sc Nursing / Post Basic B.Sc Nursing and registration as a nurse",
      entrance: "University / state test",
    },
    {
      name: "M.Sc Nursing (Community Health / Psychiatric)",
      degree: "M.Sc Nursing",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "B.Sc Nursing / Post Basic B.Sc Nursing and registration as a nurse",
      entrance: "University / state test",
    },
  ],

  eligibility: [
    {
      title: "B.Sc Nursing",
      items: [
        { label: "Qualification", text: "Passed Class 12 (or equivalent) from a recognised board." },
        { label: "Subjects", text: "Physics, Chemistry, Biology and English." },
        {
          label: "Minimum marks",
          text: "The Indian Nursing Council prescribes minimum marks in PCB that differ by category. Universities may set their own cut-offs - check the current notice.",
        },
        { label: "Age", text: "A minimum age applies as on 31 December of the admission year, as per INC norms." },
        { label: "Medical fitness", text: "Candidates must be medically fit; a fitness certificate is usually required at admission." },
        { label: "Entrance", text: "Some institutions and states use NEET UG; others run their own entrance test. AIIMS has a separate nursing exam." },
      ],
    },
    {
      title: "Post Basic B.Sc & M.Sc Nursing",
      items: [
        { label: "Post Basic B.Sc", text: "Registered nurse with a recognised nursing diploma, as per INC norms." },
        { label: "M.Sc Nursing", text: "B.Sc Nursing or Post Basic B.Sc Nursing, registration with a State Nursing Council, and any work experience the university requires." },
        { label: "Entrance", text: "University or state entrance test, depending on the institution." },
      ],
    },
  ],

  exams: [
    { id: "neet-ug", who: "B.Sc Nursing applicants where the state or institution uses NEET UG scores." },
    { id: "aiims-nursing", who: "Students targeting B.Sc Nursing seats at AIIMS institutions." },
    { id: "state-cet", who: "Students seeking state-quota nursing seats through state counselling." },
    { id: "university", who: "Students applying directly to private universities with their own nursing entrance." },
  ],

  careers: [
    { title: "Staff Nurse", text: "Provide patient care in hospital wards, ICUs and operation theatres." },
    { title: "Community Health Nurse", text: "Promote health and deliver care in communities and public health programmes." },
    { title: "Nurse Educator", text: "Teach and train nursing students in colleges and hospitals (after M.Sc Nursing)." },
    { title: "Nursing Specialist", text: "Work in critical care, paediatrics, cardiac or psychiatric nursing." },
    { title: "Nurse Administrator", text: "Manage nursing teams and services in hospitals." },
    { title: "Nursing Abroad", text: "Work overseas after meeting that country's licensing and language requirements." },
  ],
  higherStudies: ["M.Sc Nursing", "Nurse Practitioner programmes", "MBA in Hospital Management", "MPH (Public Health)", "PhD in Nursing"],

  faqs: [
    {
      q: "Is NEET compulsory for B.Sc Nursing?",
      a: "It depends on the state and institution. Some use NEET UG scores, while many private universities run their own entrance test. AIIMS has its own nursing entrance exam.",
    },
    {
      q: "What is the eligibility for B.Sc Nursing?",
      a: "You need Class 12 with Physics, Chemistry, Biology and English, meet the minimum marks and age rules in the Indian Nursing Council norms for your category, and be medically fit.",
    },
    {
      q: "Can boys study nursing?",
      a: "Yes. B.Sc Nursing and M.Sc Nursing are open to all genders, though some institutions have their own seat rules. Check the university's notice.",
    },
    {
      q: "What is the duration of B.Sc Nursing?",
      a: "B.Sc Nursing is a 4-year programme that includes extensive supervised clinical practice.",
    },
    {
      q: "Why is INC recognition important?",
      a: "Recognition by the Indian Nursing Council and the State Nursing Council is needed to register as a nurse after graduation. Always check the institution's recognition for the current year.",
    },
    {
      q: "Can I work abroad after nursing?",
      a: "Many nurses build careers abroad. Each country has its own licensing exams, language tests and experience requirements, which you complete after your degree.",
    },
    {
      q: "How can Install Your Career help?",
      a: "We help you understand entrance routes, check recognition, shortlist suitable universities and complete applications. Admission decisions are made by the universities.",
    },
  ],
};
