import { Controller, Get, Param} from '@nestjs/common';
import { ProductService } from './products.service';



@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}
 
  // Display User Information
  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getOneProduct(@Param('id') id: string) {
    return this.productService.getOneProduct(id);
  }
}


