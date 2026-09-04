"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(`New inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy-900">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full border border-stone-200 bg-white px-4 py-3 text-sm text-ink focus-visible:border-navy-900"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy-900">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full border border-stone-200 bg-white px-4 py-3 text-sm text-ink focus-visible:border-navy-900"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy-900"
        >
          How can I help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full border border-stone-200 bg-white px-4 py-3 text-sm text-ink focus-visible:border-navy-900"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center bg-navy-900 px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-navy-800"
      >
        Send Message
      </button>

      <p role="status" className="text-sm text-stone-600">
        {status === "sent"
          ? "Your email app should now be open with your message ready to send."
          : "This opens your email app with your message pre-filled — nothing is sent from this page directly."}
      </p>
    </form>
  );
}
