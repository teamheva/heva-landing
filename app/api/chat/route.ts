// @ts-nocheck
import { streamText, type UIMessage, convertToModelMessages } from "ai";
import { google } from "@ai-sdk/google";
import { getChatSystemPrompt } from "@/lib/chatSystemPrompt";
import type { Lang } from "@/lib/translations";

export const dynamic = "force-dynamic";

// In-memory rate limiting: 20 req/min per IP
const rateMap = new Map<string, number[]>();
const RATE_LIMIT = 20;
const RATE_WINDOW = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_WINDOW);
  if (recent.length >= RATE_LIMIT) return true;
  recent.push(now);
  rateMap.set(ip, recent);
  return false;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
      status: 429,
      headers: { "Content-Type": "application/json" },
    });
  }

  const body = await req.json();
  const lang: Lang = body.lang ?? "et";
  const messages: UIMessage[] = body.messages ?? [];

  // Trim conversation to last 30 messages
  const trimmed = messages.slice(-30);

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: getChatSystemPrompt(lang),
    messages: await convertToModelMessages(trimmed),
    maxOutputTokens: 500,
  });

  return result.toUIMessageStreamResponse();
}
