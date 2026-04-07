import type { Metadata } from "next";
import Link from "next/link";
import { STRIPE_CHECKOUT_URL } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const architecture = [
  {
    title: "Dispositivos IoT",
    description: "Hardware proprietário com telemetria avançada em tempo real.",
  },
  {
    title: "Processamento Cloud",
    description: "Ingestão e tratamento de dados em escala global.",
  },
  {
    title: "Business Intelligence",
    description: "Camada analítica com modelos de IA e predição.",
  },
  {
    title: "Alertas e Insights",
    description: "Dashboards customizados e notificações acionáveis.",
  },
];

const features = [
  {
    title: "Dados em Tempo Real",
    description:
      "Streaming de dados de alta performance com atualização a cada 5 segundos para precisão absoluta na localização.",
  },
  {
    title: "Integração Universal",
    description:
      "API RESTful robusta para integração com ERPs, TMS e sistemas de logística já utilizados na sua empresa.",
  },
  {
    title: "Smart Dashboards",
    description:
      "Interface intuitiva e modular. Customize os indicadores mais importantes para seu modo de negócio.",
  },
  {
    title: "Segurança de Dados",
    description:
      "Criptografia AES-256 de ponta a ponta e conformidade total com a LGPD em todas as camadas do sistema.",
  },
  {
    title: "Escalabilidade Infinita",
    description:
      "Arquitetura baseada em microsserviços que acompanha o crescimento da sua frota sem perda de performance.",
  },
];

const integrity = [
  {
    title: "Controle de Acesso",
    description:
      "Gestão granular de permissões e autenticação multifator (MFA) para cada usuário do sistema.",
  },
  {
    title: "Proteção de Dados",
    description:
      "Monitoramento 24/7 contra ameaças e isolamento total de bancos de dados por cliente.",
  },
  {
    title: "Confiabilidade",
    description:
      "SLA de disponibilidade de 99.9% com backups secundárias em múltiplas regiões geográficas.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Plataforma",
  description:
    "A base sólida para sua gestão de frota. Infraestrutura de alta disponibilidade, dados em tempo real e segurança de ponta a ponta.",
  path: "/plataforma",
});

export default function PlataformaPage() {
  return (
    <main>
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
              Nossa Tecnologia
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              A base sólida para sua{" "}
              <span className="text-brand">gestão de frota</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Construímos uma infraestrutura de alta disponibilidade e baixa latência, capaz de
              processar milhões de pontos de dados diariamente para entregar insights acionáveis no
              momento exato.
            </p>
            <div className="mt-8">
              <Button asChild variant="primary" className="rounded-lg">
                <Link href="#">Documentação Técnica &rarr;</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-video w-full max-w-lg overflow-hidden rounded-xl bg-[#14181e] shadow-2xl">
              <div className="flex h-full w-full items-center justify-center text-gray-500">
                Ilustração dispositivo / circuito
              </div>
            </div>
            <div className="absolute bottom-4 left-4 rounded-lg bg-white p-4 shadow-lg">
              <p className="text-xs font-medium text-gray-500">LATÊNCIA MÉDIA</p>
              <p className="text-2xl font-bold text-gray-900">42ms</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="arquitetura-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="arquitetura-heading" className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Arquitetura de Dados Inteligente
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Fluxo contínuo desde a captura no veículo até a entrega estratégica no dashboard.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {architecture.map((item) => (
              <Card key={item.title}>
                <div className="h-12 w-12 rounded-lg bg-brand/10" aria-hidden />
                <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="recursos-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="recursos-heading" className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Recursos da Plataforma
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <Card key={item.title}>
                <div className="h-10 w-10 rounded bg-brand/20" aria-hidden />
                <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </Card>
            ))}
            <Card className="flex flex-col justify-center bg-brand text-white">
              <h3 className="text-xl font-bold">Pronto para o futuro?</h3>
              <p className="mt-2 text-white/90">
                Nossa plataforma evolui semanalmente com novas funcionalidades baseadas em IA.
              </p>
              <Button asChild variant="secondary" className="mt-6 rounded-lg border-white bg-[#14181e] text-white hover:bg-[#1a202c]">
                <Link href={STRIPE_CHECKOUT_URL}>Agendar Demo</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[#14181e] px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="integridade-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="integridade-heading" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Compromisso com a Integridade
          </h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Tratamos a segurança não como um recurso, mas como a fundação de tudo o que construímos.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {integrity.map((item) => (
              <div key={item.title}>
                <div className="h-12 w-12 rounded-lg bg-brand/20" aria-hidden />
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
