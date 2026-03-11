const stats = [
  {
    value: "30%",
    title: "Redução de custos fixos",
    description: "Otimização de processos e eliminação de desperdícios operacionais.",
  },
  {
    value: "28%",
    title: "Economia de combustível",
    description: "Através do controle de rotas e monitoramento de velocidade média.",
  },
  {
    value: "36%",
    title: "Aumento de produtividade",
    description: "Mais entregas/visitas realizadas com a mesma estrutura de frota.",
  },
];

export function HomeImpact() {
  return (
    <section className="py-24 bg-dark text-white overflow-hidden relative" aria-labelledby="impacto-heading">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 id="impacto-heading" className="text-3xl lg:text-4xl font-black mb-4">
            Impacto Financeiro Real
          </h2>
          <p className="text-slate-400 max-w-xl">
            Média de resultados obtidos por empresas que implementaram a Carrorama no primeiro semestre.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat) => (
            <div key={stat.title} className="space-y-2">
              <p className="text-6xl font-black text-success">{stat.value}</p>
              <p className="text-xl font-bold">{stat.title}</p>
              <p className="text-slate-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
