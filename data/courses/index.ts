import type { Course, CourseSlug } from "@/types/course";
import { engineering } from "./engineering";
import { medical } from "./medical";
import { pharmacy } from "./pharmacy";
import { nursing } from "./nursing";
import { management } from "./management";
import { architecture } from "./architecture";
import { animation } from "./animation";
import { agriculture } from "./agriculture";
import { physiotherapy } from "./physiotherapy";
import { paramedical } from "./paramedical";
import { design } from "./design";
import { law } from "./law";

// Order matches the course grid on /courses.
export const COURSES: Course[] = [
  engineering,
  medical,
  pharmacy,
  nursing,
  management,
  architecture,
  animation,
  agriculture,
  physiotherapy,
  paramedical,
  design,
  law,
];

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export const COURSE_SLUGS = COURSES.map((c) => c.slug) as CourseSlug[];
