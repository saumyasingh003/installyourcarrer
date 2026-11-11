import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";

// TODO: review answers (especially partner universities) with the team before going live
const FAQS = [
  {
    q: "What services does Install Your Career provide?",
    a: "We offer career counselling, admission guidance, college selection, entrance exam guidance, and help with scholarships and education loans - supporting you from the first conversation all the way to final admission.",
  },
  {
    q: "Which universities do you partner with?",
    a: "We are a channel partner of top private universities accredited by NAAC A++ grade across India. Contact us and we'll share the current list of partner universities that match your course and budget.",
  },
  {
    q: "What courses can I get admission into?",
    a: "We guide students in Engineering, Medical, Pharmacy, Nursing, Management, Architecture, Animation, Agriculture, Physiotherapy, Paramedical, Design, Law and many other professional programmes.",
  },
  {
    q: "How can I choose the right university?",
    a: "Our counsellors look at your interests, academic scores, budget and preferred location, then compare universities on accreditation, placements, fees and facilities - so you can shortlist the ones that truly fit you.",
  },
  {
    q: "What documents are required for admission?",
    a: "Usually: 10th and 12th mark sheets and certificates, entrance exam scorecard (if applicable), transfer and migration certificates, ID proof such as Aadhaar, passport-size photographs, and category or income certificates where applicable. Exact requirements vary by university - we'll give you a checklist.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full bg-[#F7F4EC]">
      <div className="grid w-full gap-10 px-6 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-20 lg:grid-cols-12 lg:gap-16 lg:px-12 2xl:px-20">
        {/* Heading column */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-[#111111] sm:text-6xl">
              Frequently asked <em className="text-[#C9A24D]">questions</em>
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#111111]/65">
              Everything students and parents usually ask us. Can&apos;t find your answer? We&apos;re
              happy to help.
            </p>
            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#111111] px-7 py-3 text-sm font-semibold text-[#F7F4EC] transition hover:bg-[#C9A24D] hover:text-[#111111]"
            >
              Ask a Question
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Questions */}
        <div className="lg:col-span-8">
          <ul className="border-t border-[#C9A24D]/30">
            {FAQS.map((item, i) => (
              <li key={item.q} className="border-b border-[#C9A24D]/30">
                <details name="faq" className="group">
                  <summary className="flex cursor-pointer list-none items-center gap-4 py-6 sm:gap-5 sm:py-7 [&::-webkit-details-marker]:hidden">
                    <span className="w-7 shrink-0 font-number text-sm font-bold tracking-wider text-[#C9A24D] lining-nums tabular-nums sm:w-8 sm:text-base">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-2xl leading-snug text-[#111111] transition-colors group-open:text-[#C9A24D] group-hover:text-[#C9A24D] sm:text-[1.9rem]">
                      {item.q}
                    </span>
                    <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full border border-[#111111]/15 text-[#111111] transition-all duration-300 group-open:rotate-45 group-open:border-[#C9A24D] group-open:bg-[#C9A24D] group-open:text-[#FFFFFF] group-hover:border-[#C9A24D]">
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
      </div>
    </section>
  );
}
