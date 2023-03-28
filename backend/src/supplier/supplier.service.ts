import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import slugify from 'slugify';
import { PrismaService } from '../db-module/prisma.service';
import { supplierDto } from './dto';
import { addressDto } from 'src/address';
import { enumImageType } from '@prisma/client';

@Injectable()
export class SupplierService {
  constructor(private readonly prisma: PrismaService) {}

  async getSuppliers(): Promise<any> {
    const suppliers = await this.prisma.supplier.findMany({
      select: {
        companyName: true,
        companyLogo: true,
        slug: true,
        supplierImage: {
          select: {
            imageUrl: true,
          },
        },
      },
    });

    return suppliers;
  }

  async getFeaturedSuppliers(): Promise<any> {
    const suppliers = await this.prisma.supplier.findMany({
      where: {
        featured: true,
      },
      select: {
        companyName: true,
        companyLogo: true,
        slug: true,
        supplierImage: {
          select: {
            imageUrl: true,
          },
        },
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

    const defaultImageUrls = ['default_image_url_1', 'default_image_url_2'];

    const hasSupplierImages =
      dto.supplierImage &&
      Array.isArray(dto.supplierImage) &&
      dto.supplierImage.length > 0;
    const imageUrls = hasSupplierImages ? dto.supplierImage : defaultImageUrls;

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

    const supplierImage = imageUrls.map((imageUrl) => {
      return {
        imageUrl: imageUrl,
        type: enumImageType.FACILITY,
      };
    });

    const newSupplierData = {
      companyName: dto.companyName,
      companyLogo: {
        create: {
          imageUrl: dto.companyLogo,
          type: enumImageType.PROFILE,
        },
      },
      companyPhone: dto.companyPhone,
      companyBio: dto.companyBio,
      slug: slug,
      featured: featured,
      AccountAddress: {
        create: newAddressData,
      },
      supplierImage: {
        create: supplierImage,
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
          Image: true,
        },
      });

      return 'Supplier created with name ' + slug;
    } catch (err) {
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
