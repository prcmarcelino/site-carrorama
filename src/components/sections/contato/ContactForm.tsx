"use client";

import { useState } from "react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const MAX_NAME = 120;
const MAX_COMPANY = 120;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 2000;

export function ContactForm({
  submitLabel = "Enviar",
  className,
}: {
  submitLabel?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot: if filled, treat as bot and do not submit
    if (formData.get("website")) {
      setStatus("success");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Erro ao enviar. Tente novamente.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Erro de conexão. Tente novamente.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-4", className)}
      noValidate
      aria-label="Formulário de contato"
    >
      {/* Honeypot - hidden from users, bots may fill it */}
      <div className="absolute -left-[9999px] top-0" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Input
        label="Nome Completo"
        name="name"
        type="text"
        required
        maxLength={MAX_NAME}
        autoComplete="name"
        disabled={status === "loading"}
      />
      <Input
        label="Empresa"
        name="company"
        type="text"
        maxLength={MAX_COMPANY}
        autoComplete="organization"
        disabled={status === "loading"}
      />
      <Input
        label="E-mail Corporativo"
        name="email"
        type="email"
        required
        maxLength={MAX_EMAIL}
        autoComplete="email"
        disabled={status === "loading"}
      />
      <Textarea
        label="Mensagem"
        name="message"
        required
        maxLength={MAX_MESSAGE}
        rows={5}
        disabled={status === "loading"}
      />

      {status === "error" && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      )}
      {status === "success" && (
        <p className="rounded-lg bg-green-50 p-3 text-sm text-green-800" role="status">
          Mensagem enviada com sucesso. Entraremos em contato em breve.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full rounded-lg"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando…" : submitLabel}
      </Button>
    </form>
  );
}
