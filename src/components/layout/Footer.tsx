import Link from "next/link";
import Image from "next/image";
import { site, footerColumns, socialLinks } from "@/lib/constants";
import { InstagramIcon, LinkedinIcon, LocationIcon, MailIcon, PhoneIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-slate-300 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-footer.png"
                alt={`${site.name} - Automotive Tech`}
                width={408}
                height={116}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Inteligência e tecnologia aplicadas à mobilidade corporativa. Líder nacional em gestão de frotas leve e pesada.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => {
                const isStore = s.icon === "apple" || s.icon === "android";

                if (isStore) {
                  return (
                    <Link
                      key={s.icon}
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-[1.02]"
                    >
                      <Image
                        src={s.icon === "apple" ? "/app-store-badge.svg" : "/google-play-badge.svg"}
                        alt={s.label}
                        width={s.icon === "apple" ? 135 : 155}
                        height={40}
                      />
                    </Link>
                  );
                }

                return (
                  <Link
                    key={s.icon}
                    href={s.href}
                    className="text-white transition-colors hover:text-brand"
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{s.label}</span>
                    <span
                      aria-hidden
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-sm"
                    >
                      {s.icon === "instagram" && <InstagramIcon className="h-4 w-4" />}
                      {s.icon === "linkedin" && <LinkedinIcon className="h-4 w-4" />}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold mb-6">{col.title}</h4>
              {"contact" in col && col.contact ? (
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="text-brand" aria-hidden>
                      <MailIcon className="h-5 w-5" />
                    </span>
                    {col.email}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand" aria-hidden>
                      <PhoneIcon className="h-5 w-5" />
                    </span>
                    {col.phone}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand" aria-hidden>
                      <LocationIcon className="h-5 w-5" />
                    </span>
                    {col.address}
                  </li>
                </ul>
              ) : (
                <ul className="space-y-4 text-sm">
                  {"links" in col && col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href} className="transition-colors hover:text-brand">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Carrorama Fleet Management. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
