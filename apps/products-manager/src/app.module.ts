import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductCategoryModule } from './products-categories/product-category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './products/product.module';
import { AuthModule } from '@witekkie/auth';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/tekkielancers'),
    ProductCategoryModule,
    ProductModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
