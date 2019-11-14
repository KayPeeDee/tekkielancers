import { Module } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { ProductCategoryController } from './product-category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductCategorySchema } from './schemas/product-category.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: 'ProductCategory', schema: ProductCategorySchema }
      ])
  ],
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService],
  exports: [ProductCategoryService]
})
export class ProductCategoryModule{}