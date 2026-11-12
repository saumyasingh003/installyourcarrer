import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// TODO: replace with real figures before going live
const STATS = [
  { value: "12+", label: "Course Streams" },
  { value: "50+", label: "Partner Universities" },
  { value: "5K+", label: "Students Guided" },
  { value: "10+", label: "Years of Guidance" },
];

const imgFrame =
  "relative overflow-hidden rounded-lg lg:rounded-3xl lg:shadow-lg lg:ring-1 lg:ring-[#C9A24D]/20";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#FFFFFF]">
      {/* Phone/tablet: stacked · laptop: collage + text, stats below · large desktop: 3 columns */}
      <div className="grid w-full items-center gap-12 px-6 pt-8 pb-16 sm:px-8 sm:pt-10 sm:pb-20 lg:grid-cols-2 lg:py-20 lg:gap-14 lg:px-12 xl:grid-cols-[1.4fr_auto_1fr] 2xl:gap-20 2xl:px-20 2xl:py-28">
        {/* Image collage */}
        {/* Phones/tablets: nearly full width (small side gap), slightly rounded corners */}
        <div className="-mx-3 grid grid-cols-[1.1fr_1fr] gap-1.5 sm:-mx-4 lg:mx-0 lg:gap-3">
          <div className={`${imgFrame} aspect-[3/4.6]`}>
            <Image
              src="/about/graduate.jpg"
              alt="Graduate in cap and gown at a convocation ceremony"
              fill
              sizes="(min-width: 1024px) 26vw, 50vw"
              className="object-cover object-[64%_50%]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className={`${imgFrame} flex-[3]`}>
              <Image
                src="/about/students-campus.jpg"
                alt="Students laughing together as they walk across campus"
                fill
                sizes="(min-width: 1024px) 24vw, 45vw"
                className="object-cover object-[40%_40%]"
              />
            </div>
            <div className={`${imgFrame} flex-[2]`}>
              <Image
                src="/about/classroom.jpg"
                alt="College students in a classroom"
                fill
                sizes="(min-width: 1024px) 24vw, 45vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
          </div>
        </div>

        {/* Stats column */}
        <ul className="-mx-3 grid grid-cols-2 gap-x-4 gap-y-6 rounded-2xl bg-[#F7F4EC] px-4 py-6 sm:mx-0 sm:grid-cols-4 sm:gap-8 sm:bg-transparent sm:p-0 lg:order-last lg:col-span-2 lg:border-t lg:border-[#C9A24D]/25 lg:pt-12 xl:order-none xl:col-span-1 xl:grid-cols-1 xl:gap-16 xl:border-0 xl:pt-0">
          {STATS.map((s) => (
            <li key={s.label} className="text-center">
              <p className="font-number text-3xl leading-none font-bold text-[#C9A24D] lining-nums tabular-nums sm:text-4xl 2xl:text-5xl">
                {s.value}
              </p>
              <p className="mt-1.5 text-xs text-[#111111]/65 sm:mt-2 sm:text-sm">{s.label}</p>
            </li>
          ))}
        </ul>

        {/* Text */}
        <div>
          <h2 className="font-display text-4xl leading-none tracking-tight text-[#111111] sm:text-5xl 2xl:text-6xl">
            About <span className="text-[#C9A24D] italic">Us</span>
          </h2>

          <div className="mt-5 space-y-4 text-[14.5px] leading-relaxed text-[#111111]/75 sm:mt-6 sm:space-y-5 sm:text-[16px] 2xl:text-lg">
            <p>
              <strong className="text-[#111111]">InstallYourCareer</strong> is a Patna-based education
              consultancy helping students find the right path in{" "}
              <strong className="text-[#111111]">engineering, medical, management, law</strong> and
              other professional streams. As a channel partner of top NAAC A++ accredited private
              universities, we offer personalised counselling and admission support across India.
            </p>
            <p>
              From choosing the right course to preparing for exams like{" "}
              <strong className="text-[#111111]">JEE Main, NEET-UG, CUET and CAT</strong>, we guide
              students at every step - from application to admission - with honest advice and a
              transparent process.
            </p>
            <p>
              We believe every student deserves the right direction and the best opportunity. Our
              mission is to turn ambitions into achievements through expert mentoring and timely
              guidance.
            </p>
          </div>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 border-b border-[#C9A24D]/50 pb-2 text-xs font-bold tracking-[0.25em] text-[#C9A24D] transition-colors hover:border-[#C9A24D]"
          >
            KNOW MORE
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
