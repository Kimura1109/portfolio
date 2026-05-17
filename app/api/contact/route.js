import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'noreply@rumisense.com',
      to: 'remisense.dev@gmail.com',
      subject: `【Rumisense】${name}様よりお問い合わせ`,
      html: `
        <p><strong>お名前：</strong>${name}</p>
        <p><strong>メールアドレス：</strong>${email}</p>
        <p><strong>メッセージ：</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'メール送信に失敗しました' }, { status: 500 });
  }
}