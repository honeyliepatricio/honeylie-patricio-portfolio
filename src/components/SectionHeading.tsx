export default function SectionHeading({
  title,
  lede,
  align = "left",
}: {
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`rule mb-4 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      <h2 className="text-2xl leading-tight md:text-3xl">{title}</h2>
      {lede ? (
        <p className="mt-3 text-base leading-relaxed text-stone-600 md:text-lg">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
