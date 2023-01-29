import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/db-module/prisma.service";



@Injectable()
export class ProductsService {
    constructor(
        private readonly prismaService: PrismaService,
    ) {}
    getProduct(id): any {
        const product = this.prismaService.product.findUnique({
            where: {
                id: id,
            },
        });
    return {
        product,
    }
}
 
}

