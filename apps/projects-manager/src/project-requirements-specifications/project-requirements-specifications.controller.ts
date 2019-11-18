import { Controller, Get, Res, HttpStatus, Post, Body, Param, NotFoundException, Put, Delete } from '@nestjs/common';
import { ProjectRequirementsSpecificationsService } from './project-requirements-specifications.service';
import { CreateProjectRequirementsSpecificationsDTO } from './dtos/create-project-requirements-specifications.dto';

@Controller('project-requirements-specifications')
export class ProjectRequirementsSpecificationsController {

    constructor(private readonly service: ProjectRequirementsSpecificationsService){}

    @Get()
    async getProjectRequirements(@Res() res){
        const requirements = await this.service.getProjectRequirements();
        return res.status(HttpStatus.OK).json(requirements);
    }

    @Post()
    async createProjectRequirements(@Res() res, @Body() projectRequiremntsDTO: CreateProjectRequirementsSpecificationsDTO){
        const requirements = await this.service.createProjectRequirements(projectRequiremntsDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Project Requirements created successfully',
            requirements
        });

    }

    @Get(':id')
    async getProjectRequiremntsById(@Res() res, @Param('id') id: string){
        const requirements = await this.service.getProjectRequirementsById(id);
        if(!requirements) throw new NotFoundException('Requirements Not Found');
        return res.status(HttpStatus.OK).json(requirements);
    }


    @Put(':id')
    async updateProjectRequirements(@Res() res, @Param('id') id: string, @Body() projectRequiremntsDTO: CreateProjectRequirementsSpecificationsDTO){
        const requirements = await this.service.updateProjectRequirements(id, projectRequiremntsDTO);
        if(!requirements) throw new NotFoundException('Requirements Not Found');
        return res.status(HttpStatus.OK).json({
            message: 'Requirements updated successfully',
            requirements
        });

    }

    @Delete(':id')
    async deleteProjectRequirements(@Res() res, @Param('id') id: string){
        const requirements = await this.service.deleteProjectRequirements(id);
        if(!requirements) throw new NotFoundException('Requirements not found');

        return res.status(HttpStatus.OK).json({
            message: 'Requirements has been deleted successfully'
        });
    }
}
