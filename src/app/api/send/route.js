//import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Sheila <sh.gonzal.s@gmail.com>',
      to: ['sh.gonzal.s@gmail.com'],
      subject: 'Hello world',
      react: <>
                <p>Email body</p>
            </>
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
