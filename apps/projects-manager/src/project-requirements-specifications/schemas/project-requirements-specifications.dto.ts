import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProjectRequirementsSpecificationsShema = new Schema({
    projectDefinitionId: String,
    functionalRequirements: [String],
    nonFunctionalRequirements: [String]
});