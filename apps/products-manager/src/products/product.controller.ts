import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {

    constructor(private readonly service: ProductService){}

    @Get()
    getProducts(){
        return this.service.getAllProducts();
    }

    @Post()
    createNewProduct(@Body() createProductDto: CreateProductDto){

        return this.service.createProduct(createProductDto);

    }
}
