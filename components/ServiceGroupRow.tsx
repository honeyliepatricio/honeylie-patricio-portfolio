import { ServiceGroup } from "@/data/content";

export default function ServiceGroupRow({ group }: { group: ServiceGroup }) {
  return (
    <article className="grid gap-6 border-t border-stone-200 py-10 md:grid-cols-[1fr_1.4fr] md:gap-12">
      <div>
        <h3 className="text-xl text-navy-900 md:text-2xl">{group.title}</h3>
        {group.status === "learning" ? (
          <span className="mt-3 inline-block border border-gold-500/50 px-3 py-1 text-xs font-medium text-gold-600">
            Currently Learning &amp; Developing
          </span>
        ) : null}
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-600">
          {group.summary}
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-x-8 gap-y-3 self-start sm:grid-cols-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="flex items-baseline gap-3 text-sm text-ink"
          >
            <span className="mt-1 h-1 w-1 flex-shrink-0 bg-gold-500" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
