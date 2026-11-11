"use client";

import { ArrowUpRight } from "lucide-react";

export const PROGRAM_EVENT = "course-enquiry:program";

/** Scrolls to the enquiry form and preselects the given program. */
export default function EnquireButton({ program, className = "" }: { program: string; className?: string }) {
  return (
    <a
      href="#enquire"
      onClick={() => window.dispatchEvent(new CustomEvent<string>(PROGRAM_EVENT, { detail: program }))}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold text-[#111111] transition-colors hover:text-[#C9A24D] ${className}`}
    >
      Enquire Now
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="sr-only"> about {program}</span>
    </a>
  );
}
