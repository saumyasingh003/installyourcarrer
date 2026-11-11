import type { Exam, ExamId } from "@/types/course";

// Central registry of entrance examinations. Courses reference these by id and add
// their own "who should appear" note. Patterns, dates and eligibility change every
// cycle, so descriptions stay general and always point to the official site.

export const EXAMS: Record<ExamId, Exam> = {
  "neet-ug": {
    id: "neet-ug",
    name: "National Eligibility cum Entrance Test (UG)",
    short: "NEET UG",
    conductedBy: "National Testing Agency (NTA)",
    purpose: "Admission to undergraduate medical and dental programmes across India.",
    description:
      "A national pen-and-paper test covering Physics, Chemistry and Biology. Scores are used for MBBS, BDS and AYUSH (BAMS, BHMS, BUMS, BSMS) seats, and some institutions also use them for nursing and allied health admissions.",
    url: "https://neet.nta.nic.in",
  },
  "neet-pg": {
    id: "neet-pg",
    name: "National Eligibility cum Entrance Test (PG)",
    short: "NEET PG",
    conductedBy: "National Board of Examinations in Medical Sciences (NBEMS)",
    purpose: "Admission to postgraduate medical programmes (MD, MS, PG Diploma).",
    description:
      "Taken by MBBS graduates who want to specialise. Separate national tests exist for dental (NEET MDS) and super-speciality courses.",
    url: "https://natboard.edu.in",
  },
  "jee-main": {
    id: "jee-main",
    name: "Joint Entrance Examination (Main)",
    short: "JEE Main",
    conductedBy: "National Testing Agency (NTA)",
    purpose:
      "Admission to B.E./B.Tech (Paper 1) and B.Arch/B.Planning (Paper 2) at NITs, IIITs, other centrally funded institutes and many universities.",
    description:
      "A computer-based national exam held in sessions each year. Many private universities and state counselling bodies accept JEE Main scores, and it is also the qualifying step for JEE Advanced.",
    url: "https://jeemain.nta.nic.in",
  },
  "jee-advanced": {
    id: "jee-advanced",
    name: "Joint Entrance Examination (Advanced)",
    short: "JEE Advanced",
    conductedBy: "IITs (organising IIT rotates each year)",
    purpose: "Admission to undergraduate programmes at the IITs.",
    description:
      "Open only to top JEE Main qualifiers. Private universities generally do not require it, but strong students often attempt it alongside other options.",
    url: "https://jeeadv.ac.in",
  },
  gate: {
    id: "gate",
    name: "Graduate Aptitude Test in Engineering",
    short: "GATE",
    conductedBy: "IISc and the IITs (organising institute rotates each year)",
    purpose: "Admission to M.Tech/M.E. programmes and some PSU recruitment.",
    description:
      "A national test for engineering and science graduates. Several universities also run their own M.Tech entrance or interview for candidates without a GATE score. The official website changes with the organising institute each year.",
  },
  "cuet-ug": {
    id: "cuet-ug",
    name: "Common University Entrance Test (UG)",
    short: "CUET UG",
    conductedBy: "National Testing Agency (NTA)",
    purpose:
      "Admission to undergraduate programmes at central universities and many participating state, deemed and private universities.",
    description:
      "A computer-based test where students choose domain subjects that match the programme they are applying for. Whether a private university accepts CUET scores varies - check each university's notice.",
    url: "https://cuet.nta.nic.in",
  },
  "cuet-pg": {
    id: "cuet-pg",
    name: "Common University Entrance Test (PG)",
    short: "CUET PG",
    conductedBy: "National Testing Agency (NTA)",
    purpose: "Admission to postgraduate programmes at participating universities.",
    description:
      "Used for many M.Sc, MA and other PG programmes. Participation by private universities varies year to year.",
    url: "https://nta.ac.in",
  },
  gpat: {
    id: "gpat",
    name: "Graduate Pharmacy Aptitude Test",
    short: "GPAT",
    conductedBy: "National Board of Examinations in Medical Sciences (NBEMS)",
    purpose: "Admission to M.Pharm programmes and eligibility for related scholarships.",
    description:
      "A national test for B.Pharm graduates. Some universities also admit M.Pharm students through their own entrance test or merit.",
    url: "https://natboard.edu.in",
  },
  cat: {
    id: "cat",
    name: "Common Admission Test",
    short: "CAT",
    conductedBy: "Indian Institutes of Management (IIMs)",
    purpose: "Admission to MBA/PGP programmes at IIMs and many other B-schools.",
    description:
      "Tests verbal ability, data interpretation, logical reasoning and quantitative aptitude. Widely accepted by private universities for MBA admission.",
    url: "https://iimcat.ac.in",
  },
  mat: {
    id: "mat",
    name: "Management Aptitude Test",
    short: "MAT",
    conductedBy: "All India Management Association (AIMA)",
    purpose: "Admission to MBA and allied programmes at participating institutions.",
    description:
      "Held several times a year in paper-based and computer-based modes, which gives students more than one chance to apply.",
    url: "https://mat.aima.in",
  },
  cmat: {
    id: "cmat",
    name: "Common Management Admission Test",
    short: "CMAT",
    conductedBy: "National Testing Agency (NTA)",
    purpose: "Admission to AICTE-approved management programmes.",
    description: "A national computer-based test accepted by many AICTE-approved institutions and universities.",
    url: "https://cmat.nta.nic.in",
  },
  xat: {
    id: "xat",
    name: "Xavier Aptitude Test",
    short: "XAT",
    conductedBy: "XLRI Jamshedpur (on behalf of XAMI)",
    purpose: "Admission to management programmes at XLRI and other participating institutes.",
    description: "Known for its decision-making section. Accepted by a number of private B-schools and universities.",
    url: "https://xatonline.in",
  },
  nata: {
    id: "nata",
    name: "National Aptitude Test in Architecture",
    short: "NATA",
    conductedBy: "Council of Architecture (CoA)",
    purpose: "Tests aptitude for the five-year B.Arch programme.",
    description:
      "Assesses drawing, observation, aesthetic sensitivity and reasoning. A valid NATA score (or JEE Main Paper 2) is generally needed for B.Arch admission.",
    url: "https://www.nata.in",
  },
  clat: {
    id: "clat",
    name: "Common Law Admission Test",
    short: "CLAT",
    conductedBy: "Consortium of National Law Universities",
    purpose: "Admission to five-year integrated LLB (UG) and LLM (PG) at National Law Universities.",
    description:
      "Tests English, current affairs, legal reasoning, logical reasoning and quantitative techniques. Many private law schools also accept CLAT scores.",
    url: "https://consortiumofnlus.ac.in",
  },
  ailet: {
    id: "ailet",
    name: "All India Law Entrance Test",
    short: "AILET",
    conductedBy: "National Law University, Delhi",
    purpose: "Admission to BA LLB, LLM and PhD at NLU Delhi.",
    description: "NLU Delhi does not participate in CLAT and runs its own test. Relevant only if NLU Delhi is on your list.",
    url: "https://nationallawuniversitydelhi.in",
  },
  uceed: {
    id: "uceed",
    name: "Undergraduate Common Entrance Examination for Design",
    short: "UCEED",
    conductedBy: "IIT Bombay",
    purpose: "Admission to B.Des programmes at participating IITs and other institutes.",
    description:
      "Tests visualisation, observation, design sensitivity and drawing. Some private universities also consider UCEED scores.",
    url: "https://www.uceed.iitb.ac.in",
  },
  ceed: {
    id: "ceed",
    name: "Common Entrance Examination for Design",
    short: "CEED",
    conductedBy: "IIT Bombay",
    purpose: "Admission to M.Des and PhD design programmes at participating institutes.",
    description: "For graduates who want to pursue postgraduate design study.",
    url: "https://www.ceed.iitb.ac.in",
  },
  "nid-dat": {
    id: "nid-dat",
    name: "NID Design Aptitude Test",
    short: "NID DAT",
    conductedBy: "National Institute of Design",
    purpose: "Admission to B.Des and M.Des programmes at the NIDs.",
    description:
      "A two-stage test (prelims and mains). Good preparation for any design or animation entrance, including university-specific tests.",
    url: "https://admissions.nid.edu",
  },
  nift: {
    id: "nift",
    name: "NIFT Entrance Examination",
    short: "NIFT",
    conductedBy: "National Institute of Fashion Technology",
    purpose: "Admission to B.Des, B.FTech, M.Des, MFM and MFTech at NIFT campuses.",
    description: "Includes creative and general ability tests, followed by a situation test for design programmes.",
    url: "https://nift.ac.in",
  },
  "icar-pg": {
    id: "icar-pg",
    name: "ICAR AIEEA (PG)",
    short: "ICAR AIEEA PG",
    conductedBy: "National Testing Agency (NTA) for ICAR",
    purpose: "Admission to master's programmes in agriculture and allied sciences at agricultural universities.",
    description:
      "For B.Sc Agriculture and allied graduates. ICAR undergraduate seats are now filled through CUET UG scores.",
    url: "https://nta.ac.in",
  },
  "aiims-nursing": {
    id: "aiims-nursing",
    name: "AIIMS B.Sc Nursing Entrance",
    short: "AIIMS Nursing",
    conductedBy: "All India Institute of Medical Sciences, New Delhi",
    purpose: "Admission to B.Sc Nursing at AIIMS institutions.",
    description: "Relevant only for students targeting AIIMS. Private universities run their own process.",
    url: "https://www.aiimsexams.ac.in",
  },
  "state-cet": {
    id: "state-cet",
    name: "State Common Entrance Tests",
    short: "State CETs",
    conductedBy: "State entrance authorities",
    purpose: "State-quota admissions to colleges in that state.",
    description:
      "Many states run their own entrance tests and counselling (for example, for engineering, pharmacy and allied health). Rules, dates and official websites differ by state - we help you find the right one.",
  },
  university: {
    id: "university",
    name: "University-Specific Entrance Tests & Interviews",
    short: "University tests",
    conductedBy: "Individual universities",
    purpose: "Direct admission through the university's own process.",
    description:
      "Many private universities run their own entrance test, interview or merit-based admission in addition to accepting national scores. Our team will share the process for each university you shortlist.",
  },
};
