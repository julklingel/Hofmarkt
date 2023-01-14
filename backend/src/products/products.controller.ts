import { Controller, Get } from "@nestjs/common";
import { Product } from "./product.model";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor (private productsService: ProductsService) {}
    @Get()
    retrieveProducts(): Product {
        return this.productsService.retrieveProducts();
    }
}
