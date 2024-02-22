import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail =  'Sheila González <' + process.env.FROM_EMAIL + '>';
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
  const body = await req.json();
  const { email, subject, message } = body;
  
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: subject,
      react: (
        <div>
          <h2>{subject}</h2>
          <p>{message}</p>
          <p>Responder a: {email}</p>
        </div>
      )
    });
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error });
  }
}