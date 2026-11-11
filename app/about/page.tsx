import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Phone } from "lucide-react";
import { CONTACT } from "@/app/contact/contact-info";

export const metadata: Metadata = {
  title: "About Us | InstallYourCareer",
  description:
    "Our story, our founder Er. Abhishek, and our mission to help every student find the right course and college.",
};

const STREAMS = [
  "Engineering",
  "Medical",
  "Pharmacy",
  "Nursing",
  "Management",
  "Architecture",
  "Animation",
  "Agriculture",
  "Physiotherapy",
  "Paramedical",
  "Design",
  "Law",
];

const FOUNDER_CREDENTIALS = [
  "Ex-Consultant Engineer",
  "ECIL, Hyderabad",
  "Department of Atomic Energy, Govt. of India",
];

const COMMITMENTS = [
  { title: "Honest advice", text: "Guidance based on what suits the student - never on pressure." },
  { title: "Trusted partners", text: "Top private universities accredited by NAAC A++." },
  { title: "Start to finish", text: "Support from the first conversation to final admission." },
];

function SectionLabel({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-[#C9A24D]">
      <span className="font-number text-sm lining-nums">{num}</span>
      <span className="h-px w-8 bg-[#C9A24D]" />
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <main className="w-full bg-[#F7F4EC]">
      {/* ── Intro ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-40 size-[520px] rounded-full bg-[#C9A24D]/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1440px] px-6 pt-8 pb-14 sm:pb-20 lg:px-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#111111]">
            About <span className="text-[#C9A24D]">Us</span>
          </h1>
          <p className="mt-8 max-w-4xl font-display text-[2.4rem] leading-[1.02] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl">
            Guiding students to the <em className="text-[#C9A24D]">right education</em>, one
            confident decision at a time.
          </p>
        </div>
      </section>

      {/* ── 01 Our Story ──────────────────────────────────── */}
      <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 pb-20 sm:pb-28 lg:grid-cols-12 lg:gap-14 lg:px-10">
        <div className="relative aspect-[4/3] overflow-hidden rounded-tl-[3rem] rounded-tr-lg rounded-br-[3rem] rounded-bl-lg shadow-lg sm:rounded-tl-[5rem] sm:rounded-br-[5rem] lg:col-span-6 lg:aspect-[5/4]">
          <Image
            src="/about/graduate-indian.jpg"
            alt="Smiling Indian graduate in cap and gown at a convocation"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-[48%_40%]"
          />        </div>

        <div className="lg:col-span-6">
          <SectionLabel num="01">OUR STORY</SectionLabel>
          <h2 className="mt-4 font-display text-4xl leading-none tracking-tight text-[#111111] sm:text-5xl">
            Why <span className="text-[#C9A24D] italic">Install Your Career</span> began
          </h2>

          <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-[#111111]/75">
            <p>
              Every year, thousands of students make one of the biggest decisions of their lives -
              which course and college to choose - often with too little information and too much
              confusion. <strong className="text-[#111111]">Install Your Career</strong> was started
              to change that.
            </p>
            <p>
              We are a{" "}
              <strong className="text-[#111111]">
                channel partner of top private universities accredited by NAAC A++
              </strong>
              . We help students understand their options, shortlist the right colleges, and complete
              the admission process smoothly - with clear, honest guidance for students and parents
              alike.
            </p>
          </div>

          <p className="mt-7 text-sm font-semibold text-[#111111]">Streams we guide students in</p>
          {/* Phones: 2-column tiles · larger screens: pill chips */}
          <ul className="mt-4 grid grid-cols-2 gap-2 sm:mt-3 sm:flex sm:flex-wrap">
            {STREAMS.map((s, i) => (
              <li key={s}>
                <Link
                  href={`/courses/${s.toLowerCase()}`}
                  className="group flex h-full items-center gap-2.5 rounded-xl border border-[#C9A24D]/30 bg-[#FFFFFF] px-3.5 py-3 text-[15px] text-[#111111] shadow-sm transition hover:border-[#C9A24D] hover:text-[#C9A24D] sm:rounded-full sm:px-3.5 sm:py-1.5 sm:text-sm sm:text-[#111111]/80 sm:shadow-none"
                >
                  <span className="w-5 shrink-0 font-number text-xs font-bold text-[#C9A24D] lining-nums tabular-nums sm:hidden">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s}
                </Link>
              </li>
            ))}
            <li className="col-span-2 sm:col-span-1">
              <Link
                href="/courses"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-dashed border-[#C9A24D]/50 py-3 text-sm font-semibold text-[#C9A24D] transition hover:bg-[#C9A24D] hover:text-[#111111] sm:rounded-full sm:border-0 sm:px-1 sm:py-1.5 sm:font-normal sm:text-[#111111]/50 sm:hover:bg-transparent sm:hover:text-[#C9A24D]"
              >
                &amp; more courses
                <ArrowRight className="size-4 sm:hidden" />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ── 02 Meet the Founder ───────────────────────────── */}
      <section className="relative overflow-hidden bg-[#111111]">
        <div className="pointer-events-none absolute -bottom-40 -left-40 size-[520px] rounded-full bg-[#C9A24D]/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:px-10">
          {/* Portrait with offset gold frame */}
          <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-tl-[4rem] rounded-tr-lg rounded-br-[4rem] rounded-bl-lg border border-[#C9A24D]/60" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[4rem] rounded-tr-lg rounded-br-[4rem] rounded-bl-lg">
              {/* TODO: replace placeholder stock photo with Er. Abhishek's real photo (same file name) */}
              <Image
                src="/about/founder.jpg"
                alt="Er. Abhishek, founder of Install Your Career"
                fill
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionLabel num="02">MEET THE FOUNDER</SectionLabel>
            <h2 className="mt-4 font-display text-5xl leading-none tracking-tight text-[#FFFFFF] sm:text-7xl">
              Er. <span className="text-[#C9A24D] italic">Abhishek</span>
            </h2>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {FOUNDER_CREDENTIALS.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-[#F7F4EC]/85">
                  <Award className="size-4 shrink-0 text-[#C9A24D]" />
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-[#F7F4EC]/70">
              <p>
                Er. Abhishek is a former Consultant Engineer at{" "}
                <strong className="text-[#FFFFFF]">ECIL, Hyderabad</strong>, under the{" "}
                <strong className="text-[#FFFFFF]">Department of Atomic Energy, Government of India</strong>.
                His engineering career gave him first-hand insight into how the right education opens
                doors - and how the wrong choice can hold talented people back.
              </p>
              <p>
                Seeing many bright students struggle with confusing admission processes and a lack of
                trustworthy guidance, he founded Install Your Career to give them what he felt was
                missing: clear, practical advice from someone who understands both education and
                careers.
              </p>
            </div>

            <p className="mt-8 border-l-2 border-[#C9A24D] pl-5 font-display text-2xl leading-snug text-[#FFFFFF] italic sm:text-3xl">
              Every student deserves a mentor who helps them choose with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ── 03 Mission & Vision ───────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 sm:py-28 lg:px-10">
        <SectionLabel num="03">MISSION &amp; VISION</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-none tracking-tight text-[#111111] sm:text-5xl">
          What drives us <span className="text-[#C9A24D] italic">every day</span>
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-0">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-tl-lg rounded-tr-[3rem] rounded-br-lg rounded-bl-[3rem] shadow-lg sm:rounded-tr-[5rem] sm:rounded-bl-[5rem] lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-auto lg:min-h-[560px]">
            <Image
              src="/about/friend.jpg"
              alt="Open book floating in a tunnel of library bookshelves"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover object-[50%_50%]"
            />
          </div>

          <div className="rounded-3xl rounded-tr-none border-t-[3px] border-[#C9A24D] bg-[#FFFFFF] p-7 shadow-sm sm:p-10 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:ml-10">
            <p className="text-xs font-bold tracking-[0.25em] text-[#C9A24D]">OUR MISSION</p>
            <p className="mt-4 font-display text-3xl leading-tight text-[#111111] sm:text-4xl">
              To help every student find the course and college that truly fits them.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#111111]/70">
              Through personal counselling, transparent information and end-to-end admission support,
              we make the journey from confusion to confirmation simple and stress-free.
            </p>
          </div>

          <div className="relative z-10 rounded-3xl rounded-tl-none bg-[#111111] p-7 shadow-xl sm:p-10 lg:col-span-8 lg:col-start-5 lg:row-start-2 lg:mt-6">
            <p className="text-xs font-bold tracking-[0.25em] text-[#C9A24D]">OUR VISION</p>
            <p className="mt-4 font-display text-3xl leading-tight text-[#FFFFFF] sm:text-4xl">
              To be the most trusted career guidance partner for students across India.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#F7F4EC]/70">
              We want every family to have access to honest guidance and quality education
              opportunities - wherever they live and whatever their background.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-3">
          {COMMITMENTS.map((c, i) => (
            <li key={c.title} className="border-t border-[#C9A24D]/30 pt-5">
              <span className="font-number text-3xl font-bold text-[#C9A24D] lining-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-semibold text-[#111111]">{c.title}</p>
              <p className="mt-1 text-[15px] text-[#111111]/65">{c.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#C9A24D]/40 bg-[#FFFFFF] p-7 sm:p-10 lg:flex-row lg:items-center">
          <p className="font-display text-3xl leading-tight text-[#111111] sm:text-4xl">
            Your future starts with <span className="text-[#C9A24D] italic">one right choice</span>.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-3 text-sm font-semibold text-[#F7F4EC] transition hover:bg-[#C9A24D] hover:text-[#111111]"
            >
              Enquire Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#111111]/20 px-7 py-3 text-sm font-semibold text-[#111111] transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
            >
              <Phone className="size-4" />
              Call {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
