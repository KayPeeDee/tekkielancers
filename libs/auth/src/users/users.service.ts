
import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { debug } from 'console';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

    private saltRounds = 10;

    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}


    async findAllUsers(): Promise<IUser[]>{
        return await this.userModel.find().exec(); 
    }

    async findUserById(id): Promise<IUser | null>{
        return await this.userModel.findById(id).exec();
    }
    

    async findOneUser(options: object): Promise<IUser | null>{
        return await this.userModel.findOne(options).exec();
    }

    async createUser(createUserDto: CreateUserDto): Promise<IUser>{       
        createUserDto['password'] = await this.getHash(createUserDto['password']);
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async updateUser(id, newValue: IUser): Promise<IUser | null>{
        return await this.userModel.findByIdAndUpdate(id, newValue, {new: true}).exec();
    }

    async deleteUser(id): Promise<string>{
        try {
            await this.userModel.findByIdAndRemove(id).exec();
            return 'The user has been deleted';
        }
        catch (err) {
            debug(err);
            return 'The user could not be deleted';
        }
    }

    async getHash(password: string|undefined): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }


}
