import { Module } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfileSchema } from './user-profile.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';

const schemas = [
  {name : 'UserProfile', schema: UserProfileSchema}
];

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature(schemas)
  ],
  providers: [UserProfileService],
  exports: [
    UserProfileService,
    MongooseModule.forFeature(schemas)
  ]
})
export class UserProfileModule {}
