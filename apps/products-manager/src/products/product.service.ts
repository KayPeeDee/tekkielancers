import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    private readonly products: Product[]=[];

    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>
    ){}

    async getAllProducts(): Promise<Product[]>{
        return await this.productModel.find().exec()
    }

    async createProduct(product: CreateProductDto): Promise<Product>{
        console.log(product);
        const newProduct = await new this.productModel(product);
        return newProduct.save();
    }

    async findProductById(id: string): Promise<Product>{
        const product = await this.productModel.findById(id).exec();
        return product;
    }

    async findProduct(options: object): Promise<Product>{
        return await this.productModel.findOne(options).exec();
    }

    async updateProduct(id: string, product: CreateProductDto): Promise<Product>{
        const updatedProduct = await this.productModel.findByIdAndUpdate(id, product, { new: true });
        return updatedProduct;
    }

    async deleteProduct(id: string): Promise<{}>{
        const deletedProduct = await this.productModel.findByIdAndRemove(id);
        return deletedProduct;
    }

   
}
