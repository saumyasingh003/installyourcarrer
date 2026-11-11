import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ChevronRight } from "lucide-react";
import type { Course } from "@/types/course";

export default function CourseHero({ course }: { course: Course }) {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EC]">
      <div className="pointer-events-none absolute -top-40 -left-40 size-[520px] rounded-full bg-[#C9A24D]/10 blur-3xl" />

      {/* Breadcrumb - directly under the navbar */}
      <nav aria-label="Breadcrumb" className="relative mx-auto max-w-[1440px] px-6 pt-4 text-sm text-[#111111]/55 lg:px-10">
        <ol className="flex items-center gap-1.5">
          <li className="flex items-center gap-1.5">
            <Link href="/" className="transition-colors hover:text-[#C9A24D]">
              Home
            </Link>
            <ChevronRight aria-hidden className="size-3.5" />
          </li>
          <li className="flex items-center gap-1.5">
            <Link href="/courses" className="transition-colors hover:text-[#C9A24D]">
              Courses
            </Link>
            <ChevronRight aria-hidden className="size-3.5" />
          </li>
          <li aria-current="page" className="font-medium text-[#111111]">
            {course.name}
          </li>
        </ol>
      </nav>

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-6 pt-8 pb-16 sm:pb-20 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:pb-24">
        <div className="lg:col-span-6">
          <p className="text-xs font-bold tracking-[0.25em] text-[#C9A24D]">{course.category}</p>
          <h1 className="mt-3 font-display text-[clamp(3.25rem,8vw,7rem)] leading-[0.95] tracking-tight text-[#111111]">
            {course.name}
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#111111]/70 sm:text-lg">
            {course.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#programs"
              className="group inline-flex items-center gap-2 rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-[#F7F4EC] transition hover:bg-[#C9A24D] hover:text-[#111111]"
            >
              Explore Courses
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#enquire"
              className="group inline-flex items-center gap-2 rounded-full border border-[#C9A24D] px-7 py-3.5 text-sm font-semibold text-[#111111] transition hover:bg-[#C9A24D]"
            >
              Enquire Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Asymmetric image with offset gold frame */}
        <div className="relative lg:col-span-6">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-tl-[4rem] rounded-tr-lg rounded-br-[4rem] rounded-bl-lg border border-[#C9A24D]/60 sm:translate-x-5 sm:translate-y-5 sm:rounded-tl-[6rem] sm:rounded-br-[6rem]" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-tl-[4rem] rounded-tr-lg rounded-br-[4rem] rounded-bl-lg shadow-xl sm:rounded-tl-[6rem] sm:rounded-br-[6rem] lg:aspect-[5/4]">
            <Image
              src={course.image.src}
              alt={course.image.alt}
              fill
              preload
              sizes="(min-width: 1024px) 48vw, 100vw"
              className={`object-cover ${course.image.position ?? ""}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
