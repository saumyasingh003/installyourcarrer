import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | InstallYourCareer",
  description:
    "Career counselling, admission guidance, college selection, entrance exam preparation and scholarship support.",
};

type Service = {
  title: string;
  description: string;
  points: string[];
  image: string;
  alt: string;
};

const SERVICES: Service[] = [
  {
    title: "Career Counselling",
    description:
      "One-on-one sessions that match your interests, strengths and goals with the right career path - so you choose a course with confidence, not confusion.",
    points: [
      "Interest and aptitude based career mapping",
      "Personal sessions with experienced counsellors",
      "Clear guidance for students and parents",
    ],
    image: "/services/counsell.png",
    alt: "Counsellor and student celebrating during a consultation",
  },
  {
    title: "Admission Guidance",
    description:
      "End-to-end support with eligibility, deadlines, documents and each college's admission process - so you never miss an important date.",
    points: [
      "Eligibility check and application timeline planning",
      "Document preparation and verification checklist",
      "Counselling rounds and seat confirmation support",
    ],
    image: "/services/admission.jpg",
    alt: "Warmly lit library shelves full of books",
  },
  {
    title: "College Selection",
    description:
      "Compare colleges on what really matters - accreditation, placements, fees and location - and shortlist the ones that truly fit you.",
    points: [
      "Shortlists from top NAAC A++ partner universities",
      "Fees, placement and facility comparison",
      "Campus and course insights before you decide",
    ],
    image: "/services/college.jpg",
    alt: "University building with a green lawn in front",
  },
  {
    title: "Entrance Exam Guidance",
    description:
      "Know which exams to take, when to apply and how to prepare - from JEE Main and NEET-UG to CUET and CAT.",
    points: [
      "Exam selection based on your target courses",
      "Form filling and important date reminders",
      "Preparation tips and cut-off insights",
    ],
    image: "/services/exams.jpg",
    alt: "Student writing notes at a desk",
  },
  {
    title: "Scholarships & Education Loans",
    description:
      "Make quality education affordable with help finding scholarships, fee concessions and education loan options that suit your family.",
    points: [
      "Scholarship and fee waiver eligibility check",
      "Education loan guidance and paperwork help",
      "Budget-friendly college options",
    ],
    image: "/services/scholarship.jpg",
    alt: "Young plant growing out of a pile of coins",
  },
];

export default function ServicesPage() {
  return (
    <main className="w-full bg-[#F7F4EC]">
      <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-20 lg:px-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#111111]">
          Our <span className="text-[#C9A24D]">Services</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[#111111]/70">
          Everything you need to choose, apply and get admitted - in one place.
        </p>

        <div className="mt-10 space-y-16 sm:mt-16 sm:space-y-24 lg:space-y-52">
          {SERVICES.map((s, i) => {
            const flip = i % 2 === 1;
            const num = String(i + 1).padStart(2, "0");
            return (
              <section key={s.title} className="relative grid items-center lg:grid-cols-12">
                {/* Image - asymmetric corners, mirrored on alternate rows */}
                <div
                  className={`relative aspect-[16/11] overflow-hidden shadow-lg lg:row-start-1 lg:aspect-[16/10] ${
                    flip
                      ? "rounded-tl-lg rounded-tr-[2.5rem] rounded-br-lg rounded-bl-[2.5rem] sm:rounded-tr-[4rem] sm:rounded-bl-[4rem] lg:col-span-8 lg:col-start-5 lg:rounded-tr-[5rem] lg:rounded-bl-[5rem]"
                      : "rounded-tl-[2.5rem] rounded-tr-lg rounded-br-[2.5rem] rounded-bl-lg sm:rounded-tl-[4rem] sm:rounded-br-[4rem] lg:col-span-8 lg:col-start-1 lg:rounded-tl-[5rem] lg:rounded-br-[5rem]"
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/25 to-transparent" />
                </div>

                {/* Text card - overlaps the image edge */}
                <div
                  className={`relative z-10 mx-3 -mt-10 sm:mx-8 sm:-mt-20 lg:row-start-1 lg:mx-0 lg:mt-24 ${
                    flip ? "lg:col-span-6 lg:col-start-1" : "lg:col-span-6 lg:col-start-7"
                  }`}
                >
                  {/* Ghost number (desktop) - sits above the card, clear of the image */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute bottom-full mb-1 hidden font-number text-[5.5rem] leading-[0.8] font-bold lining-nums text-[#C9A24D]/35 select-none lg:block xl:text-[7rem] ${
                      flip ? "left-0" : "right-0"
                    }`}
                  >
                    {num}
                  </span>

                  <div
                    className={`relative rounded-3xl border-t-[3px] border-[#C9A24D] bg-[#FFFFFF] p-6 shadow-xl sm:p-10 ${
                      flip ? "lg:rounded-tl-none" : "lg:rounded-tr-none"
                    }`}
                  >
                    {/* Number (mobile/tablet) - inside the card */}
                    <span
                      aria-hidden="true"
                      className="mb-3 block font-number text-4xl leading-none font-bold lining-nums text-[#C9A24D]/50 sm:text-5xl lg:hidden"
                    >
                      {num}
                    </span>

                    <h2 className="font-display text-[2rem] leading-none tracking-tight text-[#111111] sm:text-5xl lg:text-[2.75rem] xl:text-5xl">
                      {s.title}
                    </h2>

                    <p className="mt-5 text-[16px] leading-relaxed text-[#111111]/70">{s.description}</p>

                    <ul className="mt-5 space-y-2.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-[15px] text-[#111111]/75">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#C9A24D]" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#111111] px-7 py-3 text-sm font-semibold text-[#F7F4EC] transition hover:bg-[#C9A24D] hover:text-[#111111]"
                    >
                      Enquire Now
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
