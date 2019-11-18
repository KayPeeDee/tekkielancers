export class CreateProjectDefinitionDTO {
    readonly projectOwner: string;
    readonly projectType: string;
    readonly title: string;
    readonly abstract: string;
    readonly problemStatement: string;
    readonly aims: string[];
    readonly objectives: string[];
    readonly projectRelevance: string;
    readonly businessValue: string;
    readonly assumptions: string[];
    readonly delimitations: string[];
}
