import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
  UploadedFile,
} from '@nestjs/common';
import { supplierDto } from './dto';
import { SupplierService } from './supplier.service';
import { addressDto } from '../address';
import { JwtAuthGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { imageUploadPipe } from '../imageUpload';

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

  //can be deleted
  @Get('me')
  getMySupplier(@GetUser() user: any) {
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  @UseInterceptors(
    FilesInterceptor('image', 6, {
      fileFilter: (_, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png'];
        if (!allowedTypes.includes(file.mimetype)) {
          return cb(new Error('Only JPG and PNG files are allowed'), false);
        }
        cb(null, true);
      },
    }),
  )
  async createSupplier(
    @GetUser() user: any,
    @Body() dto: supplierDto,
    @Body() address: addressDto,
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    return this.supplierService.createSupplier(user, dto, address, files);
  }

  @Get(':id')
  getSupplier(@Param('id') id: string) {
    return this.supplierService.getSupplier(id);
  }
}
