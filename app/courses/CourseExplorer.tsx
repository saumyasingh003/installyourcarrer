"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search, X } from "lucide-react";

type Size = "big" | "tall" | "wide" | "small";

const COURSES: {
  name: string;
  size: Size;
  text: string;
  programs: string[];
}[] = [
  {
    name: "Engineering",
    size: "big",
    text: "Build the technology of tomorrow across core and emerging branches.",
    programs: ["B.Tech", "M.Tech", "Diploma"],
  },
  {
    name: "Medical",
    size: "tall",
    text: "Begin your journey to becoming a doctor at a recognised institution.",
    programs: ["MBBS", "BDS", "BAMS", "BHMS"],
  },
  {
    name: "Pharmacy",
    size: "small",
    text: "Learn the science of medicines, research and healthcare.",
    programs: ["B.Pharm", "D.Pharm", "M.Pharm"],
  },
  {
    name: "Nursing",
    size: "small",
    text: "A caring, in-demand profession with strong career growth.",
    programs: ["B.Sc Nursing", "GNM", "ANM"],
  },
  {
    name: "Management",
    size: "wide",
    text: "Develop business, leadership and entrepreneurial skills.",
    programs: ["BBA", "MBA", "PGDM"],
  },
  {
    name: "Architecture",
    size: "tall",
    text: "Combine creativity and engineering to design spaces and cities.",
    programs: ["B.Arch", "M.Arch"],
  },
  {
    name: "Animation",
    size: "small",
    text: "Turn imagination into film, games and visual effects.",
    programs: ["B.Sc Animation", "VFX", "Game Design"],
  },
  {
    name: "Agriculture",
    size: "small",
    text: "Shape the future of farming, food and sustainability.",
    programs: ["B.Sc Agriculture", "M.Sc Agriculture"],
  },
  {
    name: "Physiotherapy",
    size: "small",
    text: "Help people recover movement, strength and quality of life.",
    programs: ["BPT", "MPT"],
  },
  {
    name: "Paramedical",
    size: "tall",
    text: "Fast-growing allied health careers in labs, imaging and care.",
    programs: ["BMLT", "B.Sc Radiology", "OT Technology"],
  },
  {
    name: "Design",
    size: "wide",
    text: "Creative careers in fashion, interiors, product and graphics.",
    programs: ["B.Des", "Fashion Design", "Interior Design"],
  },
  {
    name: "Law",
    size: "small",
    text: "Build a respected career in legal practice, corporate law and more.",
    programs: ["BA LLB", "BBA LLB", "LLB", "LLM"],
  },
];

// Bento layout (4 columns on desktop, 2 on tablet). The order + spans above tile the grid exactly.
const SPAN: Record<Size, string> = {
  big: "sm:col-span-2 sm:row-span-2",
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  small: "",
};

const CORNERS: Record<Size, string> = {
  big: "rounded-2xl rounded-tl-[4rem] rounded-br-[4rem]",
  tall: "rounded-2xl rounded-tr-[3.5rem]",
  wide: "rounded-2xl rounded-bl-[3.5rem]",
  small: "rounded-2xl",
};

