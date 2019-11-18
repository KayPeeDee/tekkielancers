export class CreateProductDto {
    readonly name: string;
    readonly productCategory: string;
    readonly price: number;
    readonly description: string;
    readonly features: string[];
}