import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductCategoryModule } from '../products-categories/product-category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';

@Module({
    imports: [
        ProductCategoryModule,
        MongooseModule.forFeature(
            [
                {name: 'Product', schema: ProductSchema}
            ]
        )
    ],
    controllers: [ProductController],
    providers: [ProductService],
    exports: [ProductService]
})
export class ProductModule {}
