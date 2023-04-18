import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
  Patch,
} from '@nestjs/common';
import { GetUser, Roles } from '../auth/decorator';
import { offerDto } from './dto';
import { OfferService } from './offer.service';
import { JwtAuthGuard, RolesGuard } from '../auth/guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { imageUploadFileFilter } from '../imageUpload';
import { userInterface } from '../interface';

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

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPPLIER')
  @UseInterceptors(
    FilesInterceptor('image', 4, {
      fileFilter: imageUploadFileFilter,
      limits: {
        fileSize: 2 * 1024 * 1024, // 2 MB in bytes
      },
    }),
  )
  @Post('create')
  async createOffer(
    @GetUser() user: userInterface,
    @Body() dto: offerDto,
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    return this.offerService.createOffer(dto, user, files);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPPLIER')
  @UseInterceptors(
    FilesInterceptor('image', 4, {
      fileFilter: imageUploadFileFilter,
      limits: {
        fileSize: 2 * 1024 * 1024, // 2 MB in bytes
      },
    }),
  )
  @Patch('update/:id')
  async patchOffer(
    @Param('id') id: string,
    @Body() dto: offerDto,
    @GetUser() user: any,
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    return this.offerService.patchOffer(id, dto, user, files);
  }
}
