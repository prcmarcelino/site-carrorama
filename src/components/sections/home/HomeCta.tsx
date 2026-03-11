import Link from "next/link";
import { STRIPE_CHECKOUT_URL } from "@/lib/constants";

export function HomeCta() {
  return (
    <section className="py-24 bg-dark text-white" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
        <h2 id="cta-heading" className="text-4xl lg:text-6xl font-black max-w-4xl mx-auto leading-tight">
          Pronto para transformar sua gestão de frotas?
        </h2>
        <p className="text-lg lg:text-xl font-medium max-w-2xl mx-auto opacity-80">
          Junte-se a mais de 1.200 empresas que economizam tempo e dinheiro com nossa tecnologia de ponta.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={STRIPE_CHECKOUT_URL}
            data-cta="comecar-gratis-agora"
            className="bg-brand text-white font-black h-16 px-12 rounded-2xl hover:scale-105 transition-transform text-lg flex items-center justify-center"
          >
            Começar grátis agora
          </Link>
          <Link
            href="/contato"
            className="bg-white/10 border-2 border-white/20 font-black h-16 px-12 rounded-2xl hover:bg-white hover:text-dark transition-all text-lg flex items-center justify-center"
          >
            Falar com consultor
          </Link>
        </div>
      </div>
    </section>
  );
}
