"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

const inquiryOptions = [
  "Healthcare Administrative Support",
  "General Virtual Assistance",
  "Operations Support",
  "Airbnb / Staycation Operations",
  "Social Media Support",
  "AI-Assisted Workflow Support",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Lock/unlock background scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // Remember what had focus before opening, focus the first field on open,
  // and restore focus to the trigger element on close.
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      // Delay slightly so the element exists post-render/animation.
      const id = window.setTimeout(() => firstFieldRef.current?.focus(), 20);
      return () => window.clearTimeout(id);
    }
    triggerRef.current?.focus();
    return undefined;
  }, [isOpen]);

  // Reset form state whenever the modal closes, so it opens fresh next time.
  useEffect(() => {
    if (!isOpen) {
      const id = window.setTimeout(() => {
        setStatus("idle");
        setErrorMessage(null);
      }, 200);
      return () => window.clearTimeout(id);
    }
    return undefined;
  }, [isOpen]);

  // Escape to close, and a basic focus trap while open.
  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      inquiryType: formData.get("inquiryType"),
      message: formData.get("message"),
    };

    try {
      // TODO: Wire this up to a real backend/email service, e.g.:
      //
      //   Formspree:
      //     const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //       method: "POST",
      //       headers: { Accept: "application/json" },
      //       body: formData,
      //     });
      //     if (!res.ok) throw new Error("Submission failed");
      //
      //   Resend / EmailJS / a custom API route:
      //     const res = await fetch("/api/contact", {
      //       method: "POST",
      //       headers: { "Content-Type": "application/json" },
      //       body: JSON.stringify(payload),
      //     });
      //     if (!res.ok) throw new Error("Submission failed");
      //
      // Until this is connected, submission intentionally fails so no one
      // is told "thank you" for an inquiry that was never received.
      throw new Error(
        "Contact form is not yet connected to a backend. See ContactModal.tsx TODO."
      );
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm animate-fade-up"
        style={{ animationDuration: "0.2s" }}
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-y-auto bg-stone-50 p-6 shadow-xl animate-fade-up sm:p-8"
        style={{ animationDuration: "0.25s" }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact form"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded text-navy-900 transition-colors duration-150 hover:bg-stone-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            &times;
          </span>
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-start gap-4 py-6">
            <span
              aria-hidden="true"
              className="h-8 w-0.5 bg-gold-500"
            />
            <h2
              id="contact-modal-title"
              className="font-serif text-2xl text-navy-900"
            >
              Thank You for Reaching Out
            </h2>
            <p className="text-base leading-relaxed text-stone-600">
              Your inquiry has been received. I&rsquo;ll get back to you as
              soon as possible.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 inline-flex items-center rounded px-6 py-2.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4 transition-colors hover:text-gold-600"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 pr-8">
              <span aria-hidden="true" className="mb-4 block h-0.5 w-10 bg-gold-500" />
              <h2
                id="contact-modal-title"
                className="font-serif text-2xl text-navy-900 sm:text-[1.75rem]"
              >
                Let&rsquo;s Work Together
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                Tell me what you need support with.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-navy-900"
                >
                  Full Name
                </label>
                <input
                  ref={firstFieldRef}
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="rounded border border-stone-300 bg-white px-3.5 py-2.5 text-base text-navy-900 outline-none transition-colors focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-navy-900"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="rounded border border-stone-300 bg-white px-3.5 py-2.5 text-base text-navy-900 outline-none transition-colors focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-inquiry-type"
                  className="text-sm font-medium text-navy-900"
                >
                  What can I help you with?
                </label>
                <select
                  id="contact-inquiry-type"
                  name="inquiryType"
                  required
                  defaultValue=""
                  className="rounded border border-stone-300 bg-white px-3.5 py-2.5 text-base text-navy-900 outline-none transition-colors focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {inquiryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-navy-900"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className="resize-none rounded border border-stone-300 bg-white px-3.5 py-2.5 text-base text-navy-900 outline-none transition-colors focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
              </div>

              {status === "error" && errorMessage ? (
                <p role="alert" className="text-sm text-red-600">
                  {errorMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded bg-navy-900 px-5 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-gold-500 hover:text-navy-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send Inquiry"}
                <span aria-hidden="true">&rarr;</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
