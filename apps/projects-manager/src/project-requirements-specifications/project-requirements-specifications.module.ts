import { Module } from '@nestjs/common';
import { ProjectRequirementsSpecificationsController } from './project-requirements-specifications.controller';
import { ProjectRequirementsSpecificationsService } from './project-requirements-specifications.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectRequirementsSpecificationsShema } from './schemas/project-requirements-specifications.dto';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'ProjectRequirementsSpecification', schema: ProjectRequirementsSpecificationsShema}
        ])
    ],
    controllers: [ProjectRequirementsSpecificationsController],
    providers: [ProjectRequirementsSpecificationsService]
})
export class ProjectRequirementsSpecificationsModule {}
