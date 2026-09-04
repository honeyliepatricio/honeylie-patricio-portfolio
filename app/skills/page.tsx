import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import SkillPill from "@/components/SkillPill";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { skills } from "@/data/content";

export const metadata = buildMetadata({
  title: "Skills & Tools",
  description:
    "Tools Honeylie has hands-on experience with — Canva, Google Workspace, Microsoft Office, Facebook, Airbnb — alongside AI tools currently being learned.",
  path: "/skills",
});

export default function SkillsPage() {
  const experienced = skills.filter((s) => s.status === "experienced");
  const learning = skills.filter((s) => s.status === "learning");

  return (
    <>
      <Container className="py-12 md:py-16">
        <Breadcrumbs items={[{ label: "Skills & Tools", href: "/skills" }]} />
        <div className="mt-8 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gold-600">
            Skills &amp; Tools
          </p>
          <h1 className="text-3xl md:text-4xl">
            Tools I use daily, and tools I&apos;m building fluency with.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Kept clearly separate on purpose — so you know exactly what to
            expect.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl text-navy-900">Experienced</h2>
            <ul className="mt-5 space-y-2">
              {experienced.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-navy-900">
              Learning &amp; Developing
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              I use these tools for my own workflow learning — not marketed
              as expert-level services.
            </p>
            <ul className="mt-5 space-y-2">
              {learning.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <CTASection
        title="Want to know if my current skill set fits your task?"
        lede="Send a message describing the work and I'll be upfront about fit."
      />
    </>
  );
}
