import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendResetCode(account: string, token: string) {
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
