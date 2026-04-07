import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/constants";
import { organizationJsonLd } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "Carrorama | Gestão de Frotas - Informação que vira economia",
    template: "%s | Carrorama",
  },
  description:
    "Solução líder em gestão de frotas. Reduza custos operacionais com tecnologia de ponta. Experimente grátis.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon-96x96.png",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organization = organizationJsonLd();

  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased bg-background-light text-slate-900`}>
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:block focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white focus:no-underline focus:outline-none"
        >
          Pular para o conteúdo
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <Header />
        <div id="main-content" className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
