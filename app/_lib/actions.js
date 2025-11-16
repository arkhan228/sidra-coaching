'use server';

import { Resend } from 'resend';
import EmailTemplate from '../_components/EmailTemplate';
import { redirect } from 'next/navigation';
import { render } from '@react-email/render';
import { headers } from 'next/headers';

async function logToSheet(data) {
  try {
    const res = await fetch(process.env.WEB_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        key: process.env.WEB_APP_SECRET,
      }),
    });

    await res.text();
  } catch (error) {
    console.error(error);
  }
}

export async function sendEmail(formData) {
  const updatedData = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = await render(<EmailTemplate {...updatedData} />);

  const text = await render(<EmailTemplate {...updatedData} />, {
    toPlainText: true,
    pretty: true,
  });

  try {
    const { error } = await resend.emails.send({
      from: 'Sidra Coaching <no-reply@send.arkhan.dev>',
      to: 'sidracoachingcenter@gmail.com',
      reply_to: updatedData.email,
      subject: updatedData.subject || `New message from ${updatedData.name}`,
      html,
      text,
    });

    await logToSheet(updatedData);

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error(error);
  }

  redirect('/contact/thankyou');
}
