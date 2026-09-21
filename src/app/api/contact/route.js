import { NextResponse } from "next/server"
import { google } from "googleapis"
import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const data = await req.json()

    const {
      name,
      email,
      phone,
      company,
      message,
      ip,
      city,
      state,
      country,
      pageurl,
      userId,
      userAgent,
    } = data

    /* ===== GOOGLE SHEETS ===== */
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n") : "",
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "'Form Submissions'!A:L",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            name,
            email,
            phone,
            company,
            message,
            ip,
            city,
            state,
            country,
            pageurl,
            userId,
            userAgent,
          ],
        ],
      },
    })

    /* ===== EMAIL ===== */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: "Thanks for contacting us",
      html: `<p>Hi ${name}, we received your message.</p>`,
    })

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_EMAIL}>`,
      to: [
        process.env.SMTP_EMAIL,
        "seoproduction@inhousedept.com",
        "sales@parraid.com",
      ],
      subject: "New Contact Form Lead",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Message:</b> ${message}</p>
        <p><b>IP:</b> ${ip}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>State:</b> ${state}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Page:</b> ${pageurl}</p>
        <p><b>User ID:</b> ${userId}</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("API ERROR:", error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    )
  }
}
