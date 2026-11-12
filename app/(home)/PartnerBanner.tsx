import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PartnerBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F4EC]">
      {/* soft gold glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 size-[520px] rounded-full bg-[#C9A24D]/10 blur-3xl" />

      <div className="relative w-full px-6 pt-10 pb-12 sm:px-8 sm:pb-20 lg:px-12 lg:pt-14 lg:pb-28 2xl:px-20">
        <div className="grid items-end gap-5 sm:gap-10 lg:grid-cols-[1fr_auto]">
          <h2 className="font-display text-[clamp(2.3rem,8vw,7.5rem)] leading-[0.92] tracking-tight text-[#111111] uppercase">
            Your Dreams
            <br />
            Deserve
            <br />
            <span className="inline-flex items-center gap-6 text-[#C9A24D]">
              The Best
              <span className="hidden h-px w-32 bg-[#C9A24D] sm:block lg:w-48" />
            </span>
          </h2>

          <p className="max-w-xs text-[13px] leading-relaxed sm:text-sm text-[#111111]/55 lg:mb-4 lg:text-right">
            From choosing the right course to securing admission - one trusted partner at every step
            of your journey.
          </p>
        </div>

        <p className="mt-8 max-w-[960px] font-display text-[1.15rem] leading-[1.4] tracking-[-0.02em] text-[#111111] italic sm:mt-12 sm:text-[1.75rem] sm:leading-[1.2] md:text-[2rem] lg:text-[2.4rem] lg:leading-[1.15] lg:tracking-[-0.03em] 2xl:max-w-[1200px] 2xl:text-[2.8rem]">
          We believe every successful career begins with the right educational foundation. Through
          university partnerships, expert guidance, and diverse academic opportunities, we help
          students take confident steps towards their future.
        </p>

        <Link
          href="/about"
          className="group mt-10 inline-flex items-center gap-2 border-b border-[#C9A24D]/50 pb-2 text-xs font-bold tracking-[0.25em] text-[#C9A24D] transition-colors hover:border-[#C9A24D]"
        >
          OUR APPROACH
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
