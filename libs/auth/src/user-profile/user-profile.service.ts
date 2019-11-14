import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserProfile } from './user-profile.interface';
import { CreateUserProfileDto } from './create-user-profile.dto';

@Injectable()
export class UserProfileService {
    constructor(@InjectModel('UserProfile') private readonly userProfileModel: Model<UserProfile>) {}

    async createUserProfile(createUserProfileDTO: CreateUserProfileDto): Promise<UserProfile | null>{
        const createdProfile = new this.userProfileModel(createUserProfileDTO);
        return await createdProfile.save();
    }

    async findUserProfile(options: object): Promise<UserProfile>{
        return await this.userProfileModel.findOne(options).exec();
    }

}
