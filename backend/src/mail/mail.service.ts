 
 import { Injectable, } from '@nestjs/common';
 import { PrismaService } from '../db-module/prisma.service';
 import { MailerService } from '@nestjs-modules/mailer';
 import { Account } from '@prisma/client';


 
 @Injectable()
 export class MailService {
   constructor(private mailerService: MailerService) {}
 
   async sendResetCode(account: string, token: number) {
     const message = `This is your token: ${token}`;
 
     await this.mailerService.sendMail({
       to: account,
       from: '"Support Team" <support@example.com>', 
       subject: 'Welcome to Nice App! Confirm your Email',
       context: { 
        message,
         
       },
     });
   }
 }
 