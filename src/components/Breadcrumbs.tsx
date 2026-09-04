import Link from "next/link";
import { site } from "@/lib/site";

export type Crumb = {
  label: string;
  href: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${site.url}${crumb.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-stone-600">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === trail.length - 1 ? (
              <span aria-current="page" className="text-navy-900">
                {crumb.label}
              </span>
            ) : (
              <Link href={crumb.href} className="hover:text-navy-900">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
