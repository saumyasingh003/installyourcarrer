import { Check } from "lucide-react";
import type { Course } from "@/types/course";
import SectionHeading from "./SectionHeading";

export default function CourseOverview({ course }: { course: Course }) {
  const { overview } = course;

  return (
    <section aria-labelledby="overview-title" id="overview" className="scroll-mt-40 bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading id="overview-title" num="01" label="COURSE OVERVIEW" title={`About ${course.name}`} accent="studies" />
            <p className="mt-8 font-display text-2xl leading-snug text-[#111111] italic sm:text-[1.75rem]">
              {overview.what}
            </p>
          </div>

          <div className="space-y-12 lg:col-span-7 lg:pt-16">
            <div>
              <h3 className="text-xs font-bold tracking-[0.25em] text-[#C9A24D]">WHAT YOU WILL LEARN</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-[#111111]/75">{overview.learn}</p>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-[0.25em] text-[#C9A24D]">KEY SUBJECTS</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {overview.subjects.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-[#111111]/15 px-4 py-1.5 text-sm text-[#111111] transition-colors hover:border-[#C9A24D] hover:text-[#C9A24D]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-[0.25em] text-[#C9A24D]">WHO SHOULD CONSIDER IT</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {overview.whoShouldConsider.map((w) => (
                  <li key={w} className="flex gap-3 text-[15px] leading-relaxed text-[#111111]/75">
                    <Check className="mt-1 size-4 shrink-0 text-[#C9A24D]" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="grid gap-8 border-t border-[#C9A24D]/30 pt-8 sm:grid-cols-2">
              <div>
                <dt className="font-display text-2xl text-[#111111]">Undergraduate</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-[#111111]/70">{overview.levels.ug}</dd>
              </div>
              {overview.levels.pg && (
                <div>
                  <dt className="font-display text-2xl text-[#111111]">Postgraduate</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-[#111111]/70">{overview.levels.pg}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
