# Melhorias futuras - Carrorama Site

Lista de melhorias sugeridas para as próximas fases do projeto.

## Conversão e integrações

- **Stripe Checkout:** Integrar fluxo real de "Começar grátis" e "Teste Grátis 7 dias" com Stripe Checkout; configurar `NEXT_PUBLIC_STRIPE_CHECKOUT_URL` ou rota server-side que redireciona para a sessão de checkout.
- **CRM:** Enviar leads do formulário de contato para o CRM (webhook ou API); preencher `CRM_WEBHOOK_URL` e tratar no `POST /api/contact`.
- **E-mail:** Enviar confirmação ao usuário e notificação interna ao enviar o formulário (ex.: Resend, SendGrid, ou integração com CRM).

## Analytics e marketing

- **Google Tag Manager:** Incluir script do GTM quando `NEXT_PUBLIC_GTM_ID` estiver definido; configurar eventos de conversão (clique em "Começar grátis", envio do formulário).
- **GA4 e Meta Pixel:** Configurar via GTM ou scripts condicionais com `NEXT_PUBLIC_GA4_ID` e `NEXT_PUBLIC_META_PIXEL_ID`.
- **A/B de CTAs:** Testar variações de texto e posição dos botões de conversão.

## Conteúdo e design

- **Imagens reais:** Substituir placeholders (hero, dashboard, logos de parceiros, foto da seção "Evolução") por assets otimizados em `public/images`, com `next/image`, `sizes` e `priority` no hero.
- **Ícones:** Usar SVG ou biblioteca leve (apenas ícones necessários) no lugar de emojis onde o design exigir.
- **Blog:** Se previsto, criar estrutura `/blog` com listagem e post; RSS e metadata por post.

## Performance

- **Cache:** Revisar headers de cache para assets estáticos e páginas quando houver CDN/Vercel.
- **Lighthouse:** Rodar auditorias regulares (Performance, SEO, Best Practices, Accessibility) e ajustar para manter 95+.
- **Core Web Vitals:** Monitorar LCP, CLS e TBT em produção (ex.: Vercel Analytics, GA4).

## Segurança e compliance

- **CSP:** Ajustar Content-Security-Policy ao adicionar novos scripts (GTM, Meta, etc.); considerar nonces para scripts inline se necessário.
- **Rate limit:** Migrar rate limit do formulário para store persistente (ex.: Vercel KV, Upstash) em ambiente serverless para consistência entre instâncias.
- **LGPD:** Página de Política de Privacidade e Termos de Uso; consentimento para cookies/analytics se aplicável.

## Internacionalização e acessibilidade

- **Idiomas:** Se houver demanda, preparar i18n (ex.: next-intl) para PT/EN.
- **Testes de acessibilidade:** Incluir testes automatizados (ex.: axe-core, jest-axe) no pipeline.
