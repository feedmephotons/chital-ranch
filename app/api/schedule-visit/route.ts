import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, preferredDate, preferredTime, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format date
    const formattedDate = new Date(preferredDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Send email via Resend
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'noreply@chitalranch.com',
      to: process.env.EMAIL_TO || 'info@chitalranch.com',
      replyTo: email,
      subject: `Ranch Visit Request: ${formattedDate} at ${preferredTime}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #2d3748; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1a2332; color: #d4af37; padding: 20px; text-align: center; }
              .content { background-color: #f7f5f0; padding: 30px; margin-top: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1a2332; }
              .value { color: #2d3748; margin-top: 5px; }
              .highlight { background-color: #d4af37; color: white; padding: 15px; margin: 20px 0; text-align: center; }
              .message-box { background-color: white; padding: 15px; margin-top: 10px; border-left: 4px solid #d4af37; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📅 Ranch Visit Request</h1>
                <p>Chital Ranch Website</p>
              </div>
              <div class="content">
                <div class="highlight">
                  <h2 style="margin: 0;">Requested Appointment</h2>
                  <p style="font-size: 18px; margin: 10px 0 0 0;">
                    <strong>${formattedDate}</strong><br>
                    at <strong>${preferredTime}</strong>
                  </p>
                </div>
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                ${message ? `
                  <div class="field">
                    <div class="label">Additional Notes:</div>
                    <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                  </div>
                ` : ''}
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Schedule visit error:', error);
    return NextResponse.json(
      { error: 'Failed to schedule visit' },
      { status: 500 }
    );
  }
}
