import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import slugify from 'slugify';
import { PrismaService } from '../db-module/prisma.service';
import { supplierDto } from './dto';
import { addressDto } from 'src/address';
import { enumImageType } from '@prisma/client';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class SupplierService {
  constructor(
    private readonly prisma: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) {}

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

  async getSupplier(slug): Promise<any> {
    const supplier = await this.prisma.supplier.findUnique({
      where: {
        slug: slug,
      },
      select: {
        companyName: true,
        companyLogo: {
          select: {
            imageUrl: true,
          },
        },
        slug: true,
        companyBio: true,
        supplierImage: {
          select: {
            imageUrl: true,
          },
        },
        AccountAddress: {
          select: {
            streetAddress: true,
            city: true,
            state: true,
            country: true,
            zip: true,
          },
        },
        offer: {
          select: {
            id: true,
            title: true,
            unit: true,
            price: true,
            images: true,
            category: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    return supplier;
  }

  async createSupplier(
    user: any,
    dto: supplierDto,
    address: addressDto,
    files: Express.Multer.File[] = [],
  ) {
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

    let companyLogo = '';
    const imageUrls = [];

    if (files.length > 0) {
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const image = await this.cloudinaryService.uploadImage(file);

        if (index === 0) {
          companyLogo = image.secure_url;

          if (!companyLogo) {
            throw new HttpException(
              'Something went wrong when uploading the company logo',
              HttpStatus.BAD_REQUEST,
            );
          }
        } else {
          if (!image.secure_url) {
            throw new HttpException(
              'Something went wrong when uploading the supplier images',
              HttpStatus.BAD_REQUEST,
            );
          }

          imageUrls.push(image.secure_url);
        }
      }
    }

    const newAddressData = {
      streetAddress: address.streetAddress,
      city: address.city,
      state: address.state,
      country: address.country,
      zip: address.zip,
    };

    const newSupplierData: any = {
      companyName: dto.companyName,
      companyPhone: dto.companyPhone,
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

    if (companyLogo) {
      newSupplierData.companyLogo = {
        create: {
          imageUrl: companyLogo,
          type: enumImageType.PROFILE,
        },
      };
    }

    if (imageUrls) {
      const supplierImage = imageUrls.map((imageUrl) => {
        return {
          imageUrl: imageUrl,
          type: enumImageType.FACILITY,
        };
      });
      newSupplierData.supplierImage = {
        create: supplierImage,
      };
    }

    try {
      await this.prisma.supplier.create({
        data: newSupplierData,
        include: {
          AccountAddress: true,
          Image: true,
          companyLogo: true,
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
