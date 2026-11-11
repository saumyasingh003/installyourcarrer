import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BedDouble, Check, Info } from "lucide-react";
import { COURSES } from "@/data/courses";
import { FEE_GUIDE, FEE_GUIDE_YEAR, FUNDING_OPTIONS, HOSTEL_RANGE } from "@/data/fee-guide";

// TODO: confirm plan prices and features with the team before going live.
const PLANS = [
  {
    name: "Basic",
    price: "Free",
    priceNote: "",
    tagline: "Get clarity on the right course and career path.",
    features: [
      "One-on-one career counselling session",
      "Course & stream suggestions",
      "Eligibility check for your chosen course",
      "Entrance exam overview",
    ],
    cta: "Book Free Session",
    popular: false,
  },
  {
    name: "Standard",
    price: "₹4,999",
    priceNote: "one-time",
    tagline: "Shortlist the right universities and apply with confidence.",
    features: [
      "Everything in Basic",
      "Personalised university shortlist",
      "Course-wise fee & scholarship comparison",
      "Application form assistance",
      "Document checklist & verification",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹9,999",
    priceNote: "one-time",
    tagline: "Complete support from first call to final admission.",
    features: [
      "Everything in Standard",
      "Dedicated admission counsellor",
      "Entrance exam & counselling round guidance",
      "Scholarship & education loan assistance",
      "Admission confirmation & enrolment support",
      "Priority support on call & WhatsApp",
    ],
    cta: "Talk to an Advisor",
    popular: false,
  },
];

export const metadata: Metadata = {
  title: "Pricing | InstallYourCareer",
  description:
    "Indicative annual tuition ranges at private universities for Engineering, Medical, Pharmacy, Nursing, Management, Law and more, plus scholarships and funding options.",
};

export default function PricingPage() {
  return (
    <main className="w-full bg-[#F7F4EC]">
      {/* Intro */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-40 size-[520px] rounded-full bg-[#C9A24D]/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1440px] px-6 pt-8 pb-12 lg:px-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#111111]">
            Guidance &amp; <span className="text-[#C9A24D]">Pricing</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#111111]/70">
            Simple guidance plans for every student, plus a clear view of course fees before you decide.
          </p>
        </div>
      </section>

      {/* Guidance plans */}
      <section aria-label="Guidance plans" className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-10">
        <ul className="mt-6 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9 ${
                plan.popular
                  ? "bg-[#111111] text-[#F7F4EC] shadow-xl ring-1 ring-[#C9A24D] lg:-my-4 lg:py-12"
                  : "bg-[#FFFFFF] text-[#111111] shadow-sm ring-1 ring-[#C9A24D]/20"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-8 rounded-full bg-[#C9A24D] px-4 py-1 text-[11px] font-bold tracking-[0.2em] text-[#111111]">
                  MOST POPULAR
                </span>
              )}
              <p className="text-xs font-bold tracking-[0.25em] text-[#C9A24D]">{plan.name.toUpperCase()}</p>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="font-number text-5xl font-bold lining-nums">{plan.price}</span>
                {plan.priceNote && (
                  <span className={plan.popular ? "text-sm text-[#F7F4EC]/55" : "text-sm text-[#111111]/50"}>
                    {plan.priceNote}
                  </span>
                )}
              </p>
              <p className={`mt-3 text-[15px] leading-relaxed ${plan.popular ? "text-[#F7F4EC]/70" : "text-[#111111]/65"}`}>
                {plan.tagline}
              </p>

              <ul className={`mt-7 flex-1 space-y-3 border-t pt-7 ${plan.popular ? "border-[#F7F4EC]/15" : "border-[#C9A24D]/25"}`}>
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px]">
                    <Check className="mt-0.5 size-5 shrink-0 text-[#C9A24D]" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`group mt-9 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-[#C9A24D] text-[#111111] hover:bg-[#d8b35e]"
                    : "bg-[#111111] text-[#F7F4EC] hover:bg-[#C9A24D] hover:text-[#111111]"
                }`}
              >
                {plan.cta}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Course fee cards */}
      <section aria-label="Fees by course" className="mx-auto max-w-[1440px] px-6 pb-16 lg:px-10">
        <h2 className="font-display text-4xl tracking-tight text-[#111111] sm:text-5xl">
          Course <em className="text-[#C9A24D]">fees</em> at a glance
        </h2>
        <p className="mt-4 mb-8 flex max-w-3xl gap-2 text-sm leading-relaxed text-[#111111]/60">
          <Info className="mt-0.5 size-4 shrink-0 text-[#C9A24D]" />
          Indicative annual tuition at private universities for {FEE_GUIDE_YEAR}. Actual fees vary by university,
          programme and year.
        </p>
        <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {COURSES.map((course, i) => (
            <li
              key={course.slug}
              className="group flex flex-col rounded-3xl bg-[#FFFFFF] p-7 shadow-sm ring-1 ring-[#C9A24D]/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#C9A24D]/60"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-display text-4xl leading-none text-[#111111]">{course.name}</h2>
                <span className="font-number text-sm font-bold text-[#C9A24D] lining-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <dl className="mt-6 flex-1 border-t border-[#C9A24D]/25">
                {FEE_GUIDE[course.slug].map((row) => (
                  <div key={row.program} className="flex items-baseline justify-between gap-4 border-b border-[#C9A24D]/25 py-3.5">
                    <dt className="text-sm text-[#111111]/70">{row.program}</dt>
                    <dd className="shrink-0 text-right font-number text-lg font-bold text-[#111111] lining-nums">
                      {row.annual}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs text-[#111111]/45">Per year · tuition only</p>

              <Link
                href={`/courses/${course.slug}#fees`}
                className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-[#111111] transition-colors hover:text-[#C9A24D]"
              >
                View {course.name.toLowerCase()} details
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6 flex items-center gap-2 text-sm text-[#111111]/60">
          <BedDouble className="size-4 shrink-0 text-[#C9A24D]" />
          Hostel &amp; mess: {HOSTEL_RANGE}
        </p>
      </section>

      {/* Scholarships */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
          <h2 className="font-display text-4xl tracking-tight text-[#111111] sm:text-5xl">
            Scholarships &amp; <em className="text-[#C9A24D]">funding</em>
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#111111] p-7 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <p className="font-display text-3xl leading-tight text-[#FFFFFF] sm:text-4xl">
              Want the <span className="text-[#C9A24D] italic">exact</span> fee structure?
            </p>
            <p className="mt-2 text-[15px] text-[#F7F4EC]/65">
              Tell us your course and budget - we&apos;ll share university-wise fees for the current year.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#C9A24D] px-7 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#d8b35e]"
          >
            Get Fee Details
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
