import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // In production, you would:
    // 1. Use a service like Resend, SendGrid, or Nodemailer
    // 2. Or use EmailJS from the client side
    // 3. Or integrate with a third-party email service

    // For now, we'll just log the data
    // You can replace this with actual email sending logic
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      subject,
      message,
    });

    // Example: Using Resend (you would need to install @resend/react)
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'ishantverma1421@gmail.com',
    //   subject: subject,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
    // })

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
