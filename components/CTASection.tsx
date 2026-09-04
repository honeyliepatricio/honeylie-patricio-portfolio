import Button from "./Button";
import Container from "./Container";

export default function CTASection({
  title,
  lede,
  ctaLabel = "Work With Me",
  ctaHref = "/contact",
}: {
  title: string;
  lede?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="border-t border-navy-800 bg-navy-900">
      <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl text-white md:text-3xl">{title}</h2>
          {lede ? (
            <p className="mt-3 text-base leading-relaxed text-stone-200/80">
              {lede}
            </p>
          ) : null}
        </div>
        <Button href={ctaHref} variant="gold">
          {ctaLabel}
        </Button>
      </Container>
    </section>
  );
}
