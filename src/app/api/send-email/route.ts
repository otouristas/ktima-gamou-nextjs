import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";
import {
  buildOwnerInquiryEmailHtml,
  buildCustomerInquiryEmailHtml,
  buildContactOwnerEmailHtml,
} from "@/lib/email/inquiry-email";

export const runtime = "nodejs";

const inquirySchema = z.object({
  type: z.literal("request"),
  firstName: z.string().min(1).max(120),
  lastName: z.string().min(1).max(120),
  email: z.string().email().max(320),
  phone: z.string().min(1).max(80),
  eventType: z.string().min(1).max(80),
  eventDate: z.string().max(40).optional(),
  guestCount: z.string().max(40).optional(),
  budget: z.string().max(80).optional(),
  specialRequests: z.string().max(5000).optional(),
  howDidYouHear: z.string().max(200).optional(),
  services: z.array(z.string().max(120)).default([]),
});

const contactSchema = z.object({
  type: z.literal("contact"),
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  phone: z.string().max(80).optional(),
  subject: z.string().min(1).max(200),
  message: z.string().min(1).max(10000),
});

const bodySchema = z.discriminatedUnion("type", [inquirySchema, contactSchema]);

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

function getFromAddress(): string {
  return process.env.RESEND_FROM ?? "Κτήμα Ωρίων <onboarding@resend.dev>";
}

export async function POST(request: Request): Promise<NextResponse> {
  if (request.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
  }
  try {
    const json: unknown = await request.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid payload", issues: parsed.error.flatten() }, { status: 400 });
    }
    const resend = getResendClient();
    const from = getFromAddress();
    if (parsed.data.type === "contact") {
      const d = parsed.data;
      await resend.emails.send({
        from,
        to: ["info@ktimaorion.gr"],
        replyTo: d.email,
        subject: `Επικοινωνία: ${d.subject}`,
        html: buildContactOwnerEmailHtml(d),
      });
      return NextResponse.json({ ok: true });
    }
    const d = parsed.data;
    await resend.emails.send({
      from,
      to: ["info@ktimaorion.gr"],
      subject: `Νέο αίτημα πληροφοριών — ${d.eventType}`,
      html: buildOwnerInquiryEmailHtml(d),
    });
    await resend.emails.send({
      from,
      to: [d.email],
      subject: "Λάβαμε το αίτημά σας — Κτήμα Ωρίων",
      html: buildCustomerInquiryEmailHtml(d),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("send-email:", err);
    return NextResponse.json({ message: "Error sending email", error: message }, { status: 500 });
  }
}
