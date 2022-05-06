import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1a1ceff40e63e4",
    pass: "601dabc083ef5b"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Lucca Di Bastiani <lucca_di@hotmail.com>',
      subject,
      html: body,
    })
  }
}