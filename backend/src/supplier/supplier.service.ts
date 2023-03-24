import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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

  async createSupplier(user: any, dto: supplierDto, address: addressDto) {
    const { id, role } = user;
    if (role !== 'SUPPLIER')
      throw new HttpException(
        'You are not authorized to create a supplier account',
        HttpStatus.BAD_REQUEST,
      );

    const featured = Boolean(dto.featured);
    const slug = this.generateSlug(dto.companyName);

    const existingSupplier = await this.prisma.account.findFirst({
      where: {
        id: id,
      },
      include: {
        supplier: true,
      },
    });

    if (existingSupplier.supplier) {
      throw new HttpException(
        'The account already has a supplier',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newAddressData = {
      streetAddress: address.streetAddress,
      city: address.city,
      state: address.state,
      country: address.country,
      zip: address.zip,
    };

    const newSupplierData = {
      companyName: dto.companyName,
      companyLogo: dto.companyLogo,
      companyPhone: dto.companyPhone,
      companyImage: dto.companyImage,
      companyBio: dto.companyBio,
      slug: slug,
      featured: featured,
      AccountAddress: {
        create: newAddressData,
      },
      account: {
        connect: {
          id: id,
        },
      },
    };

    try {
      await this.prisma.supplier.create({
        data: newSupplierData,
        include: {
          AccountAddress: true,
        },
      });

      return 'Supplier created with name ' + slug;
    } catch (err) {
      console.error('Error while creating supplier:', err);
      if (err.code === 'P2002' && err.meta.target.includes('slug')) {
        throw new HttpException(
          'A supplier with that name already exists',
          HttpStatus.BAD_REQUEST,
        );
      } else if (
        err.code === 'P2002' &&
        err.meta.target.includes('supplierId')
      ) {
        throw new HttpException(
          'An account can only have one supplier',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
      }
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
