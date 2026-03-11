/**
 * Site-wide constants: nav, links, plan copy, FAQ, contact.
 */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://carrorama.com.br";

export const site = {
  name: "Carrorama",
  description:
    "Solução líder em gestão de frotas. Reduza custos operacionais com tecnologia de ponta.",
  baseUrl: BASE_URL,
  email: "comercial@carrorama.net",
  supportEmail: "comercial@carrorama.net",
  phone: "+55 15 98811-3914",
  phoneDisplay: "(15) 98811-3914",
  address: "Sorocaba/SP",
} as const;

export const nav = [
  { label: "Plataforma", href: "/plataforma" },
  { label: "Módulos", href: "/modulos" },
  { label: "Planos", href: "/planos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
] as const;

export const cta = {
  startFree: "Começar grátis",
  startFreeNow: "Começar grátis hoje",
  tryFree: "Experimentar grátis",
  tryFree7: "Teste Grátis 7 dias",
  seePlans: "Ver planos",
  choosePlan: "Escolher Plano",
  subscribeElite: "Assinar Elite",
  talkToConsultant: "Falar com consultor",
  talkToSpecialist: "Falar com Especialista",
  requestConsulting: "Solicitar Consultoria Grátis",
  techDocs: "Documentação Técnica",
  scheduleDemo: "Agendar Demo",
  login: "Entrar",
  começarAgora: "Começar agora",
} as const;

export const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "49,90",
    period: "veículo/mês",
    badge: "7 DIAS GRÁTIS",
    description: null,
    minVehicles: "Mínimo de 5 veículos",
    features: [
      "Painel Administrativo",
      "Gestão Financeira",
      "Dashboards de Performance",
      "Controle de Combustível",
      "Plano de Manutenção",
      "Gestão de Documentos",
      { text: "Sem Rastreamento Real-time", included: false },
    ],
    cta: "Teste Grátis 7 dias",
    featured: false,
  },
  {
    id: "elite",
    name: "Elite",
    price: "109,90",
    period: "veículo/mês",
    badge: null,
    description: "Tecnologia de ponta em telemetria",
    features: [
      "Tudo no Starter +",
      "Rastreamento em Tempo Real",
      "Otimização de Rota Inteligente",
      "Sensores de Velocidade e Frenagem",
      "Média de Consumo por Trecho",
      "Alarmes de Segurança 24h",
      "Cerca Eletrônica (Geofencing)",
    ],
    cta: "Falar com Especialista",
    featured: true,
  },
] as const;

export const comparisonFeatures = [
  { resource: "Gestão Administrativa & Multi-Usuários", starter: true, elite: true },
  { resource: "Controle Financeiro de Custos", starter: true, elite: true },
  { resource: "Rastreamento via GPS (A cada 30s)", starter: false, elite: true },
  { resource: "Relatórios Avançados de BI", starter: false, elite: true },
  { resource: "Telemetria de Motor e Velocidade", starter: false, elite: true },
  { resource: "Suporte Priority 24/7", starter: false, elite: true },
] as const;

export const faq = [
  {
    question: "Como funciona o período de 7 dias grátis?",
    answer:
      "No plano Starter, você pode cadastrar sua frota e utilizar todos os recursos administrativos por 7 dias sem cobrança. Não solicitamos cartão de crédito para o trial.",
  },
  {
    question: "Preciso instalar algum hardware para o plano Elite?",
    answer:
      "Sim, o plano Elite utiliza um dispositivo de telemetria OBD-II de fácil instalação. Enviamos o hardware e oferecemos suporte remoto para configuração.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, não temos fidelidade contratual nos planos mensais. Você pode solicitar o cancelamento a qualquer momento através do painel administrativo.",
  },
  {
    question: "Existe desconto para frotas maiores?",
    answer:
      "Para frotas acima de 50 veículos, temos condições personalizadas. Entre em contato com nosso time comercial.",
  },
] as const;

export const footerColumns = [
  {
    title: "Plataforma",
    links: [
      { label: "Funcionalidades", href: "/plataforma" },
      { label: "Rastreamento", href: "/plataforma" },
      { label: "Telemetria", href: "/plataforma" },
      { label: "Planos e Preços", href: "/planos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "/sobre" },
      { label: "Carreiras", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Parcerias", href: "#" },
    ],
  },
  {
    title: "Contato",
    contact: true,
    email: "comercial@carrorama.net",
    phone: "(15) 98811-3914",
    address: "Sorocaba/SP",
  },
] as const;

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/carrorama/", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/carrorama/", icon: "linkedin" },
] as const;

/** Stripe Checkout URL - placeholder until integration */
export const STRIPE_CHECKOUT_URL = process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_URL ?? "#";
