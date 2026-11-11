import type { CourseSlug } from "@/types/course";

/**
 * INDICATIVE fee ranges shown on course pages until verified partner-university fees
 * are added in data/universities.ts (those replace this guide automatically).
 *
 * These are approximate annual tuition ranges at private universities in India, for
 * planning only - NOT quotes from any specific university. Review and update them with
 * the admission team every academic year.
 */

export const FEE_GUIDE_YEAR = "2025–26";

export interface FeeGuideRow {
  program: string;
  /** Approximate annual tuition range, e.g. "₹1.5 – 4.5 lakh". */
  annual: string;
}

export const HOSTEL_RANGE = "₹60,000 – 1.5 lakh / year (incl. mess, varies by room type)";

export const FEE_GUIDE: Record<CourseSlug, FeeGuideRow[]> = {
  engineering: [
    { program: "B.Tech CSE / AI & Data Science", annual: "₹1.5 – 4.5 lakh" },
    { program: "B.Tech core branches (Mechanical, Civil, Electrical, ECE)", annual: "₹1 – 3.5 lakh" },
    { program: "Diploma in Engineering", annual: "₹40,000 – 1 lakh" },
    { program: "M.Tech", annual: "₹80,000 – 2.5 lakh" },
  ],
  medical: [
    { program: "MBBS (private / deemed university)", annual: "₹12 – 30 lakh" },
    { program: "BDS", annual: "₹3 – 9 lakh" },
    { program: "BAMS", annual: "₹2 – 5 lakh" },
    { program: "BHMS / BUMS", annual: "₹1.5 – 3.5 lakh" },
  ],
  pharmacy: [
    { program: "D.Pharm", annual: "₹60,000 – 1.2 lakh" },
    { program: "B.Pharm", annual: "₹80,000 – 2 lakh" },
    { program: "Pharm.D", annual: "₹1.2 – 2.5 lakh" },
    { program: "M.Pharm", annual: "₹1 – 2.5 lakh" },
  ],
  nursing: [
    { program: "B.Sc Nursing", annual: "₹80,000 – 2.5 lakh" },
    { program: "Post Basic B.Sc Nursing", annual: "₹60,000 – 1.5 lakh" },
    { program: "ANM", annual: "₹40,000 – 80,000" },
    { program: "M.Sc Nursing", annual: "₹1 – 2.5 lakh" },
  ],
  management: [
    { program: "BBA", annual: "₹1 – 3.5 lakh" },
    { program: "Integrated BBA + MBA", annual: "₹1.5 – 4 lakh" },
    { program: "MBA", annual: "₹1.5 – 8 lakh" },
  ],
  architecture: [
    { program: "B.Arch", annual: "₹1.5 – 4.5 lakh" },
    { program: "B.Plan", annual: "₹1 – 3 lakh" },
    { program: "M.Arch", annual: "₹1.5 – 3.5 lakh" },
  ],
  animation: [
    { program: "B.Sc Animation & VFX", annual: "₹1 – 3 lakh" },
    { program: "B.Des Animation", annual: "₹2 – 5 lakh" },
    { program: "Diploma / Certificate in Animation", annual: "₹60,000 – 1.5 lakh" },
  ],
  agriculture: [
    { program: "B.Sc (Hons) Agriculture / Horticulture", annual: "₹80,000 – 2 lakh" },
    { program: "B.Tech Agricultural Engineering", annual: "₹1 – 2.5 lakh" },
    { program: "M.Sc Agriculture", annual: "₹1 – 2.5 lakh" },
  ],
  physiotherapy: [
    { program: "BPT", annual: "₹80,000 – 2.5 lakh" },
    { program: "MPT", annual: "₹1 – 3 lakh" },
  ],
  paramedical: [
    { program: "B.Sc MLT / Radiology / OT Technology", annual: "₹60,000 – 1.8 lakh" },
    { program: "B.Optom", annual: "₹70,000 – 2 lakh" },
    { program: "DMLT", annual: "₹40,000 – 1 lakh" },
  ],
  design: [
    { program: "B.Des (Fashion, Interior, Product, Communication)", annual: "₹2 – 5 lakh" },
    { program: "B.Sc Fashion / Interior Design", annual: "₹1 – 2.5 lakh" },
    { program: "M.Des", annual: "₹2 – 5 lakh" },
  ],
  law: [
    { program: "BA LLB / BBA LLB (5 years)", annual: "₹1.5 – 4.5 lakh" },
    { program: "LLB (3 years)", annual: "₹70,000 – 2.5 lakh" },
    { program: "LLM", annual: "₹1 – 3 lakh" },
  ],
};

/** Real, widely available funding routes (not tied to any one university). */
export const FUNDING_OPTIONS = [
  {
    title: "University merit scholarships",
    text: "Most private universities offer tuition waivers based on Class 12 marks or entrance scores.",
  },
  {
    title: "National Scholarship Portal",
    text: "Central and state post-matric and merit scholarships for eligible students.",
    url: "https://scholarships.gov.in",
  },
  {
    title: "Bihar Student Credit Card",
    text: "Education loan support for eligible students from Bihar under the 7 Nischay scheme.",
    url: "https://www.7nishchay-yuvaupmission.bihar.gov.in",
  },
  {
    title: "Education loans & instalments",
    text: "Bank education loans, and semester-wise fee payment where the university allows it.",
  },
];
