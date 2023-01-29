import { Module } from '@nestjs/common';
import {OfferController} from './offers.controller'
import { OffersService } from './offers.service';

@Module({
    imports: [],
    controllers: [OfferController],
    providers: [OffersService],

})
export class ProductsModule {}
