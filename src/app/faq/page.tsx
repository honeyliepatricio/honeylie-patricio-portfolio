import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { faqItems } from "@/data/content";

export const metadata = buildMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about working with a Healthcare Virtual Assistant, non-clinical scope of support, tools used, and how to get started.",
  path: "/faq",
});

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <Container className="py-12 md:py-16">
        <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
        <div className="mt-8 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gold-600">
            FAQ
          </p>
          <h1 className="text-3xl md:text-4xl">Frequently asked questions</h1>
        </div>

        <div className="mt-10 max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>
      </Container>

      <CTASection
        title="Still have a question?"
        lede="Reach out directly and I'll get back to you."
      />
    </>
  );
}
