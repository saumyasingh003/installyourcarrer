import Image from "next/image";
import PartnerBanner from "./PartnerBanner";
import AboutSection from "./AboutSection";
import FAQ from "./FAQ";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[340px] w-full overflow-hidden md:h-[510px]">
        <Image
          src="/hero.png"
          alt="Students walking together on a college campus"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Black overlay: stronger on the right where the text sits */}
        <div className="absolute inset-0 bg-black/30 md:bg-gradient-to-l md:from-black/60 md:via-black/30 md:to-black/5" />

        <div className="relative flex h-full items-end justify-end pt-6 pb-4 pr-20 pl-6 md:pb-6">
          <h1 className="max-w-120 text-right font-display uppercase leading-[0.95] tracking-tight text-white">
            <span className="block text-[clamp(1.75rem,4.2vw,3.75rem)]">
              NAAC A++
              <br />
              Accredited
            </span>
            <span className="mt-2 block text-[clamp(1.125rem,2.5vw,2.25rem)]">Channel Partner of</span>
            <span className="block text-[clamp(1.125rem,2.5vw,2.25rem)] text-[#C9A24D]">
              Top Private Universities
            </span>
          </h1>
        </div>
      </section>

      <PartnerBanner />
      <AboutSection />
      <FAQ />
    </main>
  );
}
