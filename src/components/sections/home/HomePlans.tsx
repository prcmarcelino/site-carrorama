import Link from "next/link";

const plansPreview = [
  {
    name: "Starter",
    price: "49,90",
    features: ["Gestão de Manutenção", "Controle de Combustível", "Relatórios Básicos"],
    cta: "Assinar Starter",
    featured: false,
  },
  {
    name: "Elite",
    price: "109,90",
    features: ["Telemetria Avançada", "Ranking de Condutores", "Inteligência Artificial Predict", "Suporte 24/7 Dedicado"],
    cta: "Assinar Elite",
    featured: true,
  },
];

export function HomePlans() {
  return (
    <section className="py-24 bg-white" aria-labelledby="planos-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="planos-heading" className="text-3xl lg:text-4xl font-black text-slate-900">
            Conheça os Planos
          </h2>
          <p className="text-slate-600 mt-4">
            Escolha a escala ideal para sua frota.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plansPreview.map((plan) => (
            <div
              key={plan.name}
              className="p-10 rounded-3xl bg-surface border border-slate-200 shadow-xl flex flex-col items-center"
            >
              <p className="font-bold text-slate-500 uppercase tracking-widest text-sm">{plan.name}</p>
              <div className="my-6 text-center">
                <span className="text-slate-400 text-lg">R$</span>
                <span className="text-5xl font-black text-slate-900"> {plan.price}</span>
                <span className="text-slate-400 text-sm">/veículo/mês</span>
              </div>
              <ul className="space-y-4 mb-10 w-full text-sm text-slate-600">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="text-success text-xl" aria-hidden>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.featured ? "/contato" : "/planos"}
                className="w-full py-4 rounded-xl border-2 border-slate-300 font-bold hover:border-success hover:text-success transition-all text-slate-900 text-center"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/planos"
            className="inline-flex items-center gap-2 text-brand font-bold hover:text-brand-hover transition-colors group"
          >
            Ver comparação completa
            <span className="group-hover:translate-x-1 transition-transform" aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
