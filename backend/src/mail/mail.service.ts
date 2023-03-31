import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendResetCode(account: string, token: string) {
    try {
      await this.mailerService.sendMail({
        to: account,
        from: '"Support Team" <hofmarkt24@gmail.com>',
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
  async sendConfirmMail(email: string, confirmationCode: string) {
    try {
      const confirmationLink = `http://localhost:4444/auth/confirm?email=${email}&code=${confirmationCode}`;
      await this.mailerService.sendMail({
        to: email,
        from: '"Support Team" <hofmarkt24@gmail.com>',
        subject: `Hofmarkt confirm your account`,
        template: 'templates/confirm-account.hbs',
        context: {
          link: confirmationLink,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
  
}

