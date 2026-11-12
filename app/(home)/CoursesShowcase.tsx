import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COURSE_CARDS } from "@/data/course-cards";

/**
 * Home page: all 12 courses as an editorial, text-only typographic layout -
 * heading column on the left, course names flowing as large serif words on the right.
 */
export default function CoursesShowcase() {
  return (
    <section aria-labelledby="home-courses-title" className="relative w-full overflow-hidden bg-[#111111]">
      {/* Single background photo */}
      <Image src="/about/graduates-sunset.jpg" alt="" fill sizes="100vw" className="object-cover object-[60%_55%]" />
      {/* Light overlay - the photo is already dusky; a touch darker behind the course names for readability */}
      <div className="absolute inset-0 bg-[#111111]/45 lg:bg-transparent lg:bg-linear-to-r lg:from-[#111111]/25 lg:via-[#111111]/40 lg:to-[#111111]/55" />

      <div className="relative grid w-full gap-8 px-6 py-14 sm:gap-12 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-x-4 lg:gap-y-16 lg:pr-12 lg:pl-8 2xl:pr-20 2xl:pl-12">
        {/* Heading column */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-[#C9A24D]">
              <span className="h-px w-8 bg-[#C9A24D]" />
              OUR COURSES
            </p>
            <h2
              id="home-courses-title"
              className="mt-4 font-display text-[2rem] leading-[1.05] tracking-tight text-[#FFFFFF] sm:text-5xl"
            >
              Twelve streams, <span className="text-[#C9A24D] italic">one right choice</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#F7F4EC]/75 sm:mt-5 sm:text-[15px]">
              From engineering and medicine to design and law - explore the programmes we guide students into and
              find the one that fits you.
            </p>
            <Link
              href="/courses"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#C9A24D] px-6 py-2.5 text-sm font-semibold sm:mt-8 sm:px-7 sm:py-3 text-[#111111] transition hover:bg-[#d8b35e]"
            >
              View all courses
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Flowing course names - sized to this column's width (container query units), so they
            scale evenly from phones to wide desktops */}
        <div className="@container lg:col-span-8 lg:border-l lg:border-[#F7F4EC]/15 lg:pl-20 xl:pl-24">
          {/* Phones: tidy two-column list */}
          <ul className="grid grid-cols-2 border-t border-[#F7F4EC]/15 sm:hidden">
            {COURSE_CARDS.map((c, i) => (
              <li key={c.slug} className="border-b border-[#F7F4EC]/15 odd:border-r">
                <Link
                  href={`/courses/${c.slug}`}
                  className="flex items-baseline gap-2 px-3 py-3.5 font-display text-[1.35rem] leading-tight text-[#FFFFFF] transition-colors hover:text-[#C9A24D]"
                >
                  <span className="font-number text-[11px] font-bold text-[#C9A24D] lining-nums tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={i % 3 === 1 ? "text-[#C9A24D] italic" : ""}>{c.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Tablet & up: flowing names */}
          <ul className="hidden flex-wrap items-baseline gap-x-[4cqw] gap-y-[2.2cqw] sm:flex @3xl:gap-x-[3cqw] @3xl:gap-y-[1.6cqw]">
            {COURSE_CARDS.map((c, i) => {
              const accent = i % 3 === 1;
              return (
                <li key={c.slug}>
                  <Link
                    href={`/courses/${c.slug}`}
                    title={c.programs.join(" · ")}
                    className={`group relative inline-flex items-start font-display leading-none tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-colors ${
                      accent
                        ? "text-[clamp(1.9rem,10cqw,5.5rem)] text-[#C9A24D] italic hover:text-[#FFFFFF]"
                        : "text-[clamp(1.6rem,8.2cqw,4.5rem)] text-[#FFFFFF] hover:text-[#C9A24D]"
                    }`}
                  >
                    {c.name}
                    <sup className="ml-1 font-number text-[clamp(0.6rem,1.6cqw,0.875rem)] font-bold text-[#C9A24D] not-italic lining-nums">
                      {String(i + 1).padStart(2, "0")}
                    </sup>
                    {/* underline grows on hover */}
                    <span className="absolute inset-x-0 -bottom-1.5 h-px origin-left scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
