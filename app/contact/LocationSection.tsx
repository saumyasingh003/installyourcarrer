import { ArrowRight, MapPin } from "lucide-react";
import { CONTACT } from "./contact-info";

export default function LocationSection() {
  const q = encodeURIComponent(CONTACT.mapQuery);
  const embedSrc = `https://www.google.com/maps?q=${q}&z=15&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${q}`;

  return (
    <section className="mt-12 grid overflow-hidden rounded-2xl sm:mt-16 sm:rounded-3xl bg-[#111111] shadow-xl lg:grid-cols-[2fr_3fr]">
      {/* Text panel */}
      <div className="relative flex flex-col justify-center bg-gradient-to-br from-[#C9A24D]/15 via-transparent to-transparent p-6 sm:p-10 lg:p-12">
        <span className="text-[11px] font-semibold tracking-[0.25em] sm:text-xs sm:tracking-[0.3em] text-[#C9A24D]">OUR OFFICE</span>

        <h2 className="mt-4 font-nav text-[2rem] leading-[1.05] text-[#FFFFFF] sm:mt-6 sm:text-5xl">
          Where your
          <br />
          <em className="text-[#C9A24D]">career journey</em>
          <br />
          begins.
        </h2>

        <p className="mt-4 max-w-md text-sm sm:mt-6 sm:text-[15px] leading-relaxed text-[#F7F4EC]/70">
          Visit us to meet our counsellors, talk through your options, and leave with a clear plan for
          the right course and college.
        </p>

        <p className="mt-4 flex max-w-md items-start gap-3 text-[13px] sm:mt-5 sm:text-sm text-[#F7F4EC]/80">
          <MapPin className="mt-0.5 size-4 shrink-0 text-[#C9A24D]" />
          {CONTACT.address}
        </p>

        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A24D] px-6 py-3 text-xs font-bold tracking-[0.12em] whitespace-nowrap sm:mt-8 sm:w-fit sm:gap-3 sm:px-7 sm:py-3.5 sm:text-sm sm:tracking-[0.15em] text-[#111111] transition hover:bg-[#d8b35e]"
        >
          GET DIRECTIONS
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Map */}
      {/* Google draws a place card in the map's top-left corner that can't be styled away,
          so the iframe is made taller and shifted up to crop that card out of view. */}
      <div className="relative min-h-[260px] overflow-hidden sm:min-h-[340px] lg:min-h-[480px]">
        <iframe
          title="Office location on Google Maps"
          src={embedSrc}
          className="absolute inset-x-0 -top-[170px] h-[calc(100%+170px)] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
