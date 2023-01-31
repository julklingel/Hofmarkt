import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';


import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules to import
import { ProductModule } from '../products/products.module';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { OfferModule } from '../offers/offers.module';
import { PrismaModule } from 'src/db-module/prisma.module';

@Module({
  imports: [AppModule, ProductModule, OfferModule, AuthModule, UserModule, PrismaModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

