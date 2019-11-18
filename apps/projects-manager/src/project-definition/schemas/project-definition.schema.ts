import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProjectDefinitionSchema = new Schema({
    projectOwner: String,
    projectType: String,
    title: String,
    abstract: String,
    problemStatement: String,
    aims: [String],
    objectives: [String],
    projectRelevance: String,
    businessValue: String,
    assumptions: [String],
    delimitations: [String]
});