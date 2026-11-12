import SectionHeading from "./SectionHeading";

const STEPS = [
  { title: "Submit an Enquiry", text: "Share your preferred course and academic details with us." },
  { title: "Career Counselling", text: "Our team helps you explore courses that suit your interests and goals." },
  { title: "Eligibility Assessment", text: "We review your qualifications and the entrance requirements that apply." },
  { title: "Explore Universities", text: "Discover suitable partner universities and programmes." },
  { title: "Application Assistance", text: "Get guidance with application forms and required documentation." },
  { title: "Admission Support", text: "Receive guidance through counselling, admission confirmation and enrolment." },
];

export default function AdmissionProcess() {
  return (
    <section aria-labelledby="process-title" id="process" className="scroll-mt-40 bg-[#111111]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:py-24 lg:px-10">
        <SectionHeading id="process-title" num="08" label="ADMISSION PROCESS" title="Your journey," accent="step by step" dark />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-[#F7F4EC]/10 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="group relative bg-[#111111] p-7 transition-colors hover:bg-[#181818] sm:p-9">
              <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[#C9A24D] transition-transform duration-500 group-hover:scale-x-100" />
              <span className="font-number text-5xl font-bold text-[#C9A24D]/90 lining-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-3xl text-[#FFFFFF]">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#F7F4EC]/65">{s.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[#F7F4EC]/50">
          Install Your Career provides guidance and support. Admission decisions, seat allotment and fees are decided
          by the respective universities and counselling authorities.
        </p>
      </div>
    </section>
  );
}
