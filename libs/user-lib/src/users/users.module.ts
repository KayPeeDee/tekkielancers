import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UserServiceImpl } from './user-service-impl.service';

const schemas = [
    { name: 'User', schema: UserSchema }
];

@Module({
    imports: [
        MongooseModule.forFeature(schemas)
    ],
    providers: [UserServiceImpl],
    exports: [
        UserServiceImpl,
        MongooseModule.forFeature(schemas)
    ],
})
export class UsersModule {}
