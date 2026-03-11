import { site } from "@/lib/constants";

type MetadataParams = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({ title, description, path = "" }: MetadataParams) {
  const url = `${site.baseUrl.replace(/\/$/, "")}${path || "/"}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "website" as const,
      url,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    description: site.description,
    url: site.baseUrl,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address,
    },
  };
}

export function productJsonLd(plan: { name: string; price: string; description?: string | null }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Carrorama ${plan.name}`,
    description: plan.description ?? `Plano ${plan.name} da Carrorama para gestão de frotas.`,
    offers: {
      "@type": "Offer",
      price: plan.price.replace(",", "."),
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqJsonLd(
  items: ReadonlyArray<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
