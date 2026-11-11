// Shared heading used by every course-page section: numbered gold label + oversized serif title.
export default function SectionHeading({
  num,
  label,
  title,
  accent,
  intro,
  dark = false,
  id,
}: {
  num: string;
  label: string;
  title: string;
  /** Words rendered in gold italic after the title. */
  accent?: string;
  intro?: React.ReactNode;
  dark?: boolean;
  id?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-[#C9A24D]">
        <span className="font-number text-sm lining-nums">{num}</span>
        <span className="h-px w-8 bg-[#C9A24D]" />
        {label}
      </p>
      <h2
        id={id}
        className={`mt-4 font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl ${
          dark ? "text-[#FFFFFF]" : "text-[#111111]"
        }`}
      >
        {title} {accent && <em className="text-[#C9A24D]">{accent}</em>}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-[15px] leading-relaxed sm:text-base ${
            dark ? "text-[#F7F4EC]/65" : "text-[#111111]/65"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
