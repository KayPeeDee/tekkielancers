import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { UserProfileService } from '@witekkie/auth/user-profile/user-profile.service';
import { CreateUserProfileDto } from '@witekkie/auth/user-profile/create-user-profile.dto';

@Controller('users-profile')
export class UsersProfileController {
    constructor(
        private readonly profileService: UserProfileService
    ){}

    @Post()
    async createUserProfile(@Res() res, @Body() createUserProfileDto: CreateUserProfileDto){
        const userProfile = this.profileService.createUserProfile(createUserProfileDto);
        return res.status(HttpStatus.OK).json({
            message: "User Profile successfully created",
            userProfile
        });

    }
}
