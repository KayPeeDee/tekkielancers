import { Module } from '@nestjs/common';
import { ProjectDefinitionController } from './project-definition.controller';
import { ProjectDefinitionService } from './project-definition.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectDefinitionSchema } from './schemas/project-definition.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ProjectDefinition', schema: ProjectDefinitionSchema }
    ])
  ],
  controllers: [ProjectDefinitionController],
  providers: [ProjectDefinitionService]
})
export class ProjectDefinitionModule {}
