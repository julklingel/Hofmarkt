import { PrismaService } from "src/db-module/prisma.service";
export declare class ProductsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getProduct(id: any): any;
}
