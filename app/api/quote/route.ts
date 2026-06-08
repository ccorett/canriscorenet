import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const { name, businessName, phone, email, service, details } = data

    // Validate required fields
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Send email using Gmail SMTP
    await transporter.sendMail({
      from: `"Canris Website" <${process.env.GMAIL_USER}>`,
      to: "canriscore@gmail.com",
      subject: `New Quote Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0d1117 0%, #1a1f2e 100%); color: #00dcd4; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; }
              .value { margin-top: 5px; padding: 10px; background: #fff; border-radius: 4px; border-left: 3px solid #00dcd4; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Quote Request</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Business Name</div>
                  <div class="value">${businessName || "Not provided"}</div>
                </div>
                <div class="field">
                  <div class="label">Phone Number</div>
                  <div class="value">${phone}</div>
                </div>
                <div class="field">
                  <div class="label">Email Address</div>
                  <div class="value">${email || "Not provided"}</div>
                </div>
                <div class="field">
                  <div class="label">Service Requested</div>
                  <div class="value">${service}</div>
                </div>
                <div class="field">
                  <div class="label">Additional Details</div>
                  <div class="value">${details || "None provided"}</div>
                </div>
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
                <p style="font-size: 12px; color: #888;">
                  This quote request was submitted through the Canris website on ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing quote request:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
