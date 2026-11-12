"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, SlidersHorizontal } from "lucide-react";

type Option = { value: string; count: number };

/** Light-themed custom dropdown used for the course category filter on phones. */
export default function CategoryDropdown({
  options,
  value,
  onChange,
}: {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const current = options.find((o) => o.value === value) ?? options[0];

  // Close on outside tap
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  function toggle() {
    setActive(Math.max(0, options.findIndex((o) => o.value === value)));
    setOpen((o) => !o);
  }

  function choose(v: string) {
    onChange(v);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        toggle();
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(options.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(options[active].value);
    } else if (e.key === "Escape" || e.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label="Filter by category"
        aria-activedescendant={open ? `${listId}-${active}` : undefined}
        onClick={toggle}
        onKeyDown={onKeyDown}
        className={`flex w-full items-center gap-3 rounded-2xl border bg-[#FFFFFF] px-4 py-3 text-left shadow-sm transition ${
          open ? "border-[#C9A24D] ring-2 ring-[#C9A24D]/25" : "border-[#111111]/10"
        }`}
      >
        <SlidersHorizontal className="size-4 shrink-0 text-[#C9A24D]" />
        <span className="min-w-0 flex-1">
          <span className="block text-[11px] font-bold tracking-[0.15em] text-[#111111]/45 uppercase">Category</span>
          <span className="block truncate text-[15px] font-semibold text-[#111111]">{current.value}</span>
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-[#111111]/60 transition-transform duration-200 ${open ? "rotate-180 text-[#C9A24D]" : ""}`}
        />
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Category"
          className="absolute inset-x-0 z-30 mt-2 overflow-hidden rounded-2xl border border-[#C9A24D]/30 bg-[#FFFFFF] p-1.5 shadow-2xl"
        >
          {options.map((o, i) => {
            const selected = o.value === value;
            return (
              <li
                key={o.value}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={selected}
                onPointerEnter={() => setActive(i)}
                onClick={() => choose(o.value)}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-3 text-[15px] transition-colors ${
                  i === active ? "bg-[#F7F4EC]" : ""
                } ${selected ? "font-semibold text-[#111111]" : "text-[#111111]/75"}`}
              >
                <span className="flex items-center gap-2">
                  {selected ? <Check className="size-4 text-[#C9A24D]" /> : <span className="size-4" />}
                  {o.value}
                </span>
                <span className="font-number text-xs font-bold text-[#111111]/40 lining-nums">{o.count}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
