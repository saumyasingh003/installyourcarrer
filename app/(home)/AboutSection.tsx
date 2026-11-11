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
  "relative overflow-hidden rounded-3xl shadow-lg ring-1 ring-[#C9A24D]/20";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#FFFFFF]">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-[1.4fr_auto_1fr] lg:gap-14 lg:px-10">
        {/* Image collage */}
        <div className="grid grid-cols-[1.1fr_1fr] gap-3">
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
                src="/about/friend.jpg"
                alt="Graduates throwing their caps in the air"
                fill
                sizes="(min-width: 1024px) 24vw, 45vw"
                className="object-cover"
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
        <ul className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-1 lg:gap-16">
          {STATS.map((s) => (
            <li key={s.label} className="text-center">
              <p className="font-number text-4xl leading-none font-bold text-[#C9A24D] lining-nums tabular-nums">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-[#111111]/65">{s.label}</p>
            </li>
          ))}
        </ul>

        {/* Text */}
        <div>
          <h2 className="font-display text-5xl leading-none tracking-tight text-[#111111]">
            About <span className="text-[#C9A24D] italic">Us</span>
          </h2>

          <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-[#111111]/75">
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
