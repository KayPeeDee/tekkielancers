import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectRequirementsSpecifications } from './interfaces/project-requirements-specifications.interface';
import { CreateProjectRequirementsSpecificationsDTO } from './dtos/create-project-requirements-specifications.dto';

@Injectable()
export class ProjectRequirementsSpecificationsService {

    constructor(
        @InjectModel('ProjectRequirementsSpecification') private readonly projectRequirementsModel: Model<ProjectRequirementsSpecifications>
    ){}

    async getProjectRequirements(): Promise<ProjectRequirementsSpecifications[]>{
        return await this.projectRequirementsModel.find().exec();
    }

    async createProjectRequirements(projectRequirementsDTO: CreateProjectRequirementsSpecificationsDTO): Promise<ProjectRequirementsSpecifications>{
        const newProjectRequirements = await new this.projectRequirementsModel(projectRequirementsDTO);
        return newProjectRequirements.save();
    }

    async getProjectRequirementsById(id: string): Promise<ProjectRequirementsSpecifications>{
        const projectRequirements = await this.projectRequirementsModel.findById(id).exec();
        return projectRequirements;
    }

    async getOneProjectRequiremnts(options: object): Promise<ProjectRequirementsSpecifications>{
        return await this.projectRequirementsModel.findOne(options).exec();
    }

    async updateProjectRequirements(id: string, projectRequirementsDTO: CreateProjectRequirementsSpecificationsDTO): Promise<ProjectRequirementsSpecifications>{
        const updatedProjectRequirements = await this.projectRequirementsModel.findByIdAndUpdate(id, projectRequirementsDTO, { new: true});
        return updatedProjectRequirements;
    }

    async deleteProjectRequirements(id: string):  Promise<ProjectRequirementsSpecifications>{
        const deletedProjectRequirements = await this.projectRequirementsModel.findByIdAndRemove(id);
        return deletedProjectRequirements;
    }
}
