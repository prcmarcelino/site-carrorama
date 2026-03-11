"use client";

import { useState } from "react";
import Link from "next/link";
import { nav, cta, STRIPE_CHECKOUT_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-brand"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
        <span className="sr-only">{open ? "Fechar" : "Menu"}</span>
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <div
        id="mobile-menu"
        className={`absolute left-0 right-0 top-20 border-b border-gray-200 bg-white shadow-lg ${open ? "block" : "hidden"}`}
        role="dialog"
        aria-label="Menu mobile"
      >
        <nav className="flex flex-col gap-1 p-4" aria-label="Navegação mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-4">
            <Link
              href="#"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              {cta.login}
            </Link>
            <Button asChild variant="primary" className="w-full rounded-lg">
              <Link href={STRIPE_CHECKOUT_URL} onClick={() => setOpen(false)} data-cta="comecar-gratis">
                Começar agora
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
