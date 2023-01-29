import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db-module/prisma.service';
import { offerDto } from './dto';

@Injectable()
export class OffersService {
  constructor(private readonly prisma: PrismaService) {}
  getOffer(dto): any {
    const offer = this.prisma.offer.findUnique({
      where: {
        id: dto.id,
      },
    });
    return {
      offer,
    };
  }

  createOffer(dto: offerDto) {
    const offer = this.prisma.offer.create({
      data: {
        productId: dto.productId,
        supplierId: dto.supplierId,
        price: dto.price,
        unit: dto.unit,
      },
    });
    return {
      offer,
    };
  }
}
