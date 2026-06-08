import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { getSql } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    const sql = getSql()
    await sql`
      INSERT INTO contact_submissions (name, company, email, phone, service, message)
      VALUES (${name}, ${company || null}, ${email}, ${phone || null}, ${service || null}, ${message})
    `

    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      })

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: "canriscore@gmail.com",
        subject: `New Enquiry from ${name}${company ? ` (${company})` : ""}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #001920; border-bottom: 2px solid #5aa9e9; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <p><strong>Name:</strong> ${name}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
            <p><strong>Message:</strong></p>
            <div style="background-color: #f4f9f4; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error saving contact submission:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
