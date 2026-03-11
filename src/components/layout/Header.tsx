import Link from "next/link";
import Image from "next/image";
import { nav, cta, STRIPE_CHECKOUT_URL, site } from "@/lib/constants";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#E5E7EB] bg-white backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${site.name} - Página inicial`}
        >
          <Image
            src="/logo.png"
            alt={`${site.name} - Automotive Tech`}
            width={408}
            height={116}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#1C1E21] transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden md:block text-sm font-semibold text-[#1C1E21] px-4 py-2 transition-colors hover:text-brand"
          >
            {cta.login}
          </Link>
          <Link
            href={STRIPE_CHECKOUT_URL}
            data-cta="comecar-agora"
            className="bg-brand hover:bg-brand-hover text-white font-bold py-2.5 px-6 rounded-lg transition-all text-sm"
          >
            Começar agora
          </Link>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
