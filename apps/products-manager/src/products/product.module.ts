import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductCategoryModule } from '../products-categories/product-category.module';

@Module({
    imports: [ProductCategoryModule],
    controllers: [ProductController],
    providers: [ProductService],
    exports: [ProductService]
})
export class ProductModule {}
