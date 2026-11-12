import type { Course } from "@/types/course";
import SectionHeading from "./SectionHeading";

export default function CareerOpportunities({ course }: { course: Course }) {
  return (
    <section aria-labelledby="careers-title" id="careers" className="scroll-mt-40 bg-[#F7F4EC]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              id="careers-title"
              num="07"
              label="CAREER OPPORTUNITIES"
              title="Where it can"
              accent="lead"
              intro="Possible paths after graduation. Outcomes depend on your skills, specialisation, further study and the job market - no course guarantees placement or salary."
            />
          </div>

          <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {course.careers.map((c, i) => (
              <li key={c.title} className="group border-t border-[#C9A24D]/30 py-7">
                <span className="font-number text-sm font-bold text-[#C9A24D] lining-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-3xl leading-tight text-[#111111] transition-transform duration-300 group-hover:translate-x-1">
                  {c.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#111111]/65">{c.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {course.higherStudies.length > 0 && (
          <div className="mt-16 flex flex-col gap-5 rounded-tl-[3rem] rounded-tr-lg rounded-br-[3rem] rounded-bl-lg bg-[#111111] p-8 sm:p-10 lg:flex-row lg:items-center lg:gap-10">
            <p className="shrink-0 font-display text-3xl text-[#FFFFFF]">
              Higher <em className="text-[#C9A24D]">studies</em>
            </p>
            <ul className="flex flex-wrap gap-2">
              {course.higherStudies.map((h) => (
                <li key={h} className="rounded-full border border-[#C9A24D]/40 px-4 py-1.5 text-sm text-[#F7F4EC]">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
