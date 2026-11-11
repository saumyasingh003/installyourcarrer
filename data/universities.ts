import type { CourseSlug, PartnerUniversity } from "@/types/course";

/**
 * Verified partner universities of Install Your Career.
 *
 * Add a university here ONLY when the partnership is confirmed and every field has been
 * checked against the university's own website or the regulator (NAAC, UGC, NMC, etc.).
 * Do not add logos without permission, and leave `hostel` undefined unless verified.
 *
 * Fees go under offerings[].fees[programName] and must include the academic year and a
 * source URL. Course pages automatically show these universities, filters and fee tables
 * when data exists, and fall back to a "contact our team" message when it does not.
 *
 * Example entry (structure only - not a real partner):
 *
 * {
 *   id: "example-university",
 *   name: "Example University",
 *   city: "Patna",
 *   state: "Bihar",
 *   logo: "/universities/example/logo.png",
 *   campusImage: "/universities/example/campus.jpg",
 *   accreditation: ["NAAC A++", "UGC recognised"],
 *   facilities: ["Central library", "Labs", "Sports complex"],
 *   hostel: true,
 *   website: "https://www.example.edu.in",
 *   offerings: [
 *     {
 *       course: "engineering",
 *       programs: ["B.Tech Computer Science and Engineering"],
 *       levels: ["Undergraduate"],
 *       fees: {
 *         "B.Tech Computer Science and Engineering": {
 *           academicYear: "2026–27",
 *           annualTuition: "₹0,00,000",
 *           sourceUrl: "https://www.example.edu.in/fees",
 *         },
 *       },
 *     },
 *   ],
 * }
 */
export const PARTNER_UNIVERSITIES: PartnerUniversity[] = [];

export function getUniversitiesForCourse(slug: CourseSlug) {
  return PARTNER_UNIVERSITIES.flatMap((u) => {
    const offering = u.offerings.find((o) => o.course === slug);
    return offering ? [{ university: u, offering }] : [];
  });
}
