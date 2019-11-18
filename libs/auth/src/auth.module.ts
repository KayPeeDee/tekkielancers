import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserProfileModule } from './user-profile/user-profile.module';

@Module({
  imports: [
    UsersModule,
    UserProfileModule,
    MongooseModule.forRoot('mongodb://localhost:27017/users-db'),
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d'}
    }),
    UserProfileModule
  ],
  providers: [AuthService,  LocalStrategy, JwtStrategy],
  exports: [
    AuthService,
    LocalStrategy, 
    JwtStrategy,
    PassportModule,
    UsersModule,
    UserProfileModule
  ],
})
export class AuthModule {} 
