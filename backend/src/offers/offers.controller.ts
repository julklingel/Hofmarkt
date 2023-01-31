import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { offerDto } from './dto';
import { OfferService } from './offers.service';

@Controller('offer')
export class OfferController {
  constructor(private offerService: OfferService) {}

  @Get()
  getOffers() {
    console.log('getOffers');
    return this.offerService.getOffers();
  }


  @Get()
  getAllOffers() {
    return this.productsService.getAllOffers();
  }

  @Get(':id')
  getOffer(@Param('id') id: string) {
<<<<<<< HEAD
    return this.productsService.getOneOffer(id);
=======
    return this.offerService.getOffer(id);
>>>>>>> 02e68d1 (b: replace product by offer)
  }

  @Post()
  createOffer(@Body() dto: offerDto) {
<<<<<<< HEAD
    
    
    return this.productsService.createOffer(dto);
=======
    return this.offerService.createOffer(dto);
>>>>>>> 02e68d1 (b: replace product by offer)
  }

}
