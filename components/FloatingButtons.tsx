"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/app/contact/icons";
import { CONTACT } from "@/app/contact/contact-info";


const baseBtn =
  "flex size-12 sm:size-14 items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24D]";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-center gap-3 sm:right-5 sm:bottom-5 sm:gap-4">
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${baseBtn} bg-[#111111]/85 text-[#F7F4EC] hover:bg-[#111111] hover:text-[#C9A24D] ${
          showTop ? "opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="size-5 sm:size-6" strokeWidth={3} />
      </button>

      <a
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`${baseBtn} bg-[#111111] text-[#FFFFFF] hover:text-[#C9A24D]`}
      >
        <WhatsAppIcon className="size-6 sm:size-7" />
      </a>

      <a
        href={`tel:${CONTACT.phone}`}
        aria-label="Call us"
        className={`${baseBtn} bg-[#C9A24D] text-[#FFFFFF] hover:bg-[#b8913f]`}
      >
        <Phone className="size-5 sm:size-6" fill="currentColor" strokeWidth={0} />
      </a>

    </div>
  );
}
