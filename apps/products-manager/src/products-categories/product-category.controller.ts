import { Controller, Get, Post, Req, Param, Patch, Delete, Res, HttpStatus, Body, NotFoundException, Put, UseGuards } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { Request, Response } from 'express';
import { CreateProductCategoryDTO } from './dto/create-product-category.dto';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard, Roles, User } from '@witekkie/auth';

@Controller('product-categories')
// @UseGuards(RoleGuard)
export class ProductCategoryController {
    constructor(private readonly service: ProductCategoryService){}


    @Get()
    @UseGuards(AuthGuard('jwt'))
    // @Roles('admin')
    async getProductCategories(@Res() res, @User() user: any, @Req() req){
        const productCategories = await this.service.getAllProductCategories();
        return res.status(HttpStatus.OK).json(productCategories);
    }


    @UseGuards(AuthGuard('jwt'))
    @Post()
    async addNewProductCategory(@Res() res, @Body() createProductCategoryDTO: CreateProductCategoryDTO){
        
        const productCategory = await this.service.addProductCategory(createProductCategoryDTO);
        console.log(res);
        return res.status(HttpStatus.OK).json({
            message: "Category has been submitted successfully!",
            productCategory
        })
        
    }

    @Get(':id')
    async getProductCategory(@Res() res, @Param('id') id){
        
        const productCategory = await this.service.getProductCategory(id);
        if (!productCategory) throw new NotFoundException('Service Category not found');
        return res.status(HttpStatus.OK).json(productCategory);

    }

   
    @Put(':id')
    async updateProductCategory(@Res() res, @Param('id') id, @Body() createProductCategoryDTO: CreateProductCategoryDTO){
        console.log(createProductCategoryDTO)
        const productCategory = await this.service.updateProductCategory(id, createProductCategoryDTO);
        if (!productCategory) throw new NotFoundException('Service Category not found');

        return res.status(HttpStatus.OK).json({
            message: 'Service Category has been successfully updated',
            productCategory
        });
    }

    @Delete(':id')
    async removeProduct(@Res() res, @Param('id') id: string){
        const productCategory = await this.service.deleteProductCategory(id);
        if (!productCategory) throw new NotFoundException('Service Category not found');

        return res.status(HttpStatus.OK).json({
            message: 'Product Category has been deleted',
            productCategory
        });
    }

}
