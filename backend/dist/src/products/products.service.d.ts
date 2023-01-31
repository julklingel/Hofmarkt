import { PrismaService } from 'src/db-module/prisma.service';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllProducts(): import("@prisma/client").PrismaPromise<import("@prisma/client").Product[]>;
    getOneProduct(id: string): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
}
