import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db-module/prisma.service';
import { supplierDto } from './dto';

@Injectable()
export class SupplierService {
  constructor(private readonly prisma: PrismaService) {}

  async getSuppliers(): Promise<any> {
    const supplier = await this.prisma.supplier.findMany({
      select: {
        companyName: true,
        companyAddress: true,
        companyImage: true,
        slug: true,
      },
    });
    return supplier;
  }

  async getFeaturedSuppliers(): Promise<any> {
    const suppliers = await this.prisma.supplier.findMany({
      where: {
        featured: true,
      },
      select: {
        companyName: true,
        companyAddress: true,
        companyImage: true,
        slug: true,
      },
    });
    
    
    return suppliers;
  }

  async getSupplier(id): Promise<any> {
    return await this.prisma.supplier.findUnique({
      where: {
        id: id,
      },
    });
  }

  createSupplier(dto: supplierDto) {
    const phoneNum = Number(dto.companyPhone);
    const featured = Boolean(dto.featured);
    return this.prisma.supplier.create({
      data: {
        companyName: dto.companyName,
        companyLogo: dto.companyLogo,
        companyPhone: phoneNum,
        companyAddress: dto.companyAddress,
        companyImage: dto.companyImage,
        companyBio: dto.companyBio,
        slug: dto.slug,
        featured: featured,
      },
    });
  }
}
