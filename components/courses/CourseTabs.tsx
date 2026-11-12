"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export interface CourseTab {
  /** Matches the id of the section inside, so links like #enquire open the right tab. */
  id: string;
  label: string;
  content: React.ReactNode;
}

const NAVBAR_HEIGHT = 80; // site navbar is h-20

/**
 * Sticky tab bar under the course hero. Only the selected section is shown; the rest stay in the
 * page (hidden) so form input is kept and content remains crawlable.
 */
export default function CourseTabs({ tabs }: { tabs: CourseTab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);
  const anchorRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const idKey = tabs.map((t) => t.id).join("|");

  const open = useCallback(
    (id: string, scroll = true) => {
      if (!idKey.split("|").includes(id)) return false;
      setActive(id);
      history.replaceState(null, "", `#${id}`);
      if (scroll && anchorRef.current) {
        const top = anchorRef.current.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
        window.scrollTo({ top, behavior: "smooth" });
      }
      return true;
    },
    [idKey],
  );

  // Open the tab named in the URL hash, and intercept any in-page link to a tab (e.g. "Enquire Now").
  useEffect(() => {
    const fromHash = window.location.hash.slice(1);
    const frame = fromHash ? requestAnimationFrame(() => open(fromHash)) : 0;

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.('a[href^="#"]');
      if (a && open(a.getAttribute("href")!.slice(1))) e.preventDefault();
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  // On phones the bar scrolls sideways - keep the active tab visible.
  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-tab="${active}"]`)
      ?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [active]);

  return (
    <>
      <div ref={anchorRef} aria-hidden />
      <div className="sticky top-20 z-40 border-y border-[#C9A24D]/30 bg-[#111111]">
        {/* Phones: section dropdown */}
        <SectionDropdown tabs={tabs} active={active} onSelect={(id) => open(id)} />

        {/* Tablet & up: tab bar */}
        <div
          ref={listRef}
          role="tablist"
          aria-label="Course information"
          className="mx-auto hidden max-w-[1440px] gap-8 overflow-x-auto px-6 text-sm whitespace-nowrap [scrollbar-width:none] sm:flex lg:justify-between lg:px-10 [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((t, i) => {
            const selected = active === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                data-tab={t.id}
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => open(t.id)}
                onKeyDown={(e) => {
                  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                  e.preventDefault();
                  const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
                  open(next.id, false);
                  document.getElementById(`tab-${next.id}`)?.focus();
                }}
                className={`relative flex shrink-0 items-center gap-2 py-5 transition-colors after:absolute after:inset-x-0 after:bottom-3.5 after:h-0.5 sm:after:bottom-[18px] after:origin-left after:bg-[#C9A24D] after:transition-transform after:duration-300 hover:text-[#C9A24D] sm:py-6 ${
                  selected ? "font-semibold text-[#C9A24D] after:scale-x-100" : "text-[#F7F4EC]/75 after:scale-x-0"
                }`}
              >
                <span className="font-number text-xs font-bold text-[#C9A24D] lining-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {tabs.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`panel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          hidden={active !== t.id}
        >
          {t.content}
        </div>
      ))}
    </>
  );
}

function SectionDropdown({
  tabs,
  active,
  onSelect,
}: {
  tabs: CourseTab[];
  active: string | undefined;
  onSelect: (id: string) => void;
}) {
  const [openList, setOpenList] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const idx = Math.max(0, tabs.findIndex((t) => t.id === active));
  const current = tabs[idx];

  useEffect(() => {
    if (!openList) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpenList(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenList(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openList]);

  return (
    <div ref={rootRef} className="relative sm:hidden">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={openList}
        aria-label={`Section: ${current?.label}`}
        onClick={() => setOpenList((o) => !o)}
        className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
      >
        <span className="font-number text-xs font-bold text-[#C9A24D] lining-nums">
          {String(idx + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 truncate text-[15px] font-semibold text-[#C9A24D]">{current?.label}</span>
        <span className="text-[11px] text-[#F7F4EC]/45">
          {idx + 1}/{tabs.length}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-[#F7F4EC]/70 transition-transform duration-200 ${openList ? "rotate-180 text-[#C9A24D]" : ""}`}
        />
      </button>

      {openList && (
        <ul
          role="listbox"
          aria-label="Course sections"
          className="absolute inset-x-0 top-full z-50 border-t border-[#F7F4EC]/10 bg-[#111111] pb-2 shadow-2xl"
        >
          {tabs.map((t, i) => {
            const selected = t.id === active;
            return (
              <li key={t.id} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    setOpenList(false);
                    onSelect(t.id);
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left text-[15px] transition-colors ${
                    selected ? "bg-[#C9A24D]/10 font-semibold text-[#C9A24D]" : "text-[#F7F4EC]/80 hover:bg-[#FFFFFF]/5"
                  }`}
                >
                  <span className="font-number text-xs font-bold text-[#C9A24D] lining-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{t.label}</span>
                  {selected && <Check className="size-4 text-[#C9A24D]" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
