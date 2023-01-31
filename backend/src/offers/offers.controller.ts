import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { offerDto } from './dto';
import { OffersService } from './offers.service';

@Controller('offer')
export class OfferController {
  constructor(private productsService: OffersService) {}

  @Get()
  getAllOffers() {
    return this.productsService.getAllOffers();
  }

  @Get(':id')
  getOffer(@Param('id') id: string) {
    return this.productsService.getOneOffer(id);
  }

  @Post()
  createOffer(@Body() dto: offerDto) {
    
    
    return this.productsService.createOffer(dto);
  }

}
