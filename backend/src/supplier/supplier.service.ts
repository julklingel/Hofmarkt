import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db-module/prisma.service';
import { supplierDto } from './dto';

@Injectable()
export class SupplierService {
  constructor(private readonly prisma: PrismaService) {}

  getSuppliers(): any {
    return this.prisma.supplier.findMany();
  }

  getSupplier(id): any {
    return this.prisma.supplier.findUnique({
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
        companyEmail: dto.companyEmail,
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
