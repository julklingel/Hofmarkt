import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import slugify from 'slugify';
import { PrismaService } from '../db-module/prisma.service';
import { supplierDto, updateSupplierDto } from './dto';
import { addressDto, updateAddressDto } from '../address';
import { enumImageType, enumRole } from '@prisma/client';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { userInterface } from '../interface';

const SUPPLIER_SELECT = {
  companyName: true,
  slug: true,
};

@Injectable()
export class SupplierService {
  constructor(
    private readonly prisma: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) {}

  async getSuppliers(): Promise<any> {
    const suppliers = await this.prisma.supplier.findMany({
      select: SUPPLIER_SELECT,
      //need to include images
    });

    return suppliers;
  }

  async getFeaturedSuppliers(): Promise<any> {
    return await this.prisma.supplier.findMany({
      where: {
        featured: true,
      },
      select: SUPPLIER_SELECT,
    });
  }

  async getSupplier(slug: string): Promise<any> {
    const supplier = await this.prisma.supplier.findUnique({
      where: {
        slug: slug,
      },
      include: {
        account: {
          select: {
            address: true,
          },
        },
        offer: {
          select: {
            id: true,
            title: true,
            unit: true,
            price: true,
            category: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    const images = await this.prisma.image.findMany({
      where: {
        ownerId: supplier.id,
        ownerType: enumRole.SUPPLIER,
      },
    });

    const companyLogo = images.find(
      (image) => image.type === enumImageType.PROFILE,
    );

    const supplierImages = images.filter(
      (image) => image.type === enumImageType.FACILITY,
    );

    return {
      ...supplier,
      companyName: supplier.companyName,
      companyBio: supplier.companyBio,
      companyPhone: supplier.companyPhone,
      slug: supplier.slug,
      companyLogo: companyLogo?.imageUrl,
      supplierImages: supplierImages?.map((image) => image.imageUrl),
    };
  }

  async createSupplier(
    user: userInterface,
    dto: supplierDto,
    address: addressDto,
    files: Express.Multer.File[] = [],
  ) {
    const { id } = user;

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

    const { companyLogo, companyLogoPublicId, imageUrls, imagePublicIds } =
      await this.uploadImagesToCloudinary(files);

    const newAddressData = {
      streetAddress: address.streetAddress,
      city: address.city,
      state: address.state,
      country: address.country,
      zip: address.zip,
      account: {
        connect: {
          id: id,
        },
      },
    };

    const newSupplierData: any = {
      companyName: dto.companyName,
      companyPhone: dto.companyPhone,
      companyBio: dto.companyBio,
      slug: slug,
      featured: featured,
      account: {
        connect: {
          id: id,
        },
      },
    };

    try {
      const createdSupplier = await this.prisma.$transaction(async (prisma) => {
        const supplier = await prisma.supplier.create({
          data: newSupplierData,
        });

        await prisma.accountAddress.create({
          data: newAddressData,
          include: {
            account: true,
          },
        });

        if (companyLogo) {
          await this.prisma.image.create({
            data: {
              imageUrl: companyLogo,
              type: enumImageType.PROFILE,
              ownerId: supplier.id,
              ownerType: enumRole.SUPPLIER,
            },
          });
        }

        if (imageUrls) {
          const supplierImages = imageUrls.map((imageUrl) => {
            return {
              imageUrl: imageUrl,
              type: enumImageType.FACILITY,
              ownerId: supplier.id,
              ownerType: enumRole.SUPPLIER,
            };
          });

          await prisma.image.createMany({
            data: supplierImages,
          });
        }

        return supplier;
      });

      return 'Supplier created with name ' + createdSupplier.slug;
    } catch (err) {
      if (companyLogoPublicId) {
        await this.cloudinaryService.deleteImage(companyLogoPublicId);
      }
      if (imagePublicIds.length > 0) {
        for (const publicId of imagePublicIds) {
          await this.cloudinaryService.deleteImage(publicId);
        }
      }
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

  async patchSupplier(
    id: string,
    user: userInterface,
    dto: updateSupplierDto,
    address: updateAddressDto,
    files: Express.Multer.File[] = [],
  ) {
    const { id: userId } = user;

    const supplier = await this.prisma.supplier.findUnique({
      where: { id: id },
      include: { account: { select: { id: true } } },
    });

    if (!supplier) {
      throw new HttpException('Supplier not found', HttpStatus.NOT_FOUND);
    }

    if (supplier.account.id !== userId) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    if (dto.companyName) {
      const slug = this.generateSlug(dto.companyName);
      dto.slug = slug;
    }

    if (address) {
      await this.prisma.account.update({
        where: { id: userId },
        data: { address: { update: address } },
      });
    }

    const { companyLogo, companyLogoPublicId, imageUrls, imagePublicIds } =
      await this.uploadImagesToCloudinary(files);

    const updatedSupplierData: any = { ...dto };

    try {
      const updatedSupplier = await this.prisma.supplier.update({
        where: { id },
        data: updatedSupplierData,
      });

      if (companyLogo) {
        const existingCompanyLogo = await this.prisma.image.findFirst({
          where: {
            ownerId: supplier.id,
            ownerType: enumRole.SUPPLIER,
            type: enumImageType.PROFILE,
          },
        });

        if (existingCompanyLogo) {
          await this.prisma.image.update({
            where: { id: existingCompanyLogo.id },
            data: {
              imageUrl: companyLogo,
              type: enumImageType.PROFILE,
            },
          });
        } else {
          await this.prisma.image.create({
            data: {
              imageUrl: companyLogo,
              type: enumImageType.PROFILE,
              ownerId: supplier.id,
              ownerType: enumRole.SUPPLIER,
            },
          });
        }
      }
      if (imageUrls.length > 0) {
        const supplierImages = imageUrls.map((imageUrl) => {
          return {
            imageUrl: imageUrl,
            type: enumImageType.FACILITY,
            ownerId: supplier.id,
            ownerType: enumRole.SUPPLIER,
          };
        });

        await this.prisma.image.createMany({
          data: supplierImages,
        });
      }

      return updatedSupplier;
    } catch (err) {
      if (companyLogoPublicId) {
        await this.cloudinaryService.deleteImage(companyLogoPublicId);
      }
      if (imagePublicIds.length > 0) {
        for (const publicId of imagePublicIds) {
          await this.cloudinaryService.deleteImage(publicId);
        }
      }
      throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
    }
  }

  async deleteSupplier(supplierId: string, user: userInterface) {
    const { id: userId } = user;

    const supplier = await this.prisma.supplier.findUnique({
      where: { id: supplierId },
      include: { account: { select: { id: true } } },
    });

    if (!supplier) {
      throw new Error('Supplier not found');
    }

    if (supplier.account.id !== userId) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    try {
      await this.prisma.$transaction([
        this.prisma.review.deleteMany({ where: { supplierId } }),
        this.prisma.order.deleteMany({ where: { offer: { supplierId } } }),
        this.prisma.category.updateMany({
          where: { supplierId },
          data: { supplierId: null },
        }),
        this.prisma.user.updateMany({
          where: { supplierId },
          data: { supplierId: null, accountId: null },
        }),
        this.prisma.accountAddress.deleteMany({
          where: { accountId: supplier.accountId },
        }),
        this.prisma.supplier.delete({ where: { id: supplierId } }),
        this.prisma.account.delete({ where: { id: supplier.accountId } }),
      ]);
    } catch (err) {
      throw new HttpException(
        'something went wrong while deleting the account',
        HttpStatus.BAD_REQUEST,
      );
    }
    return 'Supplier deleted';
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

  private async uploadImagesToCloudinary(
    files: Express.Multer.File[] = [],
  ): Promise<{
    companyLogo: string;
    companyLogoPublicId: string;
    imageUrls: string[];
    imagePublicIds: string[];
  }> {
    let companyLogo = '';
    let companyLogoPublicId = '';
    const imageUrls = [];
    const imagePublicIds = [];

    if (files.length > 0) {
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const image = await this.cloudinaryService.uploadImage(file);
        if (index === 0) {
          companyLogo = image.secure_url;
          companyLogoPublicId = image.public_id;

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
          imagePublicIds.push(image.public_id);
        }
      }
    }

    return { companyLogo, companyLogoPublicId, imageUrls, imagePublicIds };
  }
}
