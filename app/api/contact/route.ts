import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "canriscore@gmail.com",
      subject: `New Enquiry from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #001920; border-bottom: 2px solid #5aa9e9; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8e9; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8e9;">${name}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8e9; font-weight: bold;">Company:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8e9;">${company}</td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8e9; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8e9;">
                <a href="mailto:${email}" style="color: #5aa9e9;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8e9; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8e9;">${phone}</td>
            </tr>
            ` : ""}
            ${service ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8e9; font-weight: bold;">Service:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8e9;">${service}</td>
            </tr>
            ` : ""}
          </table>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #001920; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f4f9f4; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
          
          <p style="margin-top: 30px; color: #666; font-size: 12px;">
            This message was sent from the Canris website contact form.
          </p>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending contact email:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
