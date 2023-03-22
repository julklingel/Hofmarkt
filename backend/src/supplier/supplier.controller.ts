import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { supplierDto } from './dto';
import { SupplierService } from './supplier.service';
import { addressDto } from 'src/address';
import { JwtAuthGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { Account } from '@prisma/client';

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

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@GetUser() account: Account) {
    // Return the account id from the JWT token
    console.log('account id: ', account.id);
    return account;
  }

  @Post('create')
  createSupplier(
    @GetUser('id') id: string,
    @Body() dto: supplierDto,
    @Body() address: addressDto,
  ) {
    return this.supplierService.createSupplier(id, dto, address);
  }
}
