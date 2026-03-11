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
      <div className="relative">
        <div className="absolute -inset-4 bg-brand/10 blur-3xl rounded-full" aria-hidden />
        <div className="relative bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden aspect-[541/405] flex items-center justify-center">
          <div className="relative flex h-full w-full items-center justify-center p-4">
            <Image
              src="/image-fce3d9a1-eec2-482e-8790-d88e411d152d.png"
              alt="Frota de veículos gerenciada pela Carrorama"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
          <div className="flex justify-between items-center text-white">
            <div className="flex gap-4">
              <div className="size-10 rounded-lg bg-success flex items-center justify-center text-slate-900" aria-hidden>↓</div>
              <div>
                <p className="text-xs opacity-70">Redução de Custos</p>
                <p className="text-xl font-bold">-24.8% mensal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
