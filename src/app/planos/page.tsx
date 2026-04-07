import type { Metadata } from "next";
import Link from "next/link";
import { plans, comparisonFeatures, faq, STRIPE_CHECKOUT_URL } from "@/lib/constants";
import { buildMetadata, productJsonLd, faqJsonLd } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PlanosFaq } from "@/components/sections/planos/PlanosFaq";

function FeatureRow({ text, included }: { text: string; included: boolean }) {
  return (
    <li className="flex items-center gap-2">
      {included ? (
        <span className="text-success" aria-hidden>✓</span>
      ) : (
        <span className="text-danger" aria-hidden>✕</span>
      )}
      <span className={included ? "text-gray-700" : "text-gray-500"}>{text}</span>
    </li>
  );
}

export const metadata: Metadata = buildMetadata({
  title: "Planos",
  description:
    "Escolha o plano ideal para sua frota. Starter e Elite, transparência total. Sem taxa de adesão. 7 dias grátis.",
  path: "/planos",
});

export default function PlanosPage() {
  const starterLd = productJsonLd({
    name: "Starter",
    price: plans[0].price,
    description: "Plano Starter para gestão de frotas.",
  });
  const eliteLd = productJsonLd({
    name: "Elite",
    price: plans[1].price,
    description: plans[1].description ?? undefined,
  });
  const faqLd = faqJsonLd(faq);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(starterLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eliteLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <section className="bg-gray-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Escolha o plano ideal para sua frota.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
            Transparência total. Sem taxa de adesão.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {plans.map((plan) => (
              <Card key={plan.id} className={`flex flex-col ${plan.featured ? "ring-2 ring-brand" : ""}`}>
                {plan.badge && (
                  <span className="inline-block self-end rounded-full bg-brand-soft text-brand px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {plan.badge}
                  </span>
                )}
                <h2 className="mt-2 text-xl font-bold text-gray-900">{plan.name}</h2>
                <p className="mt-1 text-3xl font-bold text-gray-900">
                  R$ {plan.price}
                  <span className="text-sm font-normal text-gray-500"> veículo/mês</span>
                </p>
                {"minVehicles" in plan && plan.minVehicles && (
                  <p className="text-xs text-slate-400 mt-2">{plan.minVehicles}</p>
                )}
                {plan.description && (
                  <p className="text-xs text-slate-400 mt-2">{plan.description}</p>
                )}
                <ul className="mt-6 space-y-2">
                  {plan.features.map((f) =>
                    typeof f === "string" ? (
                      <FeatureRow key={f} text={f} included={true} />
                    ) : (
                      <FeatureRow key={f.text} text={f.text} included={f.included} />
                    )
                  )}
                </ul>
                <div className="mt-auto pt-6">
                  <Button
                    asChild
                    variant="primary"
                    className="w-full rounded-lg"
                  >
                    <Link href={STRIPE_CHECKOUT_URL}>
                      {plan.cta}
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="comparativo-heading">
        <div className="mx-auto max-w-4xl">
          <h2 id="comparativo-heading" className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Comparativo Detalhado
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 font-semibold text-gray-900">Recurso</th>
                  <th className="py-4 px-4 font-semibold text-gray-900">Starter</th>
                  <th className="py-4 pl-4 font-semibold text-gray-900">Elite</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.resource} className="border-b border-gray-100">
                    <td className="py-4 pr-4 text-gray-700">{row.resource}</td>
                    <td className="py-4 px-4">
                      {row.starter ? (
                        <span className="text-success" aria-hidden>✓</span>
                      ) : (
                        <span className="text-danger" aria-hidden>✕</span>
                      )}
                    </td>
                    <td className="py-4 pl-4">
                      {row.elite ? (
                        <span className="text-success" aria-hidden>✓</span>
                      ) : (
                        <span className="text-danger" aria-hidden>✕</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="faq-heading" className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Perguntas Frequentes
          </h2>
          <PlanosFaq items={faq} />
        </div>
      </section>
    </main>
  );
}
