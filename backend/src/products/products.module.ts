import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';
import { ProductService } from './products.service';


@Module({
    imports: [ProductModule],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}
