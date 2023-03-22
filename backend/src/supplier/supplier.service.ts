import { Injectable } from '@nestjs/common';
import slugify from 'slugify';
import { PrismaService } from '../db-module/prisma.service';
import { supplierDto } from './dto';
import { addressDto } from 'src/address';

@Injectable()
export class SupplierService {
  constructor(private readonly prisma: PrismaService) {}

  async getSuppliers(): Promise<any> {
    const supplier = await this.prisma.supplier.findMany({
      select: {
        companyName: true,
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

  async createSupplier(
    id: string,
    role: string,
    dto: supplierDto,
    address: addressDto,
  ) {
    if (role !== 'SUPPLIER')
      throw new Error('You are not authorized to create a supplier account');

    const existingSupplier = await this.prisma.account.findFirst({
      where: {
        supplierId: id,
      },
    });

    if (existingSupplier) {
      throw new Error('The account already has a supplier');
    }

    const phoneNum = Number(dto.companyPhone);
    const featured = Boolean(dto.featured);
    const slug = this.generateSlug(dto.companyName);

    try {
      const newAddress = await this.prisma.accountAddress.create({
        data: {
          streetAddress: address.streetAddress,
          city: address.city,
          state: address.state,
          country: address.country,
          zip: address.zip,
        },
      });

      return this.prisma.supplier.create({
        data: {
          companyName: dto.companyName,
          companyLogo: dto.companyLogo,
          companyPhone: phoneNum,
          companyImage: dto.companyImage,
          companyBio: dto.companyBio,
          slug: slug,
          featured: featured,
          AccountAddress: {
            connect: {
              id: newAddress.id,
            },
          },
        },
        include: {
          AccountAddress: true,
        },
      });
    } catch (err) {
      //catch not working properly when trying to create a supplier with a name that already exists
      if (err.code === 'P2002' && err.meta.target.includes('slug')) {
        throw new Error('A supplier with that name already exists');
      }
      throw new Error('Failed to create supplier');
    }
  }

  private generateSlug(name: string): string {
    const baseSlug = slugify(name, {
      lower: true,
      strict: true,
      replacement: '-',
      trim: true,
    });
    return baseSlug;
  }
}
