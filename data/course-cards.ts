// Course cards shared by the /courses explorer and the home page showcase.
// The order + sizes tile a 4-column bento grid exactly.

export type CardSize = "big" | "tall" | "wide" | "small";

export type CourseCategory = "Health Sciences" | "Engineering & Design" | "Business, Law & Agriculture";

export const COURSE_CATEGORIES: CourseCategory[] = [
  "Health Sciences",
  "Engineering & Design",
  "Business, Law & Agriculture",
];

export interface CourseCard {
  name: string;
  slug: string;
  category: CourseCategory;
  size: CardSize;
  text: string;
  programs: string[];
}

export const COURSE_CARDS: CourseCard[] = [
  { name: "Engineering", slug: "engineering", category: "Engineering & Design", size: "big", text: "Build the technology of tomorrow across core and emerging branches.", programs: ["B.Tech", "M.Tech", "Diploma"] },
  { name: "Medical", slug: "medical", category: "Health Sciences", size: "tall", text: "Begin your journey to becoming a doctor at a recognised institution.", programs: ["MBBS", "BDS", "BAMS", "BHMS"] },
  { name: "Pharmacy", slug: "pharmacy", category: "Health Sciences", size: "small", text: "Learn the science of medicines, research and healthcare.", programs: ["B.Pharm", "D.Pharm", "M.Pharm"] },
  { name: "Nursing", slug: "nursing", category: "Health Sciences", size: "small", text: "A caring, in-demand profession with strong career growth.", programs: ["B.Sc Nursing", "GNM", "ANM"] },
  { name: "Management", slug: "management", category: "Business, Law & Agriculture", size: "wide", text: "Develop business, leadership and entrepreneurial skills.", programs: ["BBA", "MBA", "PGDM"] },
  { name: "Architecture", slug: "architecture", category: "Engineering & Design", size: "tall", text: "Combine creativity and engineering to design spaces and cities.", programs: ["B.Arch", "M.Arch"] },
  { name: "Animation", slug: "animation", category: "Engineering & Design", size: "small", text: "Turn imagination into film, games and visual effects.", programs: ["B.Sc Animation", "VFX", "Game Design"] },
  { name: "Agriculture", slug: "agriculture", category: "Business, Law & Agriculture", size: "small", text: "Shape the future of farming, food and sustainability.", programs: ["B.Sc Agriculture", "M.Sc Agriculture"] },
  { name: "Physiotherapy", slug: "physiotherapy", category: "Health Sciences", size: "small", text: "Help people recover movement, strength and quality of life.", programs: ["BPT", "MPT"] },
  { name: "Paramedical", slug: "paramedical", category: "Health Sciences", size: "tall", text: "Fast-growing allied health careers in labs, imaging and care.", programs: ["BMLT", "B.Sc Radiology", "OT Technology"] },
  { name: "Design", slug: "design", category: "Engineering & Design", size: "wide", text: "Creative careers in fashion, interiors, product and graphics.", programs: ["B.Des", "Fashion Design", "Interior Design"] },
  { name: "Law", slug: "law", category: "Business, Law & Agriculture", size: "small", text: "Build a respected career in legal practice, corporate law and more.", programs: ["BA LLB", "BBA LLB", "LLB", "LLM"] },
];

export const CARD_SPAN: Record<CardSize, string> = {
  big: "sm:col-span-2 sm:row-span-2",
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  small: "",
};

export const CARD_CORNERS: Record<CardSize, string> = {
  big: "rounded-2xl rounded-tl-[4rem] rounded-br-[4rem]",
  tall: "rounded-2xl rounded-tr-[3.5rem]",
  wide: "rounded-2xl rounded-bl-[3.5rem]",
  small: "rounded-2xl",
};

/** Card / hero photo for a course. Change here to swap the whole site's course imagery. */
export const courseImage = (slug: string) => IMAGE_OVERRIDES[slug] ?? `/courses/v2/${slug}.jpg`;

/** Courses whose photo file has a custom name (e.g. renamed to bust the browser cache). */
const IMAGE_OVERRIDES: Record<string, string> = {
  nursing: "/courses/v2/nursing-care.jpg",
  animation: "/courses/v2/animation-3d.jpg",
};
