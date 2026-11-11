import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CourseExplorer from "./CourseExplorer";

export const metadata: Metadata = {
  title: "Courses | InstallYourCareer",
  description:
    "Admission guidance for Engineering, Medical, Pharmacy, Nursing, Management, Architecture, Animation, Agriculture, Physiotherapy, Paramedical, Design, Law and more.",
};

export default function CoursesPage() {
  return (
    <main className="w-full bg-[#F7F4EC]">
      <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-20 lg:px-10">
        <CourseExplorer />

        {/* More courses CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#111111] p-7 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <p className="font-display text-3xl leading-tight text-[#FFFFFF] sm:text-4xl">
              Looking for a different <span className="text-[#C9A24D] italic">course</span>?
            </p>
            <p className="mt-2 text-[15px] text-[#F7F4EC]/65">
              These are just our most popular streams - we guide students in many more.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#C9A24D] px-7 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#d8b35e]"
          >
            Talk to a Counsellor
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
