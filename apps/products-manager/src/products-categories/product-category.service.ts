import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IProductCategory } from './interfaces/product-category.interface';
import { CreateProductCategoryDTO } from './dto/create-product-category.dto';

@Injectable()
export class ProductCategoryService {

    private categories: any[] = [];

    constructor(
        @InjectModel('ProductCategory') private readonly productCategoryModel: Model<IProductCategory>
    ) {}

    async getAllProductCategories(): Promise<IProductCategory[]> {
        return await this.productCategoryModel.find().exec();
    }

   
    async addProductCategory(createProductCategoryDTO: CreateProductCategoryDTO): Promise<IProductCategory>{
        const newCategory = await new this.productCategoryModel(createProductCategoryDTO);
        return newCategory.save();
    }

    async getProductCategory(id: string): Promise<IProductCategory>{
        const productCategory =  await this.productCategoryModel.findById(id).exec();
        return productCategory;
    }

   
    async updateProductCategory(id: string, createProductCategoryDTO: CreateProductCategoryDTO): Promise<IProductCategory>{
        // console.log(createProductCategoryDTO)
        const updatedCategory = await this.productCategoryModel.findByIdAndUpdate(id, createProductCategoryDTO, { new: true });
        return updatedCategory;
    }

    async deleteProductCategory(id: string): Promise<{}>{
        const deletedCategory = await this.productCategoryModel.findByIdAndRemove(id);
        return deletedCategory;
    }

   
}
