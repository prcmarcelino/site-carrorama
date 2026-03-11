import type { Metadata } from "next";
import { site } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/sections/contato/ContactForm";
import { MailIcon, PhoneIcon } from "@/components/ui/Icons";

const stats = [
  { title: "Anos de Mercado", value: "12+", growth: "+30% crescimento anual" },
  { title: "Veículos Monitorados", value: "1M+", growth: "+20% desde o ano passado" },
  { title: "Economia Gerada", value: "R$ 50M+", growth: "+15% eficiência da gestão" },
];

const evolution = [
  {
    title: "2012: O início B2C",
    text: "Nascemos como aplicativo pioneiro para motoristas, com foco em registro de abastecimento e custos pessoais.",
  },
  {
    title: "A Transição Digital",
    text: "Identificamos a demanda do mercado B2B e passamos a oferecer gestão de frotas para empresas.",
  },
  {
    title: "Hoje: Ecossistema B2B",
    text: "Plataforma líder em gestão de frotas no Brasil, com telemetria, BI e integrações com ERPs e TMS.",
  },
];

const pillars = [
  {
    title: "Transparência",
    description: "Dados claros e acessíveis para toda a cadeia de decisão.",
  },
  {
    title: "Inovação Contínua",
    description: "Evolução constante da plataforma com foco em ROI do cliente.",
  },
  {
    title: "Foco no Cliente",
    description: "Suporte próximo e soluções desenhadas para o dia a dia da frota.",
  },
];

const awards = [
  "Top 100 Startups",
  "Exame Negócios",
  "Logistics Innovator 2023",
  "Google Play Choice",
];

export const metadata: Metadata = buildMetadata({
  title: "Sobre",
  description:
    "Inovando a gestão automotiva. Conheça a história da Carrorama, de app B2C a plataforma líder em gestão de frotas B2B.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <main>
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
            Mais que um software
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Inovando a Gestão Automotiva.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            De um aplicativo pioneiro para motoristas a uma plataforma líder em gestão de frotas B2B.
            Conheça a história por trás da revolução.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <Card key={s.title} className="bg-gray-50">
                <p className="text-sm font-medium text-gray-600">{s.title}</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">{s.value}</p>
                <p className="mt-1 text-sm text-[#66bb56]">{s.growth}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="evolucao-heading">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <h2 id="evolucao-heading" className="text-3xl font-bold tracking-tight text-gray-900">
              A Evolução do Carrorama
            </h2>
            <ul className="mt-8 space-y-6">
              {evolution.map((e) => (
                <li key={e.title} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden />
                  <div>
                    <h3 className="font-bold text-gray-900">{e.title}</h3>
                    <p className="mt-1 text-gray-600">{e.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full max-w-md rounded-xl bg-gray-200" />
            <div className="absolute bottom-4 left-4 rounded-lg bg-brand px-4 py-3 text-white shadow-lg">
              <p className="font-bold">Autoridade</p>
              <p className="text-sm text-white/90">Em gestão de frotas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#14181e] px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="missao-heading">
        <div className="mx-auto max-w-7xl text-center">
          <h2 id="missao-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Nossa Missão
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Transformar dados em inteligência para tornar a mobilidade corporativa mais eficiente,
            segura e sustentável.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
                <div className="mx-auto h-14 w-14 rounded-lg bg-brand/20" aria-hidden />
                <h3 className="mt-4 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-gray-400">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="premios-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="premios-heading" className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Reconhecimentos e Prêmios
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {awards.map((a) => (
              <div
                key={a}
                className="flex items-center gap-3 rounded-lg bg-white px-6 py-4 shadow-sm"
              >
                <span className="text-2xl" aria-hidden>🏆</span>
                <span className="font-medium text-gray-900">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf5ed] px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="contato-sobre-heading">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <h2 id="contato-sobre-heading" className="text-3xl font-bold tracking-tight text-gray-900">
              Pronto para transformar sua frota?
            </h2>
            <p className="mt-4 text-gray-600">
              Fale com nossos especialistas em gestão B2B e descubra como a Carrorama pode reduzir
              seus custos operacionais em até 30%.
            </p>
            <div className="mt-6 space-y-2">
              <p className="flex items-center gap-2 text-gray-700">
                <span aria-hidden className="text-brand">
                  <MailIcon className="h-5 w-5" />
                </span>
                <span>E-mail corporativo:</span>
                <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">
                  {site.email}
                </a>
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <span aria-hidden className="text-brand">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span>Telefone:</span>
                <a href={`tel:${site.phone}`} className="font-semibold text-brand hover:underline">
                  {site.phone}
                </a>
              </p>
            </div>
          </div>
          <Card className="p-6">
            <ContactForm submitLabel="Solicitar Consultoria Grátis" />
          </Card>
        </div>
      </section>
    </main>
  );
}
