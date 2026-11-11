import type { Course } from "@/types/course";
import CourseEnquiryForm from "./CourseEnquiryForm";

/** Final section: closing headline + the course enquiry form. */
export default function CourseCTA({ course }: { course: Course }) {
  return (
    <section aria-labelledby="enquire-title" id="enquire" className="relative scroll-mt-24 overflow-hidden bg-[#F7F4EC]">
      <div className="pointer-events-none absolute -right-40 -bottom-40 size-[560px] rounded-full bg-[#C9A24D]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1440px] items-start gap-12 px-6 pt-12 pb-20 sm:pt-14 sm:pb-28 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:sticky lg:top-32 lg:col-span-5">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-[#C9A24D]">
            <span className="font-number text-sm lining-nums">06</span>
            <span className="h-px w-8 bg-[#C9A24D]" />
            ADMISSION ENQUIRY
          </p>
          <h2
            id="enquire-title"
            className="mt-5 font-display text-[clamp(2.75rem,5.5vw,5rem)] leading-[0.95] tracking-tight text-[#111111] uppercase"
          >
            Your future starts with the <em className="text-[#C9A24D]">right choice.</em>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[#111111]/70">
            Submit your details and receive personalized admission guidance from the Install Your Career team.
          </p>
        </div>

        <div id="enquiry-form" className="scroll-mt-28 lg:col-span-7">
          <CourseEnquiryForm course={course.name} programs={course.programs.map((p) => p.name)} />
        </div>
      </div>
    </section>
  );
}
