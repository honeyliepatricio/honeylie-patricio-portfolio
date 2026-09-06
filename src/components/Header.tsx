"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/lib/site";
import Container from "./Container";
import { useContactModal } from "./ContactModalProvider";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { openModal } = useContactModal();

  const handleCtaClick = () => {
    setOpen(false);
    openModal();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
       <Link
  href="/"
  className="flex flex-col leading-tight"
  onClick={() => setOpen(false)}
>
  <span className="font-serif text-xl text-navy-900">
    {site.shortName}
  </span>
  <span className="hidden text-sm font-sans font-medium text-stone-600 sm:inline">
    {site.role}
  </span>
</Link>

        <div className="hidden items-center gap-7 lg:flex">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-7 text-sm">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`border-b-2 pb-1 transition-colors duration-150 ${
                        isActive
                          ? "border-gold-500 text-navy-900"
                          : "border-transparent text-stone-600 hover:text-navy-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 rounded bg-navy-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-gold-500 hover:text-navy-900"
          >
            Let&rsquo;s Work With Me
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-stone-200 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="relative h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-navy-900 transition-transform duration-150 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-4 bg-navy-900 transition-opacity duration-150 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-4 bg-navy-900 transition-transform duration-150 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-stone-200 bg-white lg:hidden"
        >
          <Container className="py-4">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-sm px-2 py-3 text-base text-navy-900 hover:bg-stone-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex w-full items-center justify-center gap-2 rounded bg-navy-900 px-4 py-3 text-base font-medium text-white transition-colors duration-150 hover:bg-gold-500 hover:text-navy-900"
                >
                  Let&rsquo;s Work With Me
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </li>
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
