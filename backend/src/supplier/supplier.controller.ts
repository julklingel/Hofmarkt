import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { supplierDto } from './dto';
import { SupplierService } from './supplier.service';
import { addressDto } from 'src/address';
import { JwtAuthGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';

@UseGuards(JwtAuthGuard)
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

  @Get('me')
  getMySupplier(@GetUser() user: any) {
    console.log(user);
    return user;
  }

  @Post('create')
  createSupplier(
    @GetUser('id') { id },
    @GetUser('role') { role },
    @Body() dto: supplierDto,
    @Body() address: addressDto,
  ) {
    return this.supplierService.createSupplier(id, role, dto, address);
  }

  @Get(':id')
  getSupplier(@Param('id') id: string) {
    return this.supplierService.getSupplier(id);
  }
}
