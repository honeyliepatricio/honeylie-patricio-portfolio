import Image from "next/image";
import Button from "./Button";
import Container from "./Container";
import { site } from "@/lib/site";

const featureHighlights = [
  { label: "Healthcare\nBackground", icon: HeartPulseIcon },
  { label: "Operations\nExperience", icon: CalendarCheckIcon },
  { label: "Client\nCommunication", icon: ChatIcon },
  { label: "AI-Assisted\nWorkflows", icon: SparkleIcon },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-50">
      <Container className="relative grid gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="animate-fade-up">
          <p className="mb-5 text-sm font-medium tracking-wide text-gold-600">
            Registered Nurse · Virtual Assistant
          </p>

          <h1 className="text-4xl leading-[1.12] text-navy-900 md:text-5xl lg:text-[3.25rem]">
            Healthcare-trained.
            <br />
            Operations-minded.
            <br />
            <span className="italic text-gold-600">
              Built to make work easier.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600">
            I help healthcare professionals and small businesses stay
            organized, responsive, and efficient — with the attention to
            detail, communication, and care shaped by my nursing background.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Let&apos;s Work Together</Button>
            <Button href="/portfolio" variant="secondary">
              View My Work
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
            {featureHighlights.map(({ label, icon: Icon }) => (
              <div key={label} className="flex flex-col gap-3">
                <Icon className="h-6 w-6 text-gold-600" />
                <p className="whitespace-pre-line text-sm font-medium leading-snug text-navy-900">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -left-6 -top-6 hidden h-40 w-40 rounded-full border border-gold-500/50 lg:block"
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

            <div className="absolute bottom-4 right-4 flex max-w-[12rem] items-start gap-3 border border-stone-200 bg-stone-50/95 p-3.5 shadow-md backdrop-blur-sm">
              <StethoscopeIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
              <div className="text-sm leading-snug text-navy-900">
                <p className="font-medium">RN × VA</p>
                <p className="mt-1 text-stone-600">
                  Healthcare
                  <br />
                  Operations
                  <br />
                  Support
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-right font-serif text-xl italic text-gold-600">
            {site.fullName}
          </p>
        </div>
      </Container>
    </section>
  );
}

function HeartPulseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 20.2c-4.6-3-8.5-6.4-8.5-10.4a4.6 4.6 0 0 1 8.5-2.5A4.6 4.6 0 0 1 20.5 9.8c0 4-3.9 7.4-8.5 10.4Z"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 10h2.2l1.3-2.4 1.6 4.4 1.2-2h2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" strokeLinecap="round" />
      <path d="M8.5 14.2 10.5 16l4-4.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h9A2.5 2.5 0 0 1 18 6.5v5A2.5 2.5 0 0 1 15.5 14H9l-4 3.5V14a2.5 2.5 0 0 1-1-2.2Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 4.5 13.4 9l4.6 1.4-4.6 1.4L12 16.3l-1.4-4.5L6 10.4 10.6 9 12 4.5Z"
        strokeLinejoin="round"
      />
      <path d="M19 15.5v3M17.5 17h3" strokeLinecap="round" />
    </svg>
  );
}

function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 4v5.5a4 4 0 0 0 8 0V4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.5V16a4 4 0 0 0 8 0v-1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="19" cy="13.3" r="1.6" />
      <path d="M6 4H4.6M14 4h1.4" strokeLinecap="round" />
    </svg>
  );
}
