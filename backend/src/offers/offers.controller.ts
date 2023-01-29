import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { offerDto } from './dto';
import { OffersService } from './offers.service';

@Controller('offer')
export class OfferController {
  constructor(private productsService: OffersService) {}

  @Get(':id')
  getOffer(@Param('id') dto: offerDto) {
    return this.productsService.getOffer(dto);
  }

  @Post()
  createOffer(@Body() dto: offerDto) {
    return this.productsService.createOffer(dto);
  }

}
