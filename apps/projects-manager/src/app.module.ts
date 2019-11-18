import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectDefinitionModule } from './project-definition/project-definition.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectRequirementsSpecificationsModule } from './project-requirements-specifications/project-requirements-specifications.module';

@Module({
  imports: [
    ProjectDefinitionModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/tekkielancers-projects-db'
    ),
    ProjectRequirementsSpecificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
