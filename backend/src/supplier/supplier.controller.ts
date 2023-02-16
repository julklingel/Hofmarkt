import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { supplierDto } from './dto';
import { SupplierService } from './supplier.service';

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

  @Get(':id')
  getSupplier(@Param('id') id: string) {
    return this.supplierService.getSupplier(id);
  }

  @Post()
  createSupplier(@Body() dto: supplierDto) {
    
    return this.supplierService.createSupplier(dto);
  }

}
