import { Module } from '@nestjs/common';
import {OfferController} from './offer.controller'
import { OfferService } from './offer.service';

@Module({
    imports: [],
    controllers: [OfferController],
    providers: [OfferService],

})
export class OfferModule {}
