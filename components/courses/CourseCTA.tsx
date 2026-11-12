import type { Course } from "@/types/course";
import CourseEnquiryForm from "./CourseEnquiryForm";

/** Final section: closing headline + the course enquiry form. */
export default function CourseCTA({ course }: { course: Course }) {
  return (
    <section aria-labelledby="enquire-title" id="enquire" className="relative scroll-mt-24 overflow-hidden bg-[#F7F4EC]">
      <div className="pointer-events-none absolute -right-40 -bottom-40 size-[560px] rounded-full bg-[#C9A24D]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1440px] items-start gap-12 px-6 pt-8 pb-10 sm:pt-10 sm:pb-28 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:sticky lg:top-32 lg:col-span-5">
          <h2
            id="enquire-title"
            className="font-display text-[clamp(2.75rem,5.5vw,5rem)] leading-[1] tracking-tight text-[#111111]"
          >
            Your Future Starts With the <em className="text-[#C9A24D]">Right Choice.</em>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[#111111]/70">
            Submit your details and receive personalized admission guidance from the Install Your Career team.
          </p>
        </div>

        <div id="enquiry-form" className="scroll-mt-28 lg:col-span-7 lg:mt-10">
          <CourseEnquiryForm course={course.name} programs={course.programs.map((p) => p.name)} />
        </div>
      </div>
    </section>
  );
}
