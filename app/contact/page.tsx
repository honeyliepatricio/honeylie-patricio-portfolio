import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Honeylie Patricio, RN, Healthcare & Operations Virtual Assistant, to discuss administrative support, Airbnb operations, or social media management.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container className="py-12 md:py-16">
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <div className="mt-8 grid gap-12 md:grid-cols-2">
        <div className="max-w-md">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gold-600">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl">Let&apos;s talk about your needs.</h1>
          <p className="mt-5 text-base leading-relaxed text-stone-600">
            Send a short message about what you need support with, and
            I&apos;ll follow up to talk through scope, availability, and next
            steps.
          </p>

          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="text-stone-400">Email</dt>
              <dd>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4"
                >
                  {site.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-stone-400">LinkedIn</dt>
              <dd>
                <a
                  href={site.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4"
                >
                  View profile
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-stone-400">Upwork</dt>
              <dd>
                <a
                  href={site.contact.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4"
                >
                  View profile
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-stone-400">Facebook</dt>
              <dd>
                <a
                  href={site.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4"
                >
                  View page
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="border border-stone-300 bg-stone-100 p-8">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
