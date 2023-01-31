import { ProductService } from './products.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getAllProducts(): import("@prisma/client").PrismaPromise<import("@prisma/client").Product[]>;
    getOneProduct(id: string): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
}
