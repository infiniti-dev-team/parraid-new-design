import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req) {
  try {
    const data = await req.json();

    const {
      email,
      ip,
      city,
      state,
      country,
      pageurl,
      userId,
      userAgent,
    } = data;

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n") : "",
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Append to Sheet2 for dedicated cookie consent records
    // Columns: Timestamp, UserID, Consent, IP, City, State, Country, PageURL, UserAgent
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "'Cookies Submission'!A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            "Cookie Opt-in", // Name
            "User accepted cookies and opted-in to data saving.", // Message
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
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("COOKIE CONSENT API ERROR:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
