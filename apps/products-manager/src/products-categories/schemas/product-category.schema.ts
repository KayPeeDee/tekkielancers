import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductCategorySchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
});