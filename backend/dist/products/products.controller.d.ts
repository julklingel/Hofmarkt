import { ProductsService } from "./products.service";
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProduct(id: any): string;
    getProducts(dto: any): string;
}
