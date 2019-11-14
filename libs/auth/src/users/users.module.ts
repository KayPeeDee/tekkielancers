import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserSchema } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';

const schemas = [
    { name: 'User', schema: UserSchema }
];


@Module({
    imports: [
        MongooseModule.forFeature(schemas)
    ],
    providers: [UsersService],
    exports: [
        UsersService,
        MongooseModule.forFeature(schemas)
    ],
})
export class UsersModule {}
