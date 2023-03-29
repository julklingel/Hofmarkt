import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendResetCode(account: string, token: number) {
    try {
      await this.mailerService.sendMail({
        to: account,
        from: '"Support Team" <support@example.com>',
        subject: `Hofmarkt reset-code: ${token}`,
        template: 'templates/reset-password.hbs',

        context: {
          token,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}
