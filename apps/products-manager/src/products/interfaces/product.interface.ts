import { Document } from "mongoose";

export interface Product extends Document{
     name: string;
     productCategory: string;
     price: number;
     description: string;
     features: string[];
}
