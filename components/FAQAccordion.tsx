import { FAQItem } from "@/data/content";

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base text-navy-900 marker:content-none">
            {item.question}
            <span
              aria-hidden="true"
              className="flex-shrink-0 text-xl text-gold-500 transition-transform duration-150 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
