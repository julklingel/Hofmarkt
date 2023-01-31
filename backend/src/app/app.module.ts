import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';


import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules to import
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { PrismaModule } from 'src/db-module/prisma.module';
import { OfferModule } from 'src/offer/offer.module';

@Module({
  imports: [AppModule, OfferModule, AuthModule, UserModule, PrismaModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
