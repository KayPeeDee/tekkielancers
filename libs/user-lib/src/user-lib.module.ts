import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UserSchema } from './users/user.schema';
import { UserServiceImpl } from './users/user-service-impl.service';

const schemas = [
  { name: 'User', schema: UserSchema }
];

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/users-db'),
    // UsersModule
    MongooseModule.forFeature(schemas)
  ],
  providers: [UserServiceImpl],
  exports: [
    // UsersModule
    MongooseModule.forFeature(schemas),
    UserServiceImpl
  ],
})
export class UserLibModule {}
