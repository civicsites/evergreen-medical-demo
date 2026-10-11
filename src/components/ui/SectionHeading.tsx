type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl";

  return (
    <div className={`mb-10 md:mb-12 ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-2 text-sm font-semibold uppercase tracking-widest ${
            light ? "text-teal-light" : "text-teal"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl font-semibold tracking-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/85" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
