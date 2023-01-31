import { Injectable, Req } from '@nestjs/common';
import { PrismaService } from 'src/db-module/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  getAllProducts() {
    const products = this.prisma.product.findMany();
    return products;
  }

  getOneProduct(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id: id,
      },
    });
  }
}
