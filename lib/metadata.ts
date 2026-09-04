import type { Metadata } from "next";
import { site } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

/**
 * Builds a consistent Metadata object for a page: title, description,
 * canonical URL, and Open Graph / Twitter tags.
 */
export function buildMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
