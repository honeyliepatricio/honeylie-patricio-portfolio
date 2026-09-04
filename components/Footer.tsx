import Link from "next/link";
import Container from "./Container";
import { navItems, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-navy-900 text-stone-200">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl text-white">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone-200/80">
              {site.role}. Healthcare-trained support for clinics, healthcare
              professionals, and small businesses.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-gold-400">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-200/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-gold-400">
              Connect
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-stone-200/80 transition-colors hover:text-white"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-200/80 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.contact.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-200/80 transition-colors hover:text-white"
                >
                  Upwork
                </a>
              </li>
              <li>
                <a
                  href={site.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-200/80 transition-colors hover:text-white"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-stone-200/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.fullName}. All rights reserved.
          </p>
          <p>Registered Nurse · Virtual Assistant</p>
        </div>
      </Container>
    </footer>
  );
}
