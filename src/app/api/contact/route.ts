import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { escapeHtml, sanitizeInput } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(120),
  company: z.string().max(120).optional().or(z.literal("")),
  email: z.string().email("E-mail inválido").max(254),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(2000),
});

// Simple in-memory rate limit (per IP). For production consider Vercel KV or Upstash.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5;

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry) return false;
  if (now > entry.resetAt) {
    rateLimitMap.delete(ip);
    return false;
  }
  return entry.count >= RATE_LIMIT_MAX;
}

function recordRateLimit(ip: string): void {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return;
  }
  if (now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return;
  }
  entry.count += 1;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Tente novamente em alguns minutos." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { error: "Corpo da requisição inválido." },
      { status: 400 }
    );
  }

  if (body.website && String(body.website).trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const message = Object.values(first)[0]?.[0] ?? "Dados inválidos.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { name, company, email, message } = parsed.data;

  const sanitized = {
    name: sanitizeInput(escapeHtml(name), 120),
    company: company ? sanitizeInput(escapeHtml(company), 120) : "",
    email: sanitizeInput(escapeHtml(email), 254),
    message: sanitizeInput(escapeHtml(message), 2000),
  };

  recordRateLimit(ip);

  // TODO: send email or forward to CRM webhook
  // await sendToCrm(sanitized);
  // await sendEmail(sanitized);

  return NextResponse.json({ success: true });
}
