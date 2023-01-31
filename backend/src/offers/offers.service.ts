import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db-module/prisma.service';
import { offerDto } from './dto';



@Injectable()
export class OffersService {
  constructor(private readonly prisma: PrismaService) {}


  getAllOffers() {
    const offers = this.prisma.offer.findMany();
    return offers;
  }


  getOneOffer(id): any {
    const offer = this.prisma.offer.findUnique({
      where: {
        id: id,
      },
    });
    return {
      offer,
    };
  }

createOffer(dto: offerDto) {

  const createOffer = this.prisma.offer.create({ data: dto })
  return createOffer
}

}
