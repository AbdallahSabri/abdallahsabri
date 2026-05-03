import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.EMAIL_SERVICE_API_KEY);

export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV !== "production") {
    return ;
  }
  const { fullName, email, company, topic, message, contactMethod } =
    await req.json();

  if (!fullName || !email || !topic) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const { error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "abdallah.silwad@gmail.com",
    replyTo: email,
    subject: `[Contact] ${topic} — ${fullName}`,
    text: [
      `Name: ${fullName}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      `Topic: ${topic}`,
      contactMethod ? `Preferred contact: ${contactMethod}` : null,
      message ? `\nMessage:\n${message}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
