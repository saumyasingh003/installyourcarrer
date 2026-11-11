import { Plus } from "lucide-react";
import type { Course } from "@/types/course";
import SectionHeading from "./SectionHeading";

/** Only the main questions are shown; order in data/courses/* decides which. */
export const MAX_FAQS = 5;

export default function CourseFAQ({ course }: { course: Course }) {
  return (
    <section aria-labelledby="faq-title" id="faq" className="scroll-mt-36 bg-[#F7F4EC]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-40">
            <SectionHeading
              id="faq-title"
              num="09"
              label="FAQS"
              title={`${course.name}`}
              accent="questions"
              intro="What students and parents usually ask us. Rules change every admission year, so treat these as general guidance."
            />
          </div>
        </div>

        <ul className="border-t border-[#C9A24D]/30 lg:col-span-8">
          {course.faqs.slice(0, MAX_FAQS).map((item, i) => (
            <li key={item.q} className="border-b border-[#C9A24D]/30">
              <details name="course-faq" className="group">
                <summary className="flex cursor-pointer list-none items-center gap-4 py-6 sm:gap-5 [&::-webkit-details-marker]:hidden">
                  <span className="w-7 shrink-0 font-number text-sm font-bold text-[#C9A24D] lining-nums tabular-nums sm:w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-2xl leading-snug text-[#111111] transition-colors group-open:text-[#C9A24D] group-hover:text-[#C9A24D] sm:text-[1.75rem]">
                    {item.q}
                  </span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#111111]/15 text-[#111111] transition-all duration-300 group-open:rotate-45 group-open:border-[#C9A24D] group-open:bg-[#C9A24D] group-open:text-[#FFFFFF] group-hover:border-[#C9A24D]">
                    <Plus className="size-4" strokeWidth={1.75} />
                  </span>
                </summary>
                <p className="max-w-2xl pr-12 pb-7 pl-11 text-[15px] leading-relaxed text-[#111111]/65 sm:pl-[3.25rem] sm:text-base">
                  {item.a}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
