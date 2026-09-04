import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { skills } from "@/data/content";

export const metadata = buildMetadata({
  title: "AI Journey",
  description:
    "Honeylie's ongoing, self-directed learning in AI-assisted workflows and prompt engineering — clearly framed as a current learning journey, not an area of expertise.",
  path: "/ai-journey",
});

const learningSkills = skills.filter((s) => s.status === "learning");

const steps = [
  {
    title: "Understanding the basics",
    description:
      "Learning how large language models like ChatGPT and Claude work, and where they realistically fit into administrative and operational tasks.",
  },
  {
    title: "Practicing prompt engineering",
    description:
      "Writing and refining prompts to get clearer, more useful output for research, drafting, and organizing information.",
  },
  {
    title: "Applying it to real tasks",
    description:
      "Testing AI tools on repetitive admin work — like organizing notes or drafting first-pass content — as a personal workflow project.",
  },
];

export default function AIJourneyPage() {
  return (
    <>
      <Container className="py-12 md:py-16">
        <Breadcrumbs items={[{ label: "AI Journey", href: "/ai-journey" }]} />
        <div className="mt-8 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gold-600">
            AI Journey
          </p>
          <h1 className="text-3xl md:text-4xl">
            Currently learning &amp; developing — by design, said plainly.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            I&apos;m not an AI automation expert, and I won&apos;t claim to
            be. This page exists so you know exactly where I am in this
            skill: actively learning, applying it to my own small projects,
            and building real fluency over time.
          </p>
        </div>
      </Container>

      <section className="border-t border-stone-200 bg-stone-50 py-14 md:py-16">
        <Container>
          <SectionHeading
            title="What I'm currently working through"
            lede="A self-directed path, one step at a time."
          />
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-gold-500 pt-4">
                <span className="text-sm text-gold-600">
                  Step {index + 1}
                </span>
                <h3 className="mt-2 text-lg text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container>
          <SectionHeading title="Tools I'm learning with" />
          <ul className="mt-6 flex flex-wrap gap-3">
            {learningSkills.map((skill) => (
              <li
                key={skill.name}
                className="border border-gold-500/40 px-4 py-2 text-sm text-navy-900"
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection
        title="Need help with tasks AI could support?"
        lede="I'll be upfront about whether my current skill level is the right fit."
      />
    </>
  );
}
