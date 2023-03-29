import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules to import
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { PrismaModule } from '../db-module/prisma.module';
import { SupplierModule } from '../supplier/supplier.module';
import { OfferModule } from '../offer/offer.module';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [
    SupplierModule,
    OfferModule,
    AuthModule,
    UserModule,
    PrismaModule,
    MailModule,
    ConfigModule.forRoot(),
  ],
  
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
