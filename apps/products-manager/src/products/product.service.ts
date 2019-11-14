import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {

    private readonly products: Product[]=[];

    async getAllProducts(): Promise<Product[]>{
        return await [...this.products];
    }

    createProduct(product: Product){
        console.log(product);
        this.products.push(product)
    }

   
}
