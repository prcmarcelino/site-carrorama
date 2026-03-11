const steps = [
  {
    label: "EFICIÊNCIA OPERACIONAL",
    title: "Gestão Centralizada",
    description:
      "Centralize toda a sua operação em uma única interface intuitiva. Do controle rigoroso de gastos com combustível ao histórico detalhado de manutenção e documentação da frota.",
    items: [
      "Gestão total de custos e despesas",
      "Documentação digital sempre em dia",
      "Histórico de manutenções preventivas",
    ],
  },
  {
    label: "CONTROLE TOTAL",
    title: "Monitoramento e Alertas",
    description:
      "Acompanhe o status da sua frota em tempo real com telemetria avançada. Receba alertas automáticos sobre comportamentos de risco e gere relatórios estratégicos para tomadas de decisão rápidas.",
    items: [
      "Alertas inteligentes de velocidade",
      "Rastreamento contínuo via GPS",
      "Ranking detalhado de condutores",
    ],
  },
  {
    label: "ESTRATÉGIA BASEADA EM DADOS",
    title: "Inteligência Analítica",
    description:
      "Transforme dados em resultados reais. Nossa plataforma utiliza análises estratégicas para identificar gargalos operacionais e oportunidades de redução de custos em toda a sua frota.",
    items: [
      "Identifique onde sua frota está perdendo dinheiro",
      "Análise de performance em tempo real",
      "Insights preditivos para economia",
    ],
  },
];

export function HomeHowItWorks() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6" aria-labelledby="como-funciona-heading">
      <h2 id="como-funciona-heading" className="text-center text-3xl lg:text-5xl font-black text-slate-900 mb-16">
        Como funciona
      </h2>
      <div className="space-y-32">
        {steps.map((s) => (
          <article key={s.title} className="max-w-3xl mx-auto text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft text-brand text-xs font-bold uppercase tracking-wider">
                {s.label}
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-slate-900">{s.title}</h3>
              <p className="text-lg text-slate-600 leading-relaxed">{s.description}</p>
              <ul className="space-y-4 text-slate-600">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium">
                    <span className="text-brand" aria-hidden>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
