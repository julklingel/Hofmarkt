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
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  imports: [
    AppModule,
    SupplierModule,
    OfferModule,
    AuthModule,
    UserModule,
    CloudinaryModule,
    PrismaModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
