import { Injectable } from '@nestjs/common';
import { enumImageType } from '@prisma/client';
import { PrismaService } from '../db-module/prisma.service';
import { offerDto } from './dto';

@Injectable()
export class OfferService {
  constructor(private readonly prisma: PrismaService) {}

  getOffers(): any {
    const offers = this.prisma.offer.findMany({
      include: {
        supplier: {
          select: {
            slug: true,
            companyName: true,
          },
        },
        images: {
          select: {
            imageUrl: true,
            type: true,
            
          }},
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
      include: {
        images: {
          select: {
            imageUrl: true,
            type: true,
          },
        },
      },
    });
  }

  createOffer(dto: offerDto) {
    const price = Number(dto.price);
    const amount = Number(dto.amount);

    const defaultImageUrls = ['default_image_url_1', 'default_image_url_2'];

    const hasSupplierImages =
      dto.images && Array.isArray(dto.images) && dto.images.length > 0;
    const imageUrls = hasSupplierImages ? dto.images : defaultImageUrls;

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
