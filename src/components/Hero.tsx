import Image from "next/image";
import Button from "./Button";
import Container from "./Container";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-stone-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15,30,49,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <Container className="relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-fade-up">
          <p className="mb-5 text-sm font-medium uppercase tracking-wide text-gold-600">
            Registered Nurse → Virtual Assistant
          </p>
          <h1 className="text-4xl leading-[1.1] md:text-5xl lg:text-[3.25rem]">
            Healthcare &amp; Operations Virtual Assistant
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-600">
            I bring a Registered Nurse&apos;s eye for detail and protocol into
            virtual assistance — pairing healthcare administrative support
            with hands-on experience in Airbnb operations and social media
            support, and a growing, honestly-labeled skill set in AI-assisted
            workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Work With Me</Button>
            <Button href="/experience" variant="secondary">
              View My Experience
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 h-full w-full border border-gold-500/60"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy-900">
            <Image
              src={site.profileImage}
              alt={`Portrait of ${site.fullName}, ${site.role}`}
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
