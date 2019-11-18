import { IProductCategory } from "../../products-categories/interfaces/product-category.interface";

export class ProductResponseDto {
    readonly name: string;
    readonly productCategory: IProductCategory;
    readonly price: number;
    readonly description: string;
    readonly features: string[];
}