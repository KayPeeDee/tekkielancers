import { Controller, Get, Res, HttpStatus, Post, Param, NotFoundException, Put, Body, Delete } from '@nestjs/common';
import { ProjectDefinitionService } from './project-definition.service';
import { CreateProjectDefinitionDTO } from './dtos/create-project-definition.dto';

@Controller('projects')
export class ProjectDefinitionController {

    constructor(private readonly service: ProjectDefinitionService){}

    @Get()
    async getProjectDefinitions(@Res() res){
        const projects = await this.service.getProjectDefinitions();
        return res.status(HttpStatus.OK).json(projects);
    }

    @Post()
    async createProjectDefinition(@Res() res, @Body() createProjectDefinitionDTO: CreateProjectDefinitionDTO){
        const project = await this.service.createProjectDefinition(createProjectDefinitionDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Project defined successfully',
            project
        });
    }

    @Get(':id')
    async getProjectDefinitionById(@Res() res, @Param('id') id: string){
        const project = await this.service.findProjectDefinitionById(id);
        if(!project) throw new NotFoundException('Project Not Found');
        return res.status(HttpStatus.OK).json(project);
    }

    @Put(':id')
    async updateProjectDefinition(@Res() res, @Param('id') id: string, @Body() projectDTO: CreateProjectDefinitionDTO){
        const project = await this.service.updateProjectDefinition(id, projectDTO);
        if(!project) throw new NotFoundException('Project not found');
        return res.status(HttpStatus.OK).json({
            message: 'Project Definition updated successfully',
            project
        });
    }

    @Delete(':id')
    async deleteProjectDefinition(@Res() res, @Param('id') id: string){
        const project = await this.service.deleteProjectDefinition(id);
        if(!project) throw new NotFoundException('Project not found');

        return res.status(HttpStatus.OK).json({
            message: 'Project has been deleted successfully'
        });
    }
}
