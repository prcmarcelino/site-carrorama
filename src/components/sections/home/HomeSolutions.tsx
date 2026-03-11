const solutions = [
  {
    title: "Consumo de combustível",
    description: "Reduza gastos excessivos com monitoramento detalhado e identificação de desperdícios.",
  },
  {
    title: "Manutenção preventiva",
    description: "Evite quebras inesperadas com alertas inteligentes baseados em quilometragem e tempo.",
  },
  {
    title: "Falta de controle",
    description: "Tenha visibilidade total sobre cada veículo da frota, localização e status em tempo real.",
  },
  {
    title: "Paradas não autorizadas",
    description: "Identifique desvios de rota e paradas indevidas que afetam a rentabilidade da operação.",
  },
  {
    title: "Multas e infrações",
    description: "Gerencie condutores com ranking de direção e minimize custos com multas e sinistros.",
  },
  {
    title: "Escassez de dados",
    description: "Transforme números brutos em relatórios estratégicos e decisões baseadas em fatos.",
  },
];

export function HomeSolutions() {
  return (
    <section className="bg-white py-24 border-y border-slate-100" aria-labelledby="solucoes-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 id="solucoes-heading" className="text-3xl lg:text-4xl font-black text-slate-900">
            Suas dores, nossas soluções
          </h2>
          <p className="text-slate-600">
            Transformamos os maiores desafios operacionais em oportunidades de crescimento para sua empresa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-surface border border-slate-200 group hover:border-brand transition-all shadow-sm"
            >
              <div className="size-12 rounded-xl bg-brand-soft flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-all" aria-hidden>
                <span className="text-xl">●</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
