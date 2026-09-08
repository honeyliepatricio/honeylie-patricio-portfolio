import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { portfolioProjects } from "@/data/content";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Real project work from Honeylie: Airbnb & staycation operations, social media management, guest experience coordination, and a personal AI workflow learning project.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <Container className="py-12 md:py-16">
        <Breadcrumbs items={[{ label: "Portfolio", href: "/portfolio" }]} />
        <div className="mt-8 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gold-600">
            Portfolio
          </p>
          <h1 className="text-3xl md:text-4xl">A record of real work.</h1>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Every project here reflects work I&apos;ve actually done —
            including the AI project, which is clearly marked as personal
            learning rather than client work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>

      <CTASection
        title="Have a similar project in mind?"
        lede="Let's talk about what you need and whether it's a good fit."
      />
    </>
  );
}
