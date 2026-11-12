// Shared heading used by every course-page section: oversized serif title + optional intro.
// `num` and `label` are kept for the section bar / future use but are no longer displayed.
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
    <div className="max-w-3xl" data-section={num} data-label={label}>
      <h2
        id={id}
        className={`font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl ${
          dark ? "text-[#FFFFFF]" : "text-[#111111]"
        }`}
      >
        {title} {accent && <em>{accent}</em>}
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
