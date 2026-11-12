import type { Course } from "@/types/course";

export const animation: Course = {
  slug: "animation",
  name: "Animation",
  category: "CREATIVE UNDERGRADUATE PROGRAMS",
  headline: "Bring your imagination to life",
  accentWords: 2,
  intro:
    "Turn stories and ideas into film, games and visual effects. Explore animation, VFX and game design programmes with guidance on portfolios and admissions.",
  image: { src: "/courses/v2/animation-3d.jpg", alt: "Animated 3D cartoon character being built in animation software on a laptop" },
  seo: {
    title: "Animation Courses - B.Sc Animation & VFX, B.Des, Game Design Admission",
    description:
      "Explore B.Sc Animation & VFX, B.Des Animation, game design and BFA programmes, entrance tests, portfolio tips and career paths in animation in India.",
  },

  overview: {
    what: "Animation is the craft of creating movement and storytelling through drawings, 3D models and digital effects. It powers films, television, advertising, video games, e-learning and visual effects for live-action cinema.",
    learn:
      "You learn the principles of animation, drawing and storyboarding, then move into industry software for 2D, 3D modelling, texturing, rigging, lighting, compositing and visual effects. Most programmes are project-based and end with a showreel or portfolio.",
    subjects: [
      "Drawing & Sketching",
      "Principles of Animation",
      "Storyboarding & Storytelling",
      "2D Digital Animation",
      "3D Modelling, Texturing & Rigging",
      "Lighting & Rendering",
      "Visual Effects & Compositing",
      "Game Art & Design",
    ],
    whoShouldConsider: [
      "Students who love drawing, films, cartoons or video games",
      "Creative thinkers who enjoy telling stories visually",
      "Students from any stream - most programmes do not require science",
      "Those willing to build a portfolio and keep learning new software",
    ],
    levels: {
      ug: "B.Sc Animation & VFX, B.Des Animation, BFA Animation and game design degrees after Class 12 in any stream.",
      pg: "M.Sc Animation & VFX or M.Des in Animation / Interaction Design for graduates who want to specialise.",
    },
  },

  programs: [
    {
      name: "B.Sc Animation & VFX",
      degree: "B.Sc",
      level: "Undergraduate",
      duration: "3 years (4 years with Honours, where offered)",
      qualification: "Class 12 in any stream",
      entrance: "University test, interview or merit",
    },
    {
      name: "B.Des Animation",
      degree: "B.Des",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 in any stream",
      entrance: "UCEED, NID DAT or university design test",
    },
    {
      name: "B.Sc Game Design & Development",
      degree: "B.Sc",
      level: "Undergraduate",
      duration: "3–4 years (varies by university)",
      qualification: "Class 12 in any stream (some universities prefer Mathematics)",
      entrance: "University test or interview",
    },
    {
      name: "Bachelor of Fine Arts in Animation",
      degree: "BFA",
      level: "Undergraduate",
      duration: "4 years",
      qualification: "Class 12 in any stream",
      entrance: "University aptitude test or portfolio review",
    },
    {
      name: "B.Sc Multimedia & Graphic Design",
      degree: "B.Sc",
      level: "Undergraduate",
      duration: "3 years",
      qualification: "Class 12 in any stream",
      entrance: "University test, CUET UG or merit (varies)",
    },
    {
      name: "M.Sc Animation & VFX",
      degree: "M.Sc",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "Graduation, preferably in animation, design or a related field",
      entrance: "University test, portfolio or interview",
    },
    {
      name: "M.Des Animation / Interaction Design",
      degree: "M.Des",
      level: "Postgraduate",
      duration: "2 years",
      qualification: "Graduation in design, fine arts, architecture or a related field (varies)",
      entrance: "CEED, NID DAT or university test",
    },
    {
      name: "Diploma in Animation & VFX",
      degree: "Diploma",
      level: "Diploma",
      duration: "1–2 years (varies by institution)",
      qualification: "Class 12 (some accept Class 10)",
      entrance: "Direct admission or interview",
    },
  ],

  eligibility: [
    {
      title: "B.Sc / BFA / B.Des Animation",
      items: [
        { label: "Qualification", text: "Passed Class 12 (or equivalent) from a recognised board." },
        { label: "Subjects", text: "Any stream is usually accepted - science, commerce or arts." },
        {
          label: "Minimum marks",
          text: "Some universities set a minimum aggregate in Class 12, others admit on test or portfolio. Check the university's current admission notice.",
        },
        { label: "Entrance", text: "UCEED or NID DAT for B.Des at participating institutes; university tests, interviews or CUET UG for others." },
        { label: "Additional", text: "A portfolio of drawings, sketches or digital work can strengthen your application and is required by some universities." },
      ],
    },
    {
      title: "M.Sc / M.Des",
      items: [
        { label: "Qualification", text: "A bachelor's degree, usually in animation, design, fine arts or a related field." },
        { label: "Entrance", text: "CEED, NID DAT (M.Des) or the university's own test, followed by portfolio review or interview." },
      ],
    },
  ],

  exams: [
    { id: "uceed", who: "Students applying for B.Des programmes, including animation and interaction design." },
    { id: "nid-dat", who: "Students targeting NID or preparing for design-based animation programmes." },
    { id: "ceed", who: "Graduates applying for M.Des in animation, interaction or communication design." },
    { id: "cuet-ug", who: "Students applying to universities that use CUET UG for B.Sc or BFA admission." },
    { id: "university", who: "Most students - many private universities run their own aptitude test, portfolio review or interview." },
  ],

  careers: [
    { title: "2D / 3D Animator", text: "Create character and object animation for films, series, ads and games." },
    { title: "VFX Artist", text: "Build visual effects, compositing and simulations for film and streaming content." },
    { title: "Game Artist / Designer", text: "Design characters, environments and gameplay for video games." },
    { title: "Storyboard Artist", text: "Plan scenes and shots visually before production begins." },
    { title: "Motion Graphics Designer", text: "Create animated graphics for brands, social media and broadcast." },
    { title: "3D Modeller & Texturing Artist", text: "Build detailed 3D assets for animation, games, AR/VR and product visualisation." },
  ],
  higherStudies: [
    "M.Sc Animation & VFX",
    "M.Des Animation / Interaction Design",
    "Game Design & Development",
    "AR/VR & Immersive Media",
    "Film & Media Studies",
  ],

  faqs: [
    {
      q: "Can I study animation after 12th commerce or arts?",
      a: "Yes. Most animation, VFX and BFA programmes accept students from any stream. Some game development programmes prefer Mathematics, so check the university's notice.",
    },
    {
      q: "Do I need to be good at drawing for animation?",
      a: "Drawing helps, especially for 2D animation and storyboarding, but it improves with practice. 3D, VFX and compositing roles depend more on software skills and visual sense.",
    },
    {
      q: "What is the difference between B.Sc Animation and B.Des Animation?",
      a: "B.Sc Animation & VFX usually focuses on production skills and industry software. B.Des Animation is a four-year design degree that adds design thinking, research and storytelling.",
    },
    {
      q: "Is there an entrance exam for animation courses?",
      a: "It depends on the programme. B.Des programmes often use UCEED, NID DAT or a university design test, while many B.Sc programmes admit through a university test, interview or merit.",
    },
    {
      q: "What is a portfolio and do I need one?",
      a: "A portfolio is a collection of your best sketches, artwork or digital work. Some universities require one at admission, and every animation graduate needs a strong showreel to apply for jobs.",
    },
    {
      q: "What software will I learn?",
      a: "Programmes typically cover industry tools for 2D animation, 3D modelling and animation, compositing and editing. The exact software varies by university and changes with industry trends.",
    },
    {
      q: "What career options are there after animation?",
      a: "Graduates work as animators, VFX artists, game artists, motion graphics designers and storyboard artists in film, gaming, advertising and e-learning. Opportunities depend on your skills and portfolio.",
    },
    {
      q: "How can Install Your Career help with animation admission?",
      a: "We help you compare programmes, understand entrance and portfolio requirements, and prepare your application. Final admission decisions are made by the universities.",
    },
  ],
};
