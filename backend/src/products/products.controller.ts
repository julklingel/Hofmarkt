import { Controller, Get, Param } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor (private productsService: ProductsService) {}

    @Get(':id')
    getProduct(@Param(':id') id): string {
        return this.productsService.getProduct(id);
    }

    @Get()
    getProducts(@Param() dto): string {
        return this.productsService.getProduct(dto);
    }
}
 