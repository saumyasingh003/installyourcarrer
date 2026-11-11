"use client";

import { useState } from "react";
import { CircleCheck, Send } from "lucide-react";
import { CONTACT } from "./contact-info";
import Dropdown from "./Dropdown";

const COURSES = [
  "Engineering",
  "Animation",
  "Medical",
  "Agriculture",
  "Pharmacy",
  "Physiotherapy",
  "Nursing",
  "Paramedical",
  "Management",
  "Design",
  "Architecture",
  "Law",
  "Other",
];
const QUALIFICATIONS = ["10th", "12th", "Diploma", "Graduate", "Post Graduate", "Other"];

const labelCls = "mb-1.5 block text-sm font-semibold text-[#F7F4EC]";
const fieldCls =
  "w-full rounded-lg border border-[#F7F4EC]/15 bg-[#FFFFFF]/5 px-4 py-2.5 text-[15px] text-[#FFFFFF] placeholder:text-[#F7F4EC]/45 outline-none transition focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/30";

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className={labelCls}>
      {children} <span className="text-[#C9A24D]">*</span>
    </label>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const text = [
      "*New Admission Enquiry*",
      `Name: ${d.name}`,
      `Mobile: ${d.mobile}`,
      `Email: ${d.email}`,
      `Preferred course: ${d.course}`,
      `Qualification: ${d.qualification}`,
      `Message: ${d.message}`,
    ].join("\n");
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <div className="rounded-3xl bg-[#111111] p-6 shadow-xl sm:p-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-[#FFFFFF] sm:text-3xl">
        Start Your <span className="text-[#C9A24D]">Admission</span> Enquiry
      </h2>

      {sent && (
        <p className="mt-4 flex items-center gap-2 rounded-lg border border-[#C9A24D]/40 bg-[#C9A24D]/10 px-4 py-3 text-sm text-[#F7F4EC]">
          <CircleCheck className="size-5 shrink-0 text-[#C9A24D]" />
          Thanks! Your enquiry has opened in WhatsApp - just hit send.
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-6 grid gap-x-4 gap-y-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Student name</Label>
          <input id="name" name="name" required autoComplete="name" placeholder="Full name" className={fieldCls} />
        </div>
        <div>
          <Label htmlFor="mobile">Mobile</Label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            title="Enter a valid 10-digit mobile number"
            autoComplete="tel-national"
            placeholder="10-digit mobile"
            className={fieldCls}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldCls} />
        </div>
        <div>
          <Label htmlFor="course">Preferred course</Label>
          <Dropdown id="course" name="course" placeholder="Select course" options={COURSES} twoColumns />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="qualification">Qualification</Label>
          <Dropdown id="qualification" name="qualification" placeholder="Select qualification" options={QUALIFICATIONS} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Message</Label>
          <textarea id="message" name="message" required rows={3} placeholder="Tell us about your goals" className={`${fieldCls} resize-none`} />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg bg-[#C9A24D] px-6 py-3 font-bold text-[#111111] transition hover:bg-[#d8b35e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24D] sm:col-span-2"
        >
          <Send className="size-4" />
          Submit Enquiry
        </button>
      </form>
    </div>
  );
}
