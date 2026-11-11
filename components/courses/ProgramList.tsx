import type { Course } from "@/types/course";
import SectionHeading from "./SectionHeading";
import EnquireButton from "./EnquireButton";

export default function ProgramList({ course }: { course: Course }) {
  return (
    <section aria-labelledby="programs-title" id="programs" className="scroll-mt-36 bg-[#F7F4EC]">
      <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-20 sm:pt-14 sm:pb-24 lg:px-10">
        <SectionHeading
          id="programs-title"
          num="01"
          label="EXPLORE AVAILABLE PROGRAMS"
          title="Available"
          accent="programs"
          intro={`Discover ${course.name.toLowerCase()} courses, degrees and specializations. Exact programme names, durations and intake differ between universities.`}
        />

        <ul className="mt-12 border-t border-[#C9A24D]/30">
          {course.programs.map((p, i) => (
            <li
              key={p.name}
              className="group grid gap-4 border-b border-[#C9A24D]/30 py-7 transition-colors hover:bg-[#FFFFFF]/60 sm:px-4 lg:grid-cols-12 lg:items-center lg:gap-8"
            >
              <div className="flex gap-5 lg:col-span-5">
                <span className="w-7 shrink-0 pt-1 font-number text-sm font-bold text-[#C9A24D] lining-nums tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-[#C9A24D]">
                    {p.degree} · {p.level.toUpperCase()}
                  </p>
                  <h3 className="mt-1.5 font-display text-2xl leading-snug text-[#111111] transition-colors group-hover:text-[#C9A24D] sm:text-[1.75rem]">
                    {p.name}
                  </h3>
                </div>
              </div>

              <dl className="grid gap-x-6 gap-y-3 pl-12 text-sm sm:grid-cols-3 lg:col-span-6 lg:pl-0">
                <div>
                  <dt className="text-[#111111]/45">Duration</dt>
                  <dd className="mt-0.5 text-[#111111]">{p.duration}</dd>
                </div>
                <div>
                  <dt className="text-[#111111]/45">Qualification</dt>
                  <dd className="mt-0.5 text-[#111111]">{p.qualification}</dd>
                </div>
                <div>
                  <dt className="text-[#111111]/45">Entrance</dt>
                  <dd className="mt-0.5 text-[#111111]">{p.entrance ?? "Varies by university"}</dd>
                </div>
              </dl>

              <div className="pl-12 lg:col-span-1 lg:pl-0 lg:text-right">
                <EnquireButton program={p.name} className="lg:whitespace-nowrap" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
