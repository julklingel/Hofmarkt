import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';


import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules to import
<<<<<<< HEAD
import { ProductModule } from '../products/products.module';
=======
>>>>>>> 02e68d1 (b: replace product by offer)
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { OfferModule } from '../offers/offers.module';
import { PrismaModule } from 'src/db-module/prisma.module';

@Module({
<<<<<<< HEAD
  imports: [AppModule, ProductModule, OfferModule, AuthModule, UserModule, PrismaModule, ConfigModule.forRoot()],
=======
  imports: [AppModule, AuthModule, UserModule, OfferModule, PrismaModule, ConfigModule.forRoot()],
>>>>>>> 02e68d1 (b: replace product by offer)
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

