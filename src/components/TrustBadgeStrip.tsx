import Container from "./Container";

const badges = [
  {
    title: "Detail-Oriented",
    description: "I focus on the small details that make a big difference.",
    icon: TargetIcon,
  },
  {
    title: "Trustworthy",
    description: "You can count on me to handle tasks with care and integrity.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Organized",
    description: "I bring structure and clarity to your day-to-day operations.",
    icon: ClockIcon,
  },
  {
    title: "Adaptable",
    description: "I learn quickly and adjust to your unique needs.",
    icon: BulbIcon,
  },
];

export default function TrustBadgeStrip() {
  return (
    <section className="bg-navy-900 py-10">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex items-start gap-4">
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-gold-500" />
              <div>
                <p className="text-sm font-medium text-stone-50">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-300">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
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
        d="M12 3.5 19 6v5.5c0 4.4-2.9 7.6-7 9-4.1-1.4-7-4.6-7-9V6l7-2.5Z"
        strokeLinejoin="round"
      />
      <path
        d="M8.7 12.2 11 14.5l4.3-4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BulbIcon({ className }: { className?: string }) {
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
        d="M9 18.5h6M9.5 21h5"
        strokeLinecap="round"
      />
      <path
        d="M12 3.5a5.5 5.5 0 0 0-3 10.1c.6.4 1 1.1 1 1.9v.5h4v-.5c0-.8.4-1.5 1-1.9A5.5 5.5 0 0 0 12 3.5Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
