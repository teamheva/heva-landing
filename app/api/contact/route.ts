import { NextResponse } from "next/server";

type Payload = {
  topic?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  // Forward to a mail service if configured; otherwise just log.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, receivedAt: new Date().toISOString() }),
      });
    } catch (err) {
      console.error("contact webhook failed", err);
    }
  } else {
    console.log("[contact]", { ...body, receivedAt: new Date().toISOString() });
  }

  return NextResponse.json({ ok: true });
}
