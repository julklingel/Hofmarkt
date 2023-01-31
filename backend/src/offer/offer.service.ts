import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db-module/prisma.service';
import { offerDto } from './dto';

@Injectable()
export class OfferService {
  constructor(private readonly prisma: PrismaService) {}

  getOffers(): any {
    return this.prisma.offer.findMany();
  }

  getOffer(id): any {
    return this.prisma.offer.findUnique({
      where: {
        id: id,
      },
    });
  }

  createOffer(dto: offerDto) {
    const price = Number(dto.price);
    const amount = Number(dto.amount);
    return this.prisma.offer.create({
      data: {
        title: dto.title,
        category: dto.category,
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
