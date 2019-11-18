import { Document } from "mongoose";

export interface ProjectDefinition extends Document{
    projectOwner: string;
    projectType: string;
    title: string;
    abstract: string;
    problemStatement: string;
    aims: string[];
    objectives: string[];
    projectRelevance: string;
    businessValue: string;
    assumptions: string[];
    delimitations: string[];
}
