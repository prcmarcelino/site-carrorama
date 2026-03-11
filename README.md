# Carrorama - Site Institucional e Comercial

Site institucional e comercial da Carrorama, focado em performance, SEO técnico, segurança e conversão.

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Estilo:** Tailwind CSS 4, design tokens (cores, tipografia, espaçamento)
- **Deploy:** Preparado para Vercel

## Requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

## Instalação

```bash
pnpm install
```

## Variáveis de ambiente

Copie o arquivo de exemplo e ajuste conforme o ambiente:

```bash
cp .env.example .env.local
```

Veja [.env.example](.env.example) para a lista de variáveis e descrição.

## Desenvolvimento

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
```

## Produção

```bash
pnpm start
```

## Deploy (Vercel)

1. Conecte o repositório ao Vercel.
2. Configure as variáveis de ambiente no painel (Production e Preview).
3. Deploy automático a cada push na branch principal (ou conforme configurado).

O Vercel detecta Next.js automaticamente; use o Build Command padrão `pnpm build` (ou deixe em branco).

## Estrutura do projeto

```
src/
  app/              # App Router: rotas e layouts
    api/contact/    # API do formulário de contato
  components/
    layout/         # Header, Footer, MobileNav
    sections/       # Seções por página (home, planos, contato)
    ui/             # Button, Card, Input
  lib/              # Constantes, SEO, utils, design tokens
public/
  images/           # Imagens (otimizar com next/image)
```

## Páginas

| Rota        | Descrição                    |
|------------|------------------------------|
| `/`        | Home                         |
| `/plataforma` | Tecnologia e arquitetura  |
| `/modulos` | Módulos do sistema           |
| `/planos`  | Planos Starter e Elite, FAQ  |
| `/sobre`   | História, missão, contato     |
| `/contato` | Formulário e dados de contato |

## Funcionalidades

- **Performance:** Server Components, next/image (AVIF/WebP), lazy loading, fontes com `next/font`.
- **SEO:** Metadata por página, Open Graph, Twitter Cards, JSON-LD (Organization, Product, FAQPage), sitemap.xml, robots.txt, canonical.
- **Segurança:** Headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy), sanitização e validação no formulário, rate limit, honeypot.
- **Acessibilidade:** Contraste WCAG AA, link “Pular para o conteúdo”, navegação por teclado, focus visível, aria-labels onde necessário.
- **Conversão:** CTAs “Começar grátis” preparados para Stripe; formulário de contato funcional (API `/api/contact`); estrutura pronta para GTM, GA4 e Meta Pixel.

## Melhorias futuras

Ver [MELHORIAS_FUTURAS.md](MELHORIAS_FUTURAS.md).

## Licença

Projeto privado - Carrorama.
