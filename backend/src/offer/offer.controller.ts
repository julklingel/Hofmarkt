import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { offerDto } from './dto';
import { OfferService } from './offer.service';

@Controller('offer')
export class OfferController {
  constructor(private offerService: OfferService) {}

  @Get()
  getOffers() {
    return this.offerService.getOffers();
  }

  @Get(':id')
  getOffer(@Param('id') id: string) {
    return this.offerService.getOffer(id);
  }

  @Get('supplier/:id')
  getOffersBySupplier(@Param('id') id: string) {
    return this.offerService.getOffersBySupplier(id);
  }

  @Post()
  createOffer(@Body() dto: offerDto) {
    return this.offerService.createOffer(dto);
  }

}
