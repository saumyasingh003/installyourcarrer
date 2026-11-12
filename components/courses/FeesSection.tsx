import { ArrowUpRight, ReceiptText } from "lucide-react";
import type { CourseSlug, FeeRecord, PartnerUniversity, UniversityOffering } from "@/types/course";
import { FEE_GUIDE, FEE_GUIDE_YEAR, FUNDING_OPTIONS, HOSTEL_RANGE } from "@/data/fee-guide";
import SectionHeading from "./SectionHeading";

type Entry = { university: PartnerUniversity; offering: UniversityOffering };

const ROWS: { key: keyof FeeRecord; label: string }[] = [
  { key: "annualTuition", label: "Annual tuition" },
  { key: "totalProgramFee", label: "Total programme fee" },
  { key: "hostelFee", label: "Hostel" },
  { key: "otherCharges", label: "Other charges" },
];

export default function FeesSection({ slug, entries }: { slug: CourseSlug; entries: Entry[] }) {
  const guide = FEE_GUIDE[slug];
  // Only show fee records that carry a verified source.
  const fees = entries.flatMap(({ university, offering }) =>
    Object.entries(offering.fees ?? {})
      .filter(([, f]) => f.sourceUrl && f.academicYear)
      .map(([program, fee]) => ({ university, program, fee })),
  );

  return (
    <section aria-labelledby="fees-title" id="fees" className="scroll-mt-40 bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-10 sm:pt-10 sm:pb-24 lg:px-10">
        <SectionHeading
          id="fees-title"
          num="05"
          label="FEES"
          title="Plan your"
          accent="investment"
          intro="Understand tuition fees, additional costs and scholarship opportunities. Fees are set by each university and revised every academic year - the ranges below help you plan, and our team shares the exact fee structure for the universities you shortlist."
        />

        {fees.length === 0 ? (
          <div className="mt-10 grid gap-14">
            {/* Indicative tuition ranges */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-3xl text-[#111111]">Indicative annual tuition</h3>
                <p className="text-xs font-bold tracking-[0.2em] text-[#C9A24D]">
                  PRIVATE UNIVERSITIES · {FEE_GUIDE_YEAR}
                </p>
              </div>
              <dl className="mt-6 border-t border-[#C9A24D]/30">
                {guide.map((row) => (
                  <div
                    key={row.program}
                    className="flex flex-col gap-1 border-b border-[#C9A24D]/30 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <dt className="text-[15px] text-[#111111]/80">{row.program}</dt>
                    <dd className="shrink-0 font-number text-2xl font-bold text-[#111111] lining-nums">
                      {row.annual}
                      <span className="ml-1 font-sans text-sm font-normal text-[#111111]/45">/ year</span>
                    </dd>
                  </div>
                ))}
                <div className="flex flex-col gap-1 border-b border-[#C9A24D]/30 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <dt className="text-[15px] text-[#111111]/80">Hostel &amp; mess</dt>
                  <dd className="text-[15px] text-[#111111] sm:text-right">{HOSTEL_RANGE}</dd>
                </div>
              </dl>
              <p className="mt-5 flex gap-2 text-sm leading-relaxed text-[#111111]/55">
                <ReceiptText className="mt-0.5 size-4 shrink-0 text-[#C9A24D]" />
                Approximate ranges for planning only. Actual fees depend on the university, programme, quota and
                academic year, and exclude one-time admission, exam and security charges.
              </p>
            </div>

            {/* Scholarships & funding */}
            <div className="border-t border-[#C9A24D]/30 pt-12">
              <h3 className="font-display text-3xl text-[#111111]">Scholarships &amp; funding</h3>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {FUNDING_OPTIONS.map((f) => (
                  <li key={f.title} className="border-l-2 border-[#C9A24D] pl-5">
                    <p className="font-semibold text-[#111111]">
                      {f.url ? (
                        <a
                          href={f.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 transition-colors hover:text-[#C9A24D]"
                        >
                          {f.title}
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      ) : (
                        f.title
                      )}
                    </p>
                    <p className="mt-1 text-[15px] leading-relaxed text-[#111111]/65">{f.text}</p>
                  </li>
                ))}
              </ul>
              <a
                href="#enquire"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#C9A24D] px-7 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#d8b35e]"
              >
                Get the exact fee structure
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-12 space-y-10">
            {fees.map(({ university, program, fee }) => (
              <article key={`${university.id}-${program}`} className="border-t border-[#C9A24D]/30 pt-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-3xl text-[#111111]">
                    {program} <span className="text-[#111111]/45">· {university.name}</span>
                  </h3>
                  <p className="text-xs font-bold tracking-[0.2em] text-[#C9A24D]">
                    ACADEMIC YEAR {fee.academicYear}
                  </p>
                </div>
                <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {ROWS.filter((r) => fee[r.key]).map((r) => (
                    <div key={r.key}>
                      <dt className="text-sm text-[#111111]/50">{r.label}</dt>
                      <dd className="mt-1 font-number text-2xl font-bold text-[#111111] lining-nums">
                        {fee[r.key] as string}
                      </dd>
                    </div>
                  ))}
                </dl>
                {(fee.scholarships?.length || fee.paymentOptions?.length) && (
                  <div className="mt-6 grid gap-6 text-[15px] text-[#111111]/70 sm:grid-cols-2">
                    {fee.scholarships?.length ? (
                      <p>
                        <span className="font-semibold text-[#111111]">Scholarships: </span>
                        {fee.scholarships.join("; ")}
                      </p>
                    ) : null}
                    {fee.paymentOptions?.length ? (
                      <p>
                        <span className="font-semibold text-[#111111]">Payment options: </span>
                        {fee.paymentOptions.join("; ")}
                      </p>
                    ) : null}
                  </div>
                )}
                <a
                  href={fee.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm text-[#111111]/50 underline-offset-4 hover:text-[#C9A24D] hover:underline"
                >
                  Source: university fee notice
                  <ArrowUpRight className="size-3.5" />
                </a>
              </article>
            ))}
            <p className="text-sm text-[#111111]/50">
              Fees may change. Always confirm the final amount with the university before paying.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