export default function CourseExplorer() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const results = useMemo(
    () =>
      COURSES.map((c, i) => ({ ...c, num: i + 1 })).filter(
        (c) =>
          !q ||
          c.name.toLowerCase().includes(q) ||
          c.text.toLowerCase().includes(q) ||
          c.programs.some((p) =>
            p.toLowerCase().replace(/\./g, "").includes(q.replace(/\./g, "")),
          ),
      ),
    [q],
  );

  return (
    <>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#111111]">
            Our <span className="text-[#C9A24D]">Courses</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#111111]/70">
            Admission guidance across 12+ professional streams at top NAAC A++
            accredited universities.
          </p>
        </div>

        {/* Search */}
        <form
          role="search"
          onSubmit={(e) => e.preventDefault()}
          className="w-full lg:max-w-md"
        >
          <label htmlFor="course-search" className="sr-only">
            Search courses
          </label>
          <div className="flex items-center gap-2 rounded-full border border-[#C9A24D]/40 bg-[#FFFFFF] p-1.5 pl-5 shadow-sm transition focus-within:border-[#C9A24D] focus-within:ring-2 focus-within:ring-[#C9A24D]/25">
            <Search className="size-4 shrink-0 text-[#111111]/40" />
            <input
              id="course-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search course or programme, e.g. MBBS, B.Tech"
              className="w-full min-w-0 bg-transparent py-2 text-[15px] text-[#111111] outline-none placeholder:text-[#111111]/40 [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="flex size-8 shrink-0 items-center justify-center rounded-full text-[#111111]/50 transition hover:bg-[#F7F4EC] hover:text-[#111111]"
              >
                <X className="size-4" />
              </button>
            )}
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-sm font-semibold text-[#F7F4EC] transition hover:bg-[#C9A24D] hover:text-[#111111]"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {results.length === 0 && (
        <div className="mt-12 rounded-3xl border border-dashed border-[#C9A24D]/50 bg-[#FFFFFF] px-6 py-14 text-center">
          <p className="font-display text-3xl text-[#111111]">
            No match for{" "}
            <span className="text-[#C9A24D] italic">&ldquo;{query}&rdquo;</span>
          </p>
          <p className="mt-2 text-[15px] text-[#111111]/60">
            We guide students in many more courses - ask our counsellors.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-[#F7F4EC] transition hover:bg-[#C9A24D] hover:text-[#111111]"
          >
            Ask a Counsellor
            <ArrowRight className="size-4" />
          </Link>
        </div>
      )}

      <ul className="mt-10 grid auto-rows-[340px] gap-4 sm:grid-flow-row-dense sm:grid-cols-2 sm:auto-rows-[270px] lg:grid-cols-4 lg:auto-rows-[250px] lg:gap-5">
        {results.map(({ num, ...course }) => {
          // While searching, show all matches as equal cards (the bento puzzle only tiles with all 12)
          const c = {
            ...course,
            size: searching ? ("small" as Size) : course.size,
          };
          return (
            <li key={c.name} className={SPAN[c.size]}>
              <Link
                href={`/courses/${c.name.toLowerCase()}`}
                className={`group relative flex h-full flex-col overflow-hidden bg-[#111111] p-6 shadow-sm ring-1 ring-[#C9A24D]/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#C9A24D] ${CORNERS[c.size]} ${
                  c.size === "big" ? "sm:p-10" : "sm:p-7"
                }`}
              >
                {/* Background image */}
                <Image
                  src={`/courses/${c.name.toLowerCase()}.jpg`}
                  alt=""
                  fill
                  sizes={
                    c.size === "big" || c.size === "wide"
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  }
                  className="object-cover"
                />
                {/* Overlay - darker at the bottom so text stays readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/25 transition-colors duration-300 group-hover:via-[#111111]/60" />

                {/* gold bar that grows on hover */}
                <span className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-[#C9A24D] transition-transform duration-500 group-hover:scale-x-100" />

                {/* Content */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-number text-2xl font-bold text-[#C9A24D] lining-nums drop-shadow">
                    {String(num).padStart(2, "0")}
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full border border-[#FFFFFF]/30 bg-[#111111]/30 text-[#FFFFFF] backdrop-blur-sm transition group-hover:border-[#C9A24D] group-hover:bg-[#C9A24D] group-hover:text-[#111111]">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>

                <div className="relative z-10 mt-auto">
                  <h2
                    className={`font-display leading-none tracking-tight text-[#FFFFFF] ${
                      c.size === "big" ? "text-5xl sm:text-7xl" : "text-4xl"
                    }`}
                  >
                    {c.name}
                  </h2>
                  <p
                    className={`mt-2 line-clamp-2 leading-relaxed text-[#F7F4EC]/80 ${
                      c.size === "big"
                        ? "max-w-md text-base sm:text-lg"
                        : "text-sm"
                    } ${c.size === "small" ? "sm:hidden lg:block xl:block" : ""}`}
                  >
                    {c.text}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {c.programs.map((p) => (
                      <li
                        key={p}
                        className="rounded-full border border-[#C9A24D]/40 bg-[#111111]/40 px-3 py-1 text-xs font-medium text-[#F7F4EC] backdrop-blur-sm"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
