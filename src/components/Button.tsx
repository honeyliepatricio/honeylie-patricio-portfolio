import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "gold";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium transition-colors duration-150 focus-visible:outline-none";

  const variants = {
    primary: "bg-navy-900 text-white hover:bg-navy-800",
    secondary:
      "border border-navy-900/20 text-navy-900 hover:border-navy-900 hover:bg-navy-900/5",
    gold: "bg-gold-500 text-navy-950 hover:bg-gold-400",
  };

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
