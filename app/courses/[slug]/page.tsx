import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COURSES, getCourse } from "@/data/courses";
import { getUniversitiesForCourse } from "@/data/universities";
import CourseHero from "@/components/courses/CourseHero";
import CourseSectionNav from "@/components/courses/CourseSectionNav";
import ProgramList from "@/components/courses/ProgramList";
import EligibilitySection from "@/components/courses/EligibilitySection";
import EntranceExamSection from "@/components/courses/EntranceExamSection";
import UniversitySection from "@/components/courses/UniversitySection";
import FeesSection from "@/components/courses/FeesSection";
import CourseCTA from "@/components/courses/CourseCTA";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: `${course.seo.title} | InstallYourCareer`,
    description: course.seo.description,
    // Add `metadataBase` in app/layout.tsx once the domain is live to enable canonical URLs and OG images.
    openGraph: {
      title: course.seo.title,
      description: course.seo.description,
      type: "website",
    },
  };
}

export default async function CoursePage({ params }: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const universities = getUniversitiesForCourse(course.slug);

  return (
    <main className="w-full bg-[#F7F4EC]">
      <CourseHero course={course} />
      <CourseSectionNav />
      <ProgramList course={course} />
      <EligibilitySection course={course} />
      <EntranceExamSection course={course} />
      <UniversitySection
        courseName={course.name}
        programs={course.programs.map((p) => p.name)}
        entries={universities}
      />
      <FeesSection slug={course.slug} entries={universities} />
      <CourseCTA course={course} />
    </main>
  );
}
