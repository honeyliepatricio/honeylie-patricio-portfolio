"use client";

import Button from "./Button";
import Container from "./Container";
import { useContactModal } from "./ContactModalProvider";

export default function CTASection({
  title,
  lede,
  ctaLabel = "Work With Me",
  ctaHref = "/contact",
  ctaAction = "link",
}: {
  title: string;
  lede?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /**
   * "link" (default) preserves existing behavior: renders a normal Button
   * navigating to ctaHref. Pass "modal" to instead open the shared contact
   * modal on click.
   */
  ctaAction?: "link" | "modal";
}) {
  const { openModal } = useContactModal();

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
        {ctaAction === "modal" ? (
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-2 rounded bg-gold-500 px-6 py-3 text-sm font-medium text-navy-900 transition-colors duration-150 hover:bg-gold-600"
          >
            {ctaLabel}
            <span aria-hidden="true">&rarr;</span>
          </button>
        ) : (
          <Button href={ctaHref} variant="gold">
            {ctaLabel}
          </Button>
        )}
      </Container>
    </section>
  );
}
