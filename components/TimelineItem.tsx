import { ExperienceEntry } from "@/data/content";

export default function TimelineItem({
  entry,
  isLast,
}: {
  entry: ExperienceEntry;
  isLast?: boolean;
}) {
  return (
    <div className="relative pb-12 pl-10 last:pb-0">
      {!isLast ? (
        <span
          aria-hidden="true"
          className="absolute left-[5px] top-3 h-full w-px bg-stone-200"
        />
      ) : null}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-gold-500 bg-white"
      />
      <h3 className="text-xl text-navy-900">{entry.role}</h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600">
        {entry.summary}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {entry.highlights.map((h) => (
          <li
            key={h}
            className="border border-stone-300 bg-stone-200 px-3 py-1 text-xs text-ink"
          >
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}
