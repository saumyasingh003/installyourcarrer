"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, BedDouble, Building2, MapPin, ShieldCheck } from "lucide-react";
import type { DegreeLevel, PartnerUniversity, UniversityOffering } from "@/types/course";
import SectionHeading from "./SectionHeading";
import { PROGRAM_EVENT } from "./EnquireButton";

type Entry = { university: PartnerUniversity; offering: UniversityOffering };

const ALL = "All";

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-xs font-bold tracking-[0.2em] text-[#C9A24D]">
      {label.toUpperCase()}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-full border border-[#111111]/15 bg-[#FFFFFF] px-4 py-2.5 text-sm font-normal tracking-normal text-[#111111] outline-none transition focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/25"
      >
        {[ALL, ...options].map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

const uniq = (xs: string[]) => [...new Set(xs)].sort();

// Illustrative campus cards shown until verified partners exist in data/universities.ts.
// They deliberately carry no university names or locations.
const SHOWCASE = [
  {
    title: "Modern City Campus",
    image: "/campuses/campus-modern.jpg",
    alt: "Modern glass university building with a landscaped courtyard",
    facilities: "Smart classrooms · Labs · Library · Placement cell",
  },
  {
    title: "Heritage Campus",
    image: "/campuses/campus-heritage.jpg",
    alt: "Classic red-brick university building with columns and a green lawn",
    facilities: "Central library · Research labs · Sports facilities",
  },
  {
    title: "Green Campus",
    image: "/campuses/campus-green.jpg",
    alt: "University building behind a wide green lawn",
    facilities: "Spacious grounds · Labs · Auditorium · Cafeteria",
  },
];

export default function UniversitySection({
  courseName,
  programs,
  entries,
}: {
  courseName: string;
  programs: string[];
  entries: Entry[];
}) {
  const [location, setLocation] = useState(ALL);
  const [program, setProgram] = useState(ALL);
  const [level, setLevel] = useState(ALL);
  const [uni, setUni] = useState(ALL);

  const options = useMemo(
    () => ({
      locations: uniq(entries.map((e) => `${e.university.city}, ${e.university.state}`)),
      programs: uniq(entries.flatMap((e) => e.offering.programs)),
      levels: uniq(entries.flatMap((e) => e.offering.levels as DegreeLevel[])),
      universities: uniq(entries.map((e) => e.university.name)),
    }),
    [entries],
  );

  const filtered = entries.filter(
    ({ university: u, offering: o }) =>
      (location === ALL || `${u.city}, ${u.state}` === location) &&
      (program === ALL || o.programs.includes(program)) &&
      (level === ALL || o.levels.includes(level as DegreeLevel)) &&
      (uni === ALL || u.name === uni),
  );

  return (
    <section aria-labelledby="universities-title" id="universities" className="scroll-mt-36 bg-[#F7F4EC]">
      <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-20 sm:pt-14 sm:pb-24 lg:px-10">
        <SectionHeading
          id="universities-title"
          num="04"
          label="EXPLORE PARTNER UNIVERSITIES"
          title="Where you can"
          accent="study"
          intro={`Compare verified partner universities offering ${courseName.toLowerCase()} programmes - their locations and facilities.`}
        />

        {entries.length === 0 ? (
          <>
          {/* Showcase cards until verified partner data is added - no invented names */}
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {SHOWCASE.map((s, i) => (
              <li
                key={s.title}
                className="group flex flex-col overflow-hidden rounded-3xl bg-[#FFFFFF] shadow-sm ring-1 ring-[#C9A24D]/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#C9A24D]/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-[#111111]/70 px-3 py-1 text-[11px] font-bold tracking-[0.2em] text-[#C9A24D] backdrop-blur-sm">
                    NAAC A++
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold tracking-[0.2em] text-[#C9A24D]">
                    PARTNER UNIVERSITY {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-3xl leading-tight text-[#111111]">{s.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-[#111111]/55">
                    <MapPin className="size-4 text-[#C9A24D]" />
                    Name &amp; location shared on enquiry
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {programs.slice(i, i + 2).map((p) => (
                      <li key={p} className="rounded-full border border-[#C9A24D]/40 px-3 py-1 text-xs text-[#111111]">
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm leading-relaxed text-[#111111]/60">{s.facilities}</p>
                  <a
                    href="#enquire"
                    onClick={() =>
                      programs[i] &&
                      window.dispatchEvent(new CustomEvent<string>(PROGRAM_EVENT, { detail: programs[i] }))
                    }
                    className="mt-auto inline-flex items-center gap-1.5 self-start pt-6 text-sm font-semibold text-[#111111] transition-colors hover:text-[#C9A24D]"
                  >
                    Get university details
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-tl-[3rem] rounded-tr-lg rounded-br-[3rem] rounded-bl-lg bg-[#FFFFFF] p-8 shadow-sm sm:flex-row sm:items-center sm:p-10">
            <div className="flex gap-5">
              <Building2 className="mt-1 size-7 shrink-0 text-[#C9A24D]" strokeWidth={1.5} />
              <div>
                <p className="font-display text-3xl leading-tight text-[#111111]">
                  Contact our admission team to explore available university options.
                </p>
                <p className="mt-2 max-w-xl text-[15px] text-[#111111]/60">
                  We&apos;ll share partner universities offering {courseName.toLowerCase()} programmes that match your
                  eligibility, budget and preferred location.
                </p>
              </div>
            </div>
            <a
              href="#enquire"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#111111] px-7 py-3 text-sm font-semibold text-[#F7F4EC] transition hover:bg-[#C9A24D] hover:text-[#111111]"
            >
              Ask about universities
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          </>
        ) : (
          <>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <FilterSelect label="Location" value={location} options={options.locations} onChange={setLocation} />
              <FilterSelect label="Program" value={program} options={options.programs} onChange={setProgram} />
              <FilterSelect label="Degree level" value={level} options={options.levels} onChange={setLevel} />
              <FilterSelect label="University" value={uni} options={options.universities} onChange={setUni} />
            </div>

            <p aria-live="polite" className="mt-6 text-sm text-[#111111]/55">
              Showing {filtered.length} of {entries.length} universities
            </p>

            <ul className="mt-6 grid gap-6 lg:grid-cols-2">
              {filtered.map(({ university: u, offering: o }) => (
                <li key={u.id} className="group overflow-hidden rounded-3xl bg-[#FFFFFF] shadow-sm ring-1 ring-[#C9A24D]/15 transition hover:-translate-y-1 hover:shadow-xl">
                  {u.campusImage && (
                    <div className="relative aspect-[16/7] overflow-hidden">
                      <Image
                        src={u.campusImage}
                        alt={`${u.name} campus`}
                        fill
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-7">
                    <div className="flex items-start gap-4">
                      {u.logo && (
                        <Image src={u.logo} alt={`${u.name} logo`} width={56} height={56} className="size-14 rounded-xl object-contain" />
                      )}
                      <div>
                        <h3 className="font-display text-3xl leading-tight text-[#111111]">{u.name}</h3>
                        <p className="mt-1 flex items-center gap-1.5 text-sm text-[#111111]/60">
                          <MapPin className="size-4 text-[#C9A24D]" />
                          {u.city}, {u.state}
                        </p>
                      </div>
                    </div>

                    {u.accreditation.length > 0 && (
                      <p className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#111111]/75">
                        <ShieldCheck className="size-4 text-[#C9A24D]" />
                        {u.accreditation.join(" · ")}
                      </p>
                    )}

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {o.programs.map((p) => (
                        <li key={p} className="rounded-full border border-[#C9A24D]/40 px-3 py-1 text-xs text-[#111111]">
                          {p}
                        </li>
                      ))}
                    </ul>

                    {u.facilities.length > 0 && (
                      <p className="mt-5 text-sm leading-relaxed text-[#111111]/60">
                        <span className="font-semibold text-[#111111]">Facilities: </span>
                        {u.facilities.join(", ")}
                      </p>
                    )}
                    {u.hostel !== undefined && (
                      <p className="mt-2 flex items-center gap-2 text-sm text-[#111111]/60">
                        <BedDouble className="size-4 text-[#C9A24D]" />
                        {u.hostel ? "Hostel available" : "No on-campus hostel"}
                      </p>
                    )}

                    <div className="mt-7 flex flex-wrap gap-3 border-t border-[#C9A24D]/25 pt-6">
                      <a
                        href="#enquire"
                        onClick={() =>
                          window.dispatchEvent(new CustomEvent<string>(PROGRAM_EVENT, { detail: o.programs[0] }))
                        }
                        className="rounded-full bg-[#111111] px-5 py-2.5 text-sm font-semibold text-[#F7F4EC] transition hover:bg-[#C9A24D] hover:text-[#111111]"
                      >
                        Admission enquiry
                      </a>
                      <a
                        href={u.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#111111]/15 px-5 py-2.5 text-sm font-semibold text-[#111111] transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
                      >
                        Official website
                        <ArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
