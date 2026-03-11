import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeSolutions } from "@/components/sections/home/HomeSolutions";
import { HomeImpact } from "@/components/sections/home/HomeImpact";
import { HomeHowItWorks } from "@/components/sections/home/HomeHowItWorks";
import { HomePlans } from "@/components/sections/home/HomePlans";
import { HomeTestimonials } from "@/components/sections/home/HomeTestimonials";
import { HomeCta } from "@/components/sections/home/HomeCta";

export const metadata: Metadata = buildMetadata({
  title: "Carrorama | Gestão de Frotas - Informação que vira economia",
  description:
    "Solução líder em gestão de frotas. Reduza custos com combustível, manutenção e multas. Experimente grátis.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeSolutions />
      <HomeImpact />
      <HomeHowItWorks />
      <HomePlans />
      <HomeTestimonials />
      <HomeCta />
    </main>
  );
}
