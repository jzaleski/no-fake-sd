import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    const { name, email, message, timezone } = body;
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

    // Extract IP address (check common proxy headers in priority order)
    // In production (Vercel/cloud), x-forwarded-for contains the real client IP
    // In local development, this will be ::1 (IPv6 localhost) or 127.0.0.1
    const forwardedFor = request.headers.get("x-forwarded-for");
    let ipAddress =
      forwardedFor?.split(",")[0].trim() ||
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-real-ip") ||
      "Unknown";

    // Detect localhost and provide clearer context
    if (ipAddress === "::1" || ipAddress === "127.0.0.1" || ipAddress === "::ffff:127.0.0.1") {
      ipAddress = `${ipAddress} (localhost)`;
    }

    // Extract User Agent
    const userAgent = request.headers.get("user-agent") || "Unknown";

    // Use timezone from request body or fallback
    const userTimezone = timezone || "Unknown";

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
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        <p><strong>Device Metadata:</strong></p>
        <p style="font-size: 12px; color: #666;">
          <strong>User Agent:</strong> ${userAgent}
        </p>
        <p style="font-size: 12px; color: #666;">
          <strong>IP Address:</strong> ${ipAddress}
        </p>
        <p style="font-size: 12px; color: #666;">
          <strong>Timezone:</strong> ${userTimezone}
        </p>
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
