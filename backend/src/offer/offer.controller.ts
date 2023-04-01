import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UploadedFiles,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
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
  async createOffer(
    @GetUser() user: any,
    @Body() dto: offerDto,
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    return this.offerService.createOffer(dto, user, files);
  }
}
