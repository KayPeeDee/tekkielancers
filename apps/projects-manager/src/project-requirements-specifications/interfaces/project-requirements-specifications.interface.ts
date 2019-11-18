import { Document } from "mongoose";

export interface ProjectRequirementsSpecifications extends Document{
    projectDefinitionId: string;
    functionalRequirements: string[];
    nonFunctionalRequirements: string[];
}
