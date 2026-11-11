"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

type Props = {
  id: string;
  name: string;
  placeholder: string;
  options: string[];
  /** Show options in two columns on larger screens (good for long lists). */
  twoColumns?: boolean;
  required?: boolean;
  /** Optional controlled mode. */
  value?: string;
  onValueChange?: (value: string) => void;
  /** Extra attributes for validation styling. */
  invalid?: boolean;
  describedBy?: string;
};

export default function Dropdown({
  id,
  name,
  placeholder,
  options,
  twoColumns,
  required = true,
  value: controlled,
  onValueChange,
  invalid,
  describedBy,
}: Props) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState("");
  const value = controlled ?? internal;
  const setValue = (v: string) => {
    setInternal(v);
    onValueChange?.(v);
  };
  const [active, setActive] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  // Clear when the parent form is reset (controlled parents reset their own state)
  useEffect(() => {
    const form = rootRef.current?.closest("form");
    if (!form) return;
    const onReset = () => setInternal("");
    form.addEventListener("reset", onReset);
    return () => form.removeEventListener("reset", onReset);
  }, []);

  function openList() {
    setActive(Math.max(0, options.indexOf(value)));
    setOpen(true);
  }

  function choose(option: string) {
    setValue(option);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openList();
      }
      return;
    }
    const step = twoColumns ? 2 : 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActive((i) => Math.min(options.length - 1, i + step));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActive((i) => Math.max(0, i - step));
        break;
      case "ArrowRight":
        if (twoColumns) {
          e.preventDefault();
          setActive((i) => Math.min(options.length - 1, i + 1));
        }
        break;
      case "ArrowLeft":
        if (twoColumns) {
          e.preventDefault();
          setActive((i) => Math.max(0, i - 1));
        }
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (active >= 0) choose(options[active]);
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open && active >= 0 ? `${listId}-${active}` : undefined}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
        className={`flex w-full items-center justify-between rounded-lg border bg-[#FFFFFF]/5 px-4 py-2.5 text-left text-[15px] outline-none transition ${
          open
            ? "border-[#C9A24D] ring-2 ring-[#C9A24D]/30"
            : invalid
              ? "border-[#e57373]"
              : "border-[#F7F4EC]/15 focus-visible:border-[#C9A24D] focus-visible:ring-2 focus-visible:ring-[#C9A24D]/30"
        } ${value ? "text-[#FFFFFF]" : "text-[#F7F4EC]/45"}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          className={`size-4 shrink-0 text-[#F7F4EC]/70 transition-transform duration-200 ${open ? "rotate-180 text-[#C9A24D]" : ""}`}
        />
      </button>

      {/* Carries the value into the form and triggers the browser's "required" message */}
      <input
        tabIndex={-1}
        aria-hidden="true"
        name={name}
        value={value}
        required={required}
        onChange={() => {}}
        onFocus={() => buttonRef.current?.focus()}
        className="pointer-events-none absolute bottom-0 left-4 h-px w-px opacity-0"
      />

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-labelledby={id}
          className={`absolute z-20 mt-2 w-full rounded-xl border border-[#C9A24D]/30 bg-[#1a1a1a] p-1.5 shadow-2xl ${
            twoColumns ? "right-0 grid gap-0.5 sm:w-[min(26rem,calc(100vw-4rem))] sm:grid-cols-2" : "space-y-0.5"
          }`}
        >
          {options.map((option, i) => {
            const selected = option === value;
            return (
              <li
                key={option}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={selected}
                onPointerEnter={() => setActive(i)}
                onClick={() => choose(option)}
                className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-[15px] transition-colors ${
                  i === active ? "bg-[#C9A24D]/15 text-[#FFFFFF]" : "text-[#F7F4EC]/80"
                } ${selected ? "font-semibold text-[#C9A24D]" : ""}`}
              >
                {option}
                {selected && <Check className="size-4 text-[#C9A24D]" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
