import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserLibModule } from '@witekkie/user-lib';
import { UserDetailsController } from './user-details/user-details.controller';
import { AuthModule } from 'libs/auth/src';
import { UsersProfileController } from './users-profile/users-profile.controller';

@Module({
  imports: [UserLibModule, AuthModule],
  controllers: [AppController, UserDetailsController, UsersProfileController],
  providers: [AppService],
})
export class AppModule {}
