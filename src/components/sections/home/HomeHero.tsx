import Image from "next/image";
import Link from "next/link";
import { STRIPE_CHECKOUT_URL } from "@/lib/constants";

export function HomeHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider">
          <span className="relative flex h-2 w-2 gap-0.5">
            <span className="inline-flex rounded-full h-2 w-2 bg-brand" />
            <span className="inline-flex rounded-full h-2 w-2 bg-brand" />
          </span>
          GESTÃO DE FROTA INTELIGENTE
        </div>
        <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
          Informação que vira <span className="text-brand">economia.</span>
        </h1>
        <p className="text-lg lg:text-xl text-slate-600 max-w-lg leading-relaxed">
          Plataforma completa de gestão e inteligência para frotas. Reduza custos, aumente a produtividade e tenha controle total da sua operação em tempo real.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={STRIPE_CHECKOUT_URL}
            data-cta="comecar-gratis-7-dias"
            className="bg-brand hover:bg-brand-hover text-white font-bold h-14 px-8 rounded-xl transition-all shadow-lg shadow-brand/20 flex items-center justify-center gap-2"
          >
            Começar grátis por 7 dias
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/planos"
            className="bg-dark hover:bg-dark/90 text-white font-bold h-14 px-8 rounded-xl transition-all flex items-center justify-center border-2 border-transparent"
          >
            Ver planos
          </Link>
        </div>
      </div>
      <div className="flex items-end justify-end h-full">
        <div className="relative w-full max-w-xl aspect-[541/405]">
          <div className="absolute inset-0 bg-gradient-to-l from-slate-100 to-transparent" aria-hidden />
          <Image
            src="/image-fce3d9a1-eec2-482e-8790-d88e411d152d.png"
            alt="Frota de veículos gerenciada pela Carrorama"
            fill
            priority
            className="object-contain object-right"
          />
        </div>
      </div>
    </section>
  );
}
