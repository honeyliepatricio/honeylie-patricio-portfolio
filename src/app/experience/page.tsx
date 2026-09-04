import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import TimelineItem from "@/components/TimelineItem";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { experienceEntries } from "@/data/content";

export const metadata = buildMetadata({
  title: "Experience",
  description:
    "Honeylie's professional experience as a Registered Nurse, Airbnb & staycation operations support, and social media management.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <Container className="py-12 md:py-16">
        <Breadcrumbs items={[{ label: "Experience", href: "/experience" }]} />
        <div className="mt-8 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gold-600">
            Experience
          </p>
          <h1 className="text-3xl md:text-4xl">Where this experience comes from.</h1>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Three areas of hands-on experience, each contributing different
            strengths to how I support clients today.
          </p>
        </div>

        <div className="mt-12 max-w-2xl">
          {experienceEntries.map((entry, index) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              isLast={index === experienceEntries.length - 1}
            />
          ))}
        </div>
      </Container>

      <CTASection
        title="See how this experience could support your team."
        lede="Get in touch to talk through your specific needs."
      />
    </>
  );
}
