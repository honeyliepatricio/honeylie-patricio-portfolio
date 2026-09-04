import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceGroupRow from "@/components/ServiceGroupRow";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { serviceGroups } from "@/data/content";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Healthcare administrative support, general virtual assistance, Airbnb & staycation operations, social media support, and AI-assisted workflow support (currently learning).",
  path: "/services",
});

export default function ServicesPage() {
  const serviceJsonLd = serviceGroups.map((group) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: group.title,
    description: group.summary,
    provider: {
      "@type": "Person",
      name: site.fullName,
    },
  }));

  return (
    <>
      {serviceJsonLd.map((entry, i) => (
        <JsonLd key={i} data={entry} />
      ))}

      <Container className="py-12 md:py-16">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
        <div className="mt-8 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gold-600">
            Services
          </p>
          <h1 className="text-3xl md:text-4xl">
            Support built around healthcare and business operations.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Every service below reflects real experience — clearly separated
            from the AI-assisted skills I&apos;m still developing.
          </p>
        </div>

        <div className="mt-6">
          {serviceGroups.map((group) => (
            <ServiceGroupRow key={group.id} group={group} />
          ))}
        </div>
      </Container>

      <CTASection
        title="Not sure which service fits your needs?"
        lede="Reach out and describe what's taking up your time — we can figure out the right scope together."
      />
    </>
  );
}
