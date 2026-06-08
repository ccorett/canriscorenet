import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { getSql } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, businessName, phone, email, service, details } = data

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const sql = getSql()
    await sql`
      INSERT INTO quote_requests (name, business_name, phone, email, service, details)
      VALUES (${name}, ${businessName || null}, ${phone}, ${email || null}, ${service}, ${details || null})
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
        from: `"Canris Website" <${process.env.GMAIL_USER}>`,
        to: "canriscore@gmail.com",
        subject: `New Quote Request from ${name}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Business Name:</strong> ${businessName || "Not provided"}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || "Not provided"}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Details:</strong> ${details || "None provided"}</p>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing quote request:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
