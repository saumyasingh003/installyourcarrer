"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search, X } from "lucide-react";
import { COURSE_CARDS, COURSE_CATEGORIES, courseImage, type CourseCategory } from "@/data/course-cards";
import CategoryDropdown from "./CategoryDropdown";

type Filter = "All" | CourseCategory;
const FILTERS: Filter[] = ["All", ...COURSE_CATEGORIES];

const normalise = (s: string) => s.toLowerCase().replace(/\./g, "");

const countFor = (f: Filter) =>
  f === "All" ? COURSE_CARDS.length : COURSE_CARDS.filter((c) => c.category === f).length;

export default function CourseExplorer() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");
  const q = normalise(query.trim());

  const results = useMemo(
    () =>
      COURSE_CARDS.map((c, i) => ({ ...c, num: i + 1 })).filter(
        (c) =>
          (filter === "All" || c.category === filter) &&
          (!q ||
            normalise(c.name).includes(q) ||
            normalise(c.text).includes(q) ||
            c.programs.some((p) => normalise(p).includes(q))),
      ),
    [q, filter],
  );

  return (
    <>
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-[2rem] font-extrabold tracking-tight text-[#111111] sm:text-4xl">
            Our <span className="text-[#C9A24D]">Courses</span>
          </h1>
          <p className="mt-3 max-w-2xl text-[15px] text-[#111111]/70 sm:mt-4 sm:text-lg">
            Admission guidance across 12+ professional streams at top NAAC A++ accredited universities.
          </p>
        </div>

        <form role="search" onSubmit={(e) => e.preventDefault()} className="-mx-3 w-[calc(100%+1.5rem)] sm:mx-0 sm:w-full lg:max-w-md">
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

      {/* Category filter - phones: custom dropdown */}
      <div className="-mx-3 mt-5 sm:hidden">
        <CategoryDropdown
          options={FILTERS.map((f) => ({ value: f, count: countFor(f) }))}
          value={filter}
          onChange={(v) => setFilter(v as Filter)}
        />
      </div>

      {/* Category filter - tablet & up: pills */}
      <div role="group" aria-label="Filter by category" className="mt-8 hidden flex-wrap gap-2 sm:flex">
        {FILTERS.map((f) => {
          const active = filter === f;
          const count = countFor(f);
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
                active
                  ? "border-[#111111] bg-[#111111] text-[#F7F4EC]"
                  : "border-[#111111]/15 bg-[#FFFFFF] text-[#111111]/75 hover:border-[#C9A24D] hover:text-[#111111]"
              }`}
            >
              {f}
              <span className={`font-number text-xs font-bold lining-nums ${active ? "text-[#C9A24D]" : "text-[#111111]/40"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {results.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-[#C9A24D]/50 bg-[#FFFFFF] px-6 py-14 text-center">
          <p className="font-display text-3xl text-[#111111]">
            No match for <span className="text-[#C9A24D] italic">&ldquo;{query}&rdquo;</span>
          </p>
          <p className="mt-2 text-[15px] text-[#111111]/60">We guide students in many more courses - ask our counsellors.</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-[#F7F4EC] transition hover:bg-[#C9A24D] hover:text-[#111111]"
          >
            Ask a Counsellor
            <ArrowRight className="size-4" />
          </Link>
        </div>
      ) : (
        <ul className="-mx-3 mt-6 grid gap-5 sm:mx-0 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {results.map((c) => {
            return (
              <li key={c.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-[#FFFFFF] shadow-sm ring-1 ring-[#111111]/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#C9A24D]/50">
                  {/* Photo */}
                  <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
                    <Image
                      src={courseImage(c.slug)}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#111111]/40 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-[#111111]/70 px-3 py-1 font-number text-sm font-bold text-[#C9A24D] lining-nums backdrop-blur-sm">
                      {String(c.num).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col px-5 pt-5 pb-5 sm:p-6">
                    <h2
                      className="font-display text-4xl leading-none tracking-tight text-[#111111]"
                    >
                      {c.name}
                    </h2>
                    <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
                      {c.programs.map((p) => (
                        <li key={p} className="rounded-full bg-[#F7F4EC] px-3 py-1 text-xs font-medium text-[#111111]/75">
                          {p}
                        </li>
                      ))}
                    </ul>
                    {/* Only the button navigates */}
                    <div className="mt-auto pt-4 sm:pt-6">
                      <Link
                        href={`/courses/${c.slug}`}
                        className="group/btn flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-[#F7F4EC] transition-colors hover:bg-[#C9A24D] hover:text-[#111111] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24D]"
                      >
                        Explore course
                        <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        <span className="sr-only">: {c.name}</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
