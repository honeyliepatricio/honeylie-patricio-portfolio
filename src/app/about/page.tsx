import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "About Honeylie — a Registered Nurse bringing healthcare and business operations experience into specialized virtual assistance for healthcare professionals and small businesses.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Container className="py-12 md:py-16">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
        <div className="mt-8 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gold-600">
            About
          </p>
          <h1 className="text-3xl md:text-4xl">
            A Registered Nurse background, applied to remote support.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            I&apos;m Honeylie, a Registered Nurse who has moved into Virtual
            Assistance — bringing real healthcare communication,
            organization, and protocol-driven habits into remote
            administrative and operational support.
          </p>
        </div>
      </Container>

      <section className="border-t border-stone-200 bg-stone-50 py-14 md:py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <SectionHeading
              title="Why healthcare + operations"
              lede="Nursing teaches you to work accurately under pressure, communicate clearly, and follow protocol without cutting corners. Those same habits carry directly into administrative and operational support work."
            />
            <SectionHeading
              title="Where I've applied it"
              lede="Beyond healthcare, I've managed Airbnb and staycation reservations end to end, and run social media pages for a small business — so I understand both structured healthcare environments and the pace of day-to-day small business operations."
            />
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container>
          <SectionHeading
            title="How I work"
            lede="A few things that shape how I approach every task."
          />
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            <li className="border-t border-gold-500 pt-4">
              <h3 className="text-lg text-navy-900">Precision</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Documentation and detail matter — habits built from clinical
                work carry over directly into administrative accuracy.
              </p>
            </li>
            <li className="border-t border-gold-500 pt-4">
              <h3 className="text-lg text-navy-900">Clear communication</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Whether it&apos;s a patient, a guest, or a client, I communicate
                clearly, calmly, and professionally.
              </p>
            </li>
            <li className="border-t border-gold-500 pt-4">
              <h3 className="text-lg text-navy-900">Honest about skill level</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                I&apos;m upfront about what&apos;s established experience and what
                I&apos;m still learning — especially with AI tools.
              </p>
            </li>
          </ul>
        </Container>
      </section>

      <CTASection
        title="Curious if I'm the right fit for your team?"
        lede="Get in touch and tell me a bit about what you need support with."
      />
    </>
  );
}
