import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    const { name, email, message } = body;
    if (!name?.length || !email?.length || !message?.length) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const from = process.env.CONTACT_FORM_FROM_ADDRESS?.toLowerCase();
    if (!from?.length) {
      console.error(`Resend configuration error, missing "from[Address]"`);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    const to = process.env.CONTACT_FORM_TO_ADDRESS?.toLowerCase();
    if (!to?.length) {
      console.error(`Resend configuration error, missing "to[Address]"`);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    const origin = request.headers.get("origin") || request.headers.get("referer") || "Unknown";

    const { data, error } = await resend.emails.send({
      from: `No Fake SD <${from}>`,
      to,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Domain:</strong> ${origin}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};
