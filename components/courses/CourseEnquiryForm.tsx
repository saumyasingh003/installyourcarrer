"use client";

import { useEffect, useRef, useState } from "react";
import { CircleAlert, CircleCheck, Loader2, MessageCircle, Send } from "lucide-react";
import Dropdown from "@/app/contact/Dropdown";
import { CONTACT } from "@/app/contact/contact-info";
import {
  QUALIFICATIONS,
  normaliseEnquiry,
  validateEnquiry,
  type Enquiry,
  type EnquiryErrors,
} from "@/lib/enquiry";
import { PROGRAM_EVENT } from "./EnquireButton";

type Status = { kind: "idle" } | { kind: "loading" } | { kind: "success" } | { kind: "error"; message: string };

const labelCls = "mb-1.5 block text-sm font-semibold text-[#F7F4EC]";
const fieldCls =
  "w-full rounded-lg border bg-[#FFFFFF]/5 px-4 py-2.5 text-[15px] text-[#FFFFFF] placeholder:text-[#F7F4EC]/45 outline-none transition focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/30";
const borderCls = (bad?: string) => (bad ? "border-[#e57373]" : "border-[#F7F4EC]/15");

function Field({
  id,
  label,
  required,
  error,
  children,
  className = "",
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelCls}>
        {label} {required ? <span className="text-[#C9A24D]">*</span> : <span className="font-normal text-[#F7F4EC]/40">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-[#f19999]">
          {error}
        </p>
      )}
    </div>
  );
}

function whatsappLink(d: Enquiry) {
  const text = [
    "*New Admission Enquiry*",
    `Name: ${d.name}`,
    `Mobile: ${d.mobile}`,
    `Email: ${d.email}`,
    `Course: ${d.course}`,
    d.program && `Program: ${d.program}`,
    `Qualification: ${d.qualification}`,
    d.location && `Preferred location: ${d.location}`,
    d.message && `Message: ${d.message}`,
  ]
    .filter(Boolean)
    .join("\n");
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}

export default function CourseEnquiryForm({ course, programs }: { course: string; programs: string[] }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [program, setProgram] = useState("");
  const [qualification, setQualification] = useState("");
  const [lastData, setLastData] = useState<Enquiry | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // "Enquire Now" buttons elsewhere on the page preselect a program.
  useEffect(() => {
    const onProgram = (e: Event) => {
      const p = (e as CustomEvent<string>).detail;
      if (programs.includes(p)) setProgram(p);
    };
    window.addEventListener(PROGRAM_EVENT, onProgram);
    return () => window.removeEventListener(PROGRAM_EVENT, onProgram);
  }, [programs]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form));
    const data = normaliseEnquiry({ ...raw, course, program, qualification });
    const found = validateEnquiry(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`#enq-${first}`)?.focus();
      return;
    }

    setLastData(data);
    setStatus({ kind: "loading" });
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: raw.website ?? "" }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string; errors?: EnquiryErrors };
      if (!res.ok) {
        if (json.errors) setErrors(json.errors);
        setStatus({ kind: "error", message: json.error ?? "Something went wrong. Please try again." });
      } else {
        setStatus({ kind: "success" });
        form.reset();
        setProgram("");
        setQualification("");
      }
    } catch {
      setStatus({ kind: "error", message: "Network error - check your connection and try again." });
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const loading = status.kind === "loading";

  return (
    <div className="rounded-3xl bg-[#111111] p-6 shadow-xl sm:p-9">
      <h3 className="font-display text-3xl text-[#FFFFFF] sm:text-4xl">
        Enquire about <em className="text-[#C9A24D]">{course}</em>
      </h3>
      <p className="mt-2 text-sm text-[#F7F4EC]/60">Our admission team will get back to you within working hours.</p>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {status.kind === "success" && (
          <p className="mt-5 flex items-start gap-2 rounded-lg border border-[#C9A24D]/40 bg-[#C9A24D]/10 px-4 py-3 text-sm text-[#F7F4EC]">
            <CircleCheck className="size-5 shrink-0 text-[#C9A24D]" />
            Thank you - your enquiry has been received. Our team will contact you soon.
          </p>
        )}
        {status.kind === "error" && (
          <div className="mt-5 rounded-lg border border-[#e57373]/50 bg-[#e57373]/10 px-4 py-3 text-sm text-[#F7F4EC]">
            <p className="flex items-start gap-2">
              <CircleAlert className="size-5 shrink-0 text-[#f19999]" />
              {status.message} Your enquiry was not sent.
            </p>
            {lastData && Object.keys(errors).length === 0 && (
              <a
                href={whatsappLink(lastData)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-semibold text-[#C9A24D] underline-offset-4 hover:underline"
              >
                <MessageCircle className="size-4" />
                Send it on WhatsApp instead
              </a>
            )}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-x-4 gap-y-5 sm:grid-cols-2">
        {/* Honeypot (hidden from people) */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

        <Field id="enq-name" label="Full name" required error={errors.name}>
          <input
            id="enq-name"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={!!errors.name || undefined}
            aria-describedby={errors.name ? "enq-name-error" : undefined}
            className={`${fieldCls} ${borderCls(errors.name)}`}
          />
        </Field>
        <Field id="enq-mobile" label="Mobile number" required error={errors.mobile}>
          <input
            id="enq-mobile"
            name="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile"
            aria-invalid={!!errors.mobile || undefined}
            aria-describedby={errors.mobile ? "enq-mobile-error" : undefined}
            className={`${fieldCls} ${borderCls(errors.mobile)}`}
          />
        </Field>
        <Field id="enq-email" label="Email address" required error={errors.email}>
          <input
            id="enq-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email || undefined}
            aria-describedby={errors.email ? "enq-email-error" : undefined}
            className={`${fieldCls} ${borderCls(errors.email)}`}
          />
        </Field>
        <Field id="enq-course" label="Selected course" required>
          <input id="enq-course" value={course} readOnly className={`${fieldCls} ${borderCls()} cursor-default text-[#C9A24D]`} />
        </Field>
        <Field id="enq-program" label="Preferred program">
          <Dropdown
            id="enq-program"
            name="program"
            placeholder="Select program"
            options={programs}
            required={false}
            value={program}
            onValueChange={setProgram}
          />
        </Field>
        <Field id="enq-qualification" label="Current qualification" required error={errors.qualification}>
          <Dropdown
            id="enq-qualification"
            name="qualification"
            placeholder="Select qualification"
            options={QUALIFICATIONS}
            required={false}
            value={qualification}
            onValueChange={setQualification}
            invalid={!!errors.qualification}
            describedBy={errors.qualification ? "enq-qualification-error" : undefined}
          />
        </Field>
        <Field id="enq-location" label="Preferred location" className="sm:col-span-2">
          <input
            id="enq-location"
            name="location"
            placeholder="City or state, e.g. Patna, Bihar"
            className={`${fieldCls} ${borderCls()}`}
          />
        </Field>
        <Field id="enq-message" label="Message" className="sm:col-span-2">
          <textarea
            id="enq-message"
            name="message"
            rows={3}
            placeholder="Tell us about your goals, entrance scores or questions"
            className={`${fieldCls} ${borderCls()} resize-none`}
          />
        </Field>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 rounded-lg bg-[#C9A24D] px-6 py-3 font-bold text-[#111111] transition hover:bg-[#d8b35e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24D] disabled:cursor-wait disabled:opacity-70 sm:col-span-2"
        >
          {loading ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
          {loading ? "Submitting…" : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
}
