import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users/users.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
        @Inject('UsersService') private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any>{
        const user = await this.usersService.findOneUser({username});
        if(user && (await this.passwordsAreEqual(user.password, pass))){
            const { password, ...result} = user;
            return result;
        }
        return null; 
    }

    async login(user: any){
        const payload = { username: user.username, sub: user.id};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    private async passwordsAreEqual(hashedPassword: string, plainPassword: string): Promise<boolean>{
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
}
