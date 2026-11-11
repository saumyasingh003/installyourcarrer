"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  { id: "programs", label: "Explore Available Programs" },
  { id: "eligibility", label: "Check Eligibility" },
  { id: "exams", label: "Entrance Examinations" },
  { id: "universities", label: "Explore Partner Universities" },
  { id: "fees", label: "Fees & Scholarships" },
  { id: "enquire", label: "Admission Enquiry" },
];

// Navbar (80px) + this bar (~56px): a section counts as "current" once its top passes this line.
const OFFSET = 150;

/** In-page jump links, sticky under the site navbar (h-20). Highlights the section in view. */
export default function CourseSectionNav() {
  const [active, setActive] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    let frame = 0;

    const update = () => {
      frame = 0;
      let current: string | null = null;
      for (const s of sections) {
        if (s.getBoundingClientRect().top - OFFSET <= 0) current = s.id;
      }
      // At the very bottom of the page, the last section is current even if short.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = sections[sections.length - 1]?.id ?? current;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // On phones the bar scrolls sideways - keep the active link visible.
  useEffect(() => {
    if (!active) return;
    listRef.current
      ?.querySelector<HTMLElement>(`[data-id="${active}"]`)
      ?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label="On this page" className="sticky top-20 z-40 border-y border-[#C9A24D]/30 bg-[#111111]">
      <ul
        ref={listRef}
        className="mx-auto flex max-w-[1440px] gap-8 overflow-x-auto px-6 text-sm whitespace-nowrap [scrollbar-width:none] lg:justify-between lg:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {LINKS.map((l, i) => {
          const isActive = active === l.id;
          return (
            <li key={l.id} data-id={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`relative flex items-center gap-2 py-4 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-[#C9A24D] after:transition-transform after:duration-300 hover:text-[#C9A24D] ${
                  isActive ? "font-semibold text-[#C9A24D] after:scale-x-100" : "text-[#F7F4EC]/75 after:scale-x-0"
                }`}
              >
                <span className="font-number text-xs font-bold text-[#C9A24D] lining-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
