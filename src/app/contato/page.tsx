import type { Metadata } from "next";
import { site } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/sections/contato/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description: "Fale com a equipe Carrorama. E-mail, telefone e formulário de contato.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <main>
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contato
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Fale com nossa equipe. Respondemos em até 24 horas úteis.
          </p>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-lg font-bold text-gray-900">E-mail</h2>
                <a
                  href={`mailto:${site.supportEmail}`}
                  className="mt-2 block text-brand hover:underline"
                >
                  {site.supportEmail}
                </a>
              </Card>
              <Card className="p-6">
                <h2 className="text-lg font-bold text-gray-900">Telefone</h2>
                <a
                  href={`tel:${site.phone}`}
                  className="mt-2 block text-brand hover:underline"
                >
                  {site.phoneDisplay}
                </a>
              </Card>
              <Card className="p-6">
                <h2 className="text-lg font-bold text-gray-900">Endereço</h2>
                <p className="mt-2 text-gray-600">{site.address}</p>
              </Card>
            </div>
            <Card className="p-6">
              <h2 className="text-lg font-bold text-gray-900">Envie uma mensagem</h2>
              <p className="mt-1 text-sm text-gray-600">
                Preencha o formulário e nossa equipe entrará em contato.
              </p>
              <ContactForm submitLabel="Enviar mensagem" className="mt-6" />
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
