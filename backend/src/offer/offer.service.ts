import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { enumImageType } from '@prisma/client';
import { PrismaService } from '../db-module/prisma.service';
import { offerDto } from './dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class OfferService {
  constructor(
    private readonly prisma: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) {}

  getOffers(): any {
    const offers = this.prisma.offer.findMany({
      include: {
        supplier: {
          select: {
            slug: true,
            companyName: true,
          },
        },
      },
    });

    return offers;
  }

  getOffer(id): any {
    return this.prisma.offer.findUnique({
      where: {
        id: id,
      },
    });
  }

  getOffersBySupplier(id): any {
    return this.prisma.offer.findMany({
      where: {
        supplierId: id,
      },
    });
  }

  async createOffer(dto: offerDto, user: any, files: Express.Multer.File[]) {
    const { id, role } = user;
    if (role !== 'SUPPLIER')
      throw new HttpException(
        'You are not authorized to create an offer',
        HttpStatus.BAD_REQUEST,
      );

    const price = Number(dto.price);
    const amount = Number(dto.amount);

    const imageUrls = [];

    if (files.length > 0) {
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const image = await this.cloudinaryService.uploadImage(file);

        imageUrls.push(image.secure_url);

        if (!imageUrls) {
          throw new HttpException(
            'An error occurred while uploading the images',
            HttpStatus.BAD_REQUEST,
          );
        }
      }
    }

    const offerImage = imageUrls.map((imageUrl) => {
      return {
        imageUrl: imageUrl,
        type: enumImageType.OFFER,
      };
    });
    return this.prisma.offer.create({
      data: {
        title: dto.title,
        images: { create: offerImage },
        price,
        unit: dto.unit,
        amount,
        supplier: {
          connect: {
            id: dto.supplierId,
          },
        },
      },
    });
  }
}
