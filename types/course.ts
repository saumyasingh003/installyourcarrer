// Shared types for the course detail pages (/courses/[slug]).
// Content lives in data/courses/*, partner data in data/universities.ts.

export type CourseSlug =
  | "engineering"
  | "medical"
  | "pharmacy"
  | "nursing"
  | "management"
  | "architecture"
  | "animation"
  | "agriculture"
  | "physiotherapy"
  | "paramedical"
  | "design"
  | "law";

export type DegreeLevel = "Diploma" | "Undergraduate" | "Postgraduate" | "Integrated";

export interface Program {
  name: string;
  /** e.g. "B.Tech", "MBBS", "BA LLB" */
  degree: string;
  level: DegreeLevel;
  /** Typical duration, e.g. "4 years". Wording should allow for variation where it exists. */
  duration: string;
  /** Basic qualification in plain words (no invented percentages). */
  qualification: string;
  /** Entrance route in plain words, e.g. "NEET UG". */
  entrance?: string;
}

export interface EligibilityItem {
  label: string;
  text: string;
}

export interface Eligibility {
  /** Programme group the rules apply to, e.g. "MBBS / BDS". */
  title: string;
  items: EligibilityItem[];
}

/** Id of an exam in data/exams.ts */
export type ExamId = string;

export interface CourseExam {
  id: ExamId;
  /** Course-specific "who should appear" guidance. */
  who: string;
}

export interface CareerPath {
  title: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Course {
  slug: CourseSlug;
  name: string;
  /** Small label above the hero heading, e.g. "UNDERGRADUATE & POSTGRADUATE PROGRAMS". */
  category: string;
  /** 5–7 word hero headline. The last `accentWords` words render in gold. */
  headline: string;
  accentWords?: number;
  intro: string;
  image: { src: string; alt: string; position?: string };
  seo: { title: string; description: string };

  overview: {
    what: string;
    learn: string;
    subjects: string[];
    whoShouldConsider: string[];
    levels: { ug: string; pg?: string };
  };

  programs: Program[];
  eligibility: Eligibility[];
  exams: CourseExam[];
  careers: CareerPath[];
  higherStudies: string[];
  faqs: Faq[];
}

export interface Exam {
  id: ExamId;
  name: string;
  /** Short name used in chips, e.g. "NEET UG". */
  short: string;
  conductedBy: string;
  purpose: string;
  description: string;
  /** Official website. Omitted when the URL changes every cycle (e.g. GATE) or the exam is state/university specific. */
  url?: string;
}

/* ── Partner universities (verified data only) ───────────────────── */

export interface FeeRecord {
  /** Academic year the figures apply to, e.g. "2026–27". Required, so stale fees are obvious. */
  academicYear: string;
  /** Amounts as published by the university, already formatted, e.g. "₹2,40,000". */
  annualTuition?: string;
  totalProgramFee?: string;
  hostelFee?: string;
  otherCharges?: string;
  scholarships?: string[];
  paymentOptions?: string[];
  /** Where the figures were verified (university fee notice URL). */
  sourceUrl: string;
}

export interface UniversityOffering {
  course: CourseSlug;
  /** Program names as the university lists them. */
  programs: string[];
  levels: DegreeLevel[];
  fees?: Record<string, FeeRecord>; // keyed by program name
}

export interface PartnerUniversity {
  id: string;
  name: string;
  city: string;
  state: string;
  logo?: string; // path under /public, only the university's own logo with permission
  campusImage?: string;
  /** Only claims that can be checked on the regulator's site, e.g. "NAAC A++ (valid till 2029)". */
  accreditation: string[];
  facilities: string[];
  /** Leave undefined unless verified with the university. */
  hostel?: boolean;
  website: string;
  offerings: UniversityOffering[];
}
