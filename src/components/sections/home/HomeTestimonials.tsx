const partners = ["LOGGI", "FEDEX", "LOCALIZA", "MOVIVA"];
const testimonial = {
  quote:
    "A implementação da Carrorama reduziu nossos custos operacionais em 22% logo nos primeiros 3 meses. A visibilidade que temos hoje é algo que nunca conseguimos com planilhas.",
  author: "Ricardo Alencar",
  role: "Gerente de Logística - TransBrasil",
};

export function HomeTestimonials() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6" aria-labelledby="quem-confia-heading">
      <div className="bg-background-alt rounded-[2.5rem] p-12 lg:p-20 border border-slate-200">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="quem-confia-heading" className="text-3xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Quem confia na Carrorama
            </h2>
            <div className="flex flex-wrap gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
              {partners.map((name) => (
                <span key={name} className="font-black text-2xl text-slate-900">
                  {name}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex gap-1 text-brand mb-4" aria-hidden>
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-xl">★</span>
              ))}
            </div>
            <p className="italic text-lg text-slate-700 mb-6 leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-slate-200 overflow-hidden" aria-hidden />
              <div>
                <p className="font-bold text-slate-900">{testimonial.author}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
