import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
  Patch,
} from '@nestjs/common';
import { supplierDto, updateSupplierDto } from './dto';
import { SupplierService } from './supplier.service';
import { addressDto, updateAddressDto } from '../address';
import { JwtAuthGuard, RolesGuard } from '../auth/guard';
import { GetUser, Roles } from '../auth/decorator';
import { FilesInterceptor } from '@nestjs/platform-express';
import { imageUploadFileFilter } from '../imageUpload';
import { userInterface } from '../interface';

@Controller('supplier')
export class SupplierController {
  constructor(private supplierService: SupplierService) {}

  @Get()
  getSuppliers() {
    return this.supplierService.getSuppliers();
  }

  @Get('featured')
  getFeaturedSuppliers() {
    return this.supplierService.getFeaturedSuppliers();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPPLIER')
  @Post('create')
  @UseInterceptors(
    FilesInterceptor('image', 6, {
      fileFilter: imageUploadFileFilter,
      limits: {
        fileSize: 1 * 1024 * 1024, // 1 MB in bytes
      },
    }),
  )
  async createSupplier(
    @GetUser() user: userInterface,
    @Body() dto: supplierDto,
    @Body() address: addressDto,
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    return this.supplierService.createSupplier(user, dto, address, files);
  }

  @Get(':slug')
  getSupplier(@Param('slug') slug: string) {
    return this.supplierService.getSupplier(slug);
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
    @Body() dto: updateSupplierDto,
    @Body() address: updateAddressDto,
    @GetUser() user: any,
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    return this.supplierService.patchSupplier(id, user, dto, address, files);
  }
}
