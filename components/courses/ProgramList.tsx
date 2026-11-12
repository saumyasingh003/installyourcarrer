import type { Course } from "@/types/course";
import SectionHeading from "./SectionHeading";
import EnquireButton from "./EnquireButton";

const th = "px-4 py-4 text-left text-[11px] font-bold tracking-[0.2em] text-[#C9A24D] uppercase";
/** "5.5 years incl. 1-year internship" -> "5.5 years" */
const shortDuration = (d: string) => d.replace(/\s*incl\..*$/i, "").trim();

const td = "px-4 py-5 align-top text-sm leading-relaxed text-[#111111]/80";

export default function ProgramList({ course }: { course: Course }) {
  return (
    <section aria-labelledby="programs-title" id="programs" className="scroll-mt-40 bg-[#F7F4EC]">
      <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-10 sm:pt-10 sm:pb-24 lg:px-10">
        <SectionHeading
          id="programs-title"
          num="01"
          label="EXPLORE AVAILABLE PROGRAMS"
          title="Available"
          accent="programs"
          intro={`Discover ${course.name.toLowerCase()} courses, degrees and specializations. Exact programme names, durations and intake differ between universities.`}
        />

        {/* Tablet & desktop: table */}
        <div className="mt-10 hidden overflow-hidden rounded-3xl bg-[#FFFFFF] shadow-sm ring-1 ring-[#111111]/5 md:block">
          <table className="w-full border-collapse">
            <caption className="sr-only">{course.name} programmes</caption>
            <thead className="bg-[#111111]">
              <tr>
                <th scope="col" className={`${th} w-[6%] text-center`}>
                  S.No.
                </th>
                <th scope="col" className={`${th} w-[24%]`}>
                  Programme
                </th>
                <th scope="col" className={`${th} w-[10%]`}>
                  Degree
                </th>
                <th scope="col" className={`${th} w-[10%]`}>
                  Level
                </th>
                <th scope="col" className={`${th} w-[15%]`}>
                  Duration
                </th>
                <th scope="col" className={`${th} w-[19%]`}>
                  Qualification
                </th>
                <th scope="col" className={th}>
                  Entrance
                </th>
                <th scope="col" className={th}>
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {course.programs.map((p, i) => (
                <tr
                  key={p.name}
                  className="border-t border-[#111111]/5 transition-colors odd:bg-[#FFFFFF] even:bg-[#F7F4EC]/60 hover:bg-[#C9A24D]/10"
                >
                  <td className="px-4 py-5 text-center align-top font-number text-base font-bold text-[#C9A24D] lining-nums tabular-nums">
                    {i + 1}
                  </td>
                  <th scope="row" className="px-4 py-5 text-left align-top font-normal">
                    <p className="font-display text-xl leading-snug text-[#111111] lg:text-[1.4rem]">{p.name}</p>
                  </th>
                  <td className={`${td} font-semibold text-[#111111]`}>{p.degree}</td>
                  <td className={td}>{p.level}</td>
                  <td className={td}>{shortDuration(p.duration)}</td>
                  <td className={td}>{p.qualification}</td>
                  <td className={td}>{p.entrance ?? "Varies by university"}</td>
                  <td className={`${td} text-right whitespace-nowrap`}>
                    <EnquireButton program={p.name} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Phones: stacked cards with the same details */}
        <ul className="-mx-5 mt-8 space-y-4 md:hidden">
          {course.programs.map((p, i) => (
            <li key={p.name} className="overflow-hidden rounded-2xl bg-[#FFFFFF] shadow-sm ring-1 ring-[#111111]/5">
              <div className="flex items-start gap-3 bg-[#111111] px-4 py-4">
                <span className="pt-0.5 font-number text-xs font-bold text-[#C9A24D] lining-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-xl leading-snug text-[#FFFFFF]">{p.name}</p>
                </div>
              </div>
              <dl className="divide-y divide-[#111111]/5 text-sm">
                {[
                  ["Degree", p.degree],
                  ["Level", p.level],
                  ["Duration", shortDuration(p.duration)],
                  ["Qualification", p.qualification],
                  ["Entrance", p.entrance ?? "Varies by university"],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[104px_1fr] gap-3 px-4 py-3">
                    <dt className="text-[11px] font-bold tracking-[0.15em] text-[#C9A24D] uppercase">{label}</dt>
                    <dd className="text-[#111111]/80">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex justify-center border-t border-[#111111]/5 px-4 py-3">
                <EnquireButton program={p.name} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
