import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/Card";

const modules = [
  {
    title: "Abastecimento",
    description:
      "Controle detalhado de consumo por quilômetro e gastos totais. Reduza desvios e abastecimentos irregulares.",
    benefit: "REDUÇÃO DE CUSTOS",
  },
  {
    title: "Manutenção",
    description:
      "Agendamento preventivo e histórico completo de todos os serviços por veículo.",
    benefit: "AUMENTO DA VIDA ÚTIL",
  },
  {
    title: "Motoristas",
    description:
      "Gestão de condutores, controle de validade de CNH e ranking de desempenho.",
    benefit: "SEGURANÇA JURÍDICA",
  },
  {
    title: "Rastreio",
    description:
      "Localização em tempo real e telemetria avançada de toda a frota.",
    benefit: "SEGURANÇA DA FROTA",
  },
  {
    title: "Documentação",
    description:
      "Alertas de prazos de IPVA, licenciamento, multas e seguro em um só lugar.",
    benefit: "COMPLIANCE EM DIA",
  },
  {
    title: "Fornecedores",
    description:
      "Base centralizada de oficinas, seguradoras e parceiros de logística.",
    benefit: "MELHORES NEGOCIAÇÕES",
  },
  {
    title: "Finanças",
    description:
      "Visão completa do fluxo de caixa e custos operacionais da sua frota.",
    benefit: "VISIBILIDADE TOTAL",
  },
  {
    title: "Reserva de Veículo",
    description:
      "Sistema de solicitações e controle de disponibilidade da frota.",
    benefit: "OTIMIZAÇÃO DE USO",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Módulos do Sistema",
  description:
    "Gerencie todos os aspectos da sua frota em um só lugar. Abastecimento, manutenção, rastreio, documentação e mais.",
  path: "/modulos",
});

export default function ModulosPage() {
  return (
    <main>
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Módulos do Sistema
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Gerencie todos os aspectos da sua frota em um só lugar. Ferramentas integradas para
            otimizar sua operação diária.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((mod) => (
              <Card key={mod.title} className="flex flex-col">
                <div className="aspect-video w-full rounded-lg bg-gray-200" aria-hidden />
                <h2 className="mt-4 text-xl font-bold text-gray-900">{mod.title}</h2>
                <p className="mt-2 flex-1 text-gray-600">{mod.description}</p>
                <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                  {mod.benefit}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
