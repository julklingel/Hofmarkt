import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db-module/prisma.service';
import { offerDto } from './dto';



@Injectable()
export class OfferService {
  constructor(private readonly prisma: PrismaService) {}

<<<<<<< HEAD

  getAllOffers() {
    const offers = this.prisma.offer.findMany();
    return offers;
  }


  getOneOffer(id): any {
    const offer = this.prisma.offer.findUnique({
=======
  getOffers(): any {
    try {
      console.log('getOffers in services');
      return this.prisma.offer.findMany();
    } catch (error) {
      console.log(error);
    }
  }

  getOffer(id): any {
    return this.prisma.offer.findUnique({
>>>>>>> 02e68d1 (b: replace product by offer)
      where: {
        id: id,
      },
    });
  }

<<<<<<< HEAD
createOffer(dto: offerDto) {

  const createOffer = this.prisma.offer.create({ data: dto })
  return createOffer
}

=======
  createOffer(dto: offerDto) {
    const price = Number(dto.price);
    const amount = Number(dto.amount);
    return this.prisma.offer.create({
      data: {
        title: dto.title,
        category: dto.category,
        img: dto.img,
        supplierId: dto.supplierId,
        price: price,
        unit: dto.unit,
        amount: amount,
      },
    });
  }
>>>>>>> 02e68d1 (b: replace product by offer)
}
