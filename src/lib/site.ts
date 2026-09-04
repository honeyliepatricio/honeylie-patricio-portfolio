/**
 * Central site configuration.
 * Update the placeholder values below with your real details.
 * These values are used across metadata, structured data, and the contact page.
 */

export const site = {
  name: "Honeylie Patricio, RN",
  shortName: "Honeylie",
  fullName: "Honeylie Patricio, RN",
  role: "Healthcare & Operations Virtual Assistant",
  tagline:
    "Helping healthcare professionals and small businesses stay organized, responsive, and efficient.",
  // TODO: Replace with your production domain once you connect a custom domain.
  url: "https://your-domain-here.com",
  locale: "en_US",
  description:
    "Honeylie Patricio, RN is a Registered Nurse and Virtual Assistant providing healthcare administrative support, general virtual assistance, Airbnb & staycation operations, and social media support for healthcare professionals and small businesses.",
  keywords: [
    "Healthcare Virtual Assistant",
    "Medical Virtual Assistant",
    "Healthcare Administrative Assistant",
    "Registered Nurse Virtual Assistant",
    "Virtual Assistant for Healthcare Professionals",
    "Healthcare Virtual Assistant Philippines",
    "Airbnb Virtual Assistant",
    "Social Media Virtual Assistant",
  ],
  // TODO: Replace placeholders with your real contact details before launch.
  contact: {
    email: "your-email@example.com",
    linkedin: "https://www.linkedin.com/in/your-linkedin-handle",
    upwork: "https://www.upwork.com/freelancers/your-upwork-handle",
    facebook: "https://www.facebook.com/your-facebook-page",
  },
  profileImage: "/images/profile.jpg",
};

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Skills & Tools", href: "/skills" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "AI Journey", href: "/ai-journey" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
