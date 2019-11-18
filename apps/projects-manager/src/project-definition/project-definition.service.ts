import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectDefinition } from './interfaces/project-definition.interface';
import { CreateProjectDefinitionDTO } from './dtos/create-project-definition.dto';

@Injectable()
export class ProjectDefinitionService {

    constructor(
        @InjectModel('ProjectDefinition') private readonly projectDefinitionModel: Model<ProjectDefinition>
    ){}

    async getProjectDefinitions(): Promise<ProjectDefinition[]>{
        return await this.projectDefinitionModel.find().exec();
    }

    async createProjectDefinition(projectDTO: CreateProjectDefinitionDTO): Promise<ProjectDefinition>{
        const newProject = await new this.projectDefinitionModel(projectDTO);
        return newProject.save();
    }

    async findProjectDefinitionById(id: string): Promise<ProjectDefinition>{
        const project = await this.projectDefinitionModel.findById(id).exec();
        return project;
    }

    async getProjectDefinition(options: object): Promise<ProjectDefinition>{
        return await this.projectDefinitionModel.findOne(options).exec();
    }

    async updateProjectDefinition(id: string, projectDTO: CreateProjectDefinitionDTO): Promise<ProjectDefinition>{
        const updatedProject = await this.projectDefinitionModel.findByIdAndUpdate(id, projectDTO, { new: true });
        return updatedProject;
    }

    async deleteProjectDefinition(id: string): Promise<{}>{
        const deletedProjectDefinition = await this.projectDefinitionModel.findByIdAndRemove(id);
        return deletedProjectDefinition;
    }
}
