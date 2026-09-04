import Link from "next/link";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceGroupRow from "@/components/ServiceGroupRow";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { serviceGroups, portfolioProjects } from "@/data/content";

export const metadata = buildMetadata({
  title: "Healthcare & Operations Virtual Assistant",
  description:
    "Honeylie Patricio, RN is a Registered Nurse transitioning into Virtual Assistance, offering healthcare administrative support, Airbnb operations, and social media support for healthcare professionals and small businesses.",
  path: "/",
});

const pillars = [
  {
    title: "Healthcare-trained",
    description:
      "A Registered Nurse background shapes how I handle documentation, communication, and protocol-driven work.",
  },
  {
    title: "Operations-minded",
    description:
      "Real experience running Airbnb reservations, guest communication, and business social media pages.",
  },
  {
    title: "Growing with AI",
    description:
      "Actively learning AI-assisted workflows and prompt engineering to work faster, not to claim expertise I don't have.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="border-t border-gold-500 pt-5">
                <h2 className="text-lg text-navy-900">{pillar.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-stone-50 py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="How I can support your practice or business"
              lede="From healthcare administrative work to day-to-day operations, here's where I can take things off your plate."
            />
            <Link
              href="/services"
              className="whitespace-nowrap text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4"
            >
              View all services
            </Link>
          </div>

          <div className="mt-8">
            {serviceGroups.slice(0, 3).map((group) => (
              <ServiceGroupRow key={group.id} group={group} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="Recent work"
              lede="A look at the operations and content work I've handled directly."
            />
            <Link
              href="/portfolio"
              className="whitespace-nowrap text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4"
            >
              View full portfolio
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {portfolioProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's take the busywork off your plate."
        lede="Tell me what you need support with, and I'll follow up to talk through scope and next steps."
      />
    </>
  );
}
