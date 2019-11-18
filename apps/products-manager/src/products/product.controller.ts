import { Controller, Get, Post, Body, Res, HttpStatus, Param, NotFoundException, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { identifier } from '@babel/types';

@Controller('products')
export class ProductController {

    constructor(private readonly service: ProductService){}

    @Get()
    async getProducts(@Res() res, ){
        const products = await this.service.getAllProducts();
        return res.status(HttpStatus.OK).json(products);
    }

    @Post()
    async createNewProduct(@Res() res, @Body() createProductDto: CreateProductDto){
        const product = await this.service.createProduct(createProductDto);
        return res.status(HttpStatus.OK).json({
            message: 'Product has been successfully created',
            product
        });

    }

    @Get(':id')
    async getProductById(@Res() res, @Param('id') id: string){
        const product = await this.service.findProductById(id);
        if(!product) throw new NotFoundException("Product not found");
        return res.status(HttpStatus.OK).json(product);
    }

    @Put(':id')
    async updateProduct(@Res() res, @Param('id') id, @Body() updatedProduct: CreateProductDto){
        const product = await this.service.updateProduct(id, updatedProduct);
        if(!product) throw new NotFoundException("Product Not Found");
        return res.status(HttpStatus.OK).json({
            message: 'Product has been updated successfully',
            product
        });
    }

    @Delete(':id')
    async deleteProduct(@Res() res, @Param('id') id: string){
        const product = await this.service.deleteProduct(id);
        if(!product) throw new NotFoundException('Product Not Found');

        return res.status(HttpStatus.OK).json({
            message: 'Product has been deleted successfully'
        });
    }
}
