import { Module } from '@nestjs/common';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { OfferController } from './offer.controller';
import { OfferService } from './offer.service';

@Module({
  imports: [CloudinaryModule],
  controllers: [OfferController],
  providers: [OfferService],
})
export class OfferModule {}
