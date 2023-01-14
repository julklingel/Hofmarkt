import { Product } from "./product.model";
import { ProductsService } from "./products.service";
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    retrieveProducts(): Product;
}
