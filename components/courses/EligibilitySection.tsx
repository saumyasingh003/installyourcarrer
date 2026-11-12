import { Info } from "lucide-react";
import type { Course } from "@/types/course";
import SectionHeading from "./SectionHeading";

export default function EligibilitySection({ course }: { course: Course }) {
  return (
    <section aria-labelledby="eligibility-title" id="eligibility" className="scroll-mt-40 bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-10 sm:pt-10 sm:pb-24 lg:px-10">
        <SectionHeading
          id="eligibility-title"
          num="02"
          label="CHECK ELIGIBILITY"
          title="Who can"
          accent="apply"
          intro="Understand the qualification, subjects and minimum marks you need."
        />

        <div className="mt-10 space-y-12">
          {course.eligibility.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-3xl text-[#111111]">{group.title}</h3>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => {
                  return (
                    <li
                      key={item.label}
                      className="rounded-2xl bg-[#F7F4EC] p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div>
                        <p className="font-semibold text-[#111111]">{item.label}</p>
                        <p className="mt-1 text-sm leading-relaxed text-[#111111]/70">{item.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 flex items-center gap-2 text-sm text-[#111111]/55">
          <Info className="size-4 shrink-0 text-[#C9A24D]" />
          General guidance only - rules vary by university and change every year.
        </p>
      </div>
    </section>
  );
}
