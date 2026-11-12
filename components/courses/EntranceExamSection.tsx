import { ArrowUpRight } from "lucide-react";
import type { Course } from "@/types/course";
import { EXAMS } from "@/data/exams";
import SectionHeading from "./SectionHeading";

export default function EntranceExamSection({ course }: { course: Course }) {
  const exams = course.exams.flatMap((e) => (EXAMS[e.id] ? [{ ...EXAMS[e.id], who: e.who }] : []));

  return (
    <section aria-labelledby="exams-title" id="exams" className="scroll-mt-40 bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-10 sm:pt-10 sm:pb-24 lg:px-10">
        <SectionHeading
          id="exams-title"
          num="03"
          label="ENTRANCE EXAMINATIONS"
          title="Exams to"
          accent="know"
          intro="The entrance exams accepted for this course."
        />

        <ul className="mt-12 border-t border-[#C9A24D]/30">
          {exams.map((exam) => (
            <li
              key={exam.id}
              className="grid gap-3 border-b border-[#C9A24D]/30 py-7 sm:grid-cols-12 sm:items-center sm:gap-8"
            >
              <div className="sm:col-span-3">
                <h3 className="font-display text-3xl leading-none text-[#111111]">{exam.short}</h3>
                <p className="mt-1.5 text-sm text-[#111111]/50">{exam.conductedBy}</p>
              </div>

              <p className="text-[15px] leading-relaxed text-[#111111]/75 sm:col-span-7">{exam.who}</p>

              <div className="sm:col-span-2 sm:text-right">
                {exam.url && (
                  <a
                    href={exam.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#C9A24D] transition-colors hover:text-[#111111]"
                  >
                    Official website
                    <ArrowUpRight className="size-4" />
                    <span className="sr-only"> for {exam.short} (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
