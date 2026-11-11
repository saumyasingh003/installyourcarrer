import Image from "next/image";
import PartnerBanner from "./PartnerBanner";
import AboutSection from "./AboutSection";
import FAQ from "./FAQ";

function HeroHeading({ className = "" }: { className?: string }) {
  return (
    <h1 className={`font-display uppercase leading-[0.95] tracking-tight text-white ${className}`}>
      <span className="block text-[clamp(1.75rem,4.2vw,3.75rem)]">
        NAAC A++
        <br className="hidden md:block" /> Accredited
      </span>
      <span className="mt-2 block text-[clamp(1.125rem,2.5vw,2.25rem)]">Channel Partner of</span>
      <span className="block text-[clamp(1.125rem,2.5vw,2.25rem)] text-[#C9A24D]">Top Private Universities</span>
    </h1>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero - phones: full uncropped photo with the heading in a dark band below */}
      <section className="w-full bg-[#F7F4EC] md:hidden">
        <div className="relative aspect-[542/323] w-full">
          <Image
            src="/hero-mobile.png"
            alt="Four smiling students walking together on a college campus"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="rounded-b-3xl bg-[#111111] px-6 py-6 sm:px-8">
          <HeroHeading />
        </div>
      </section>

      {/* Hero - tablet & up */}
      <section className="relative hidden h-[510px] w-full overflow-hidden md:block">
        <Image
          src="/hero.png"
          alt="Students walking together on a college campus"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Darker on the right where the text sits */}
        <div className="absolute inset-0 bg-linear-to-l from-black/60 via-black/30 via-50% to-black/5" />

        <div className="relative flex h-full items-end justify-end px-8 pt-6 pb-6 lg:px-12 lg:pb-8">
          <HeroHeading className="max-w-[min(30rem,100%)] text-right" />
        </div>
      </section>

      <PartnerBanner />
      <AboutSection />
      <FAQ />
    </main>
  );
}
