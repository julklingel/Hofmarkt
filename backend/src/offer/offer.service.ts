import { Injectable } from '@nestjs/common';
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

  createOffer(dto: offerDto) {
    const price = Number(dto.price);
    const amount = Number(dto.amount);
    return this.prisma.offer.create({
      data: {
        title: dto.title,
        img: dto.img,
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
