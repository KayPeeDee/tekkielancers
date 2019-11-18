import * as mongoose from "mongoose";


const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    name: String,
    productCategory: String,
    price: Number,
    description: String,
    features: [String]
});