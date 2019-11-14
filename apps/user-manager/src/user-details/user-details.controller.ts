import { Controller, Get, Res, Post, HttpStatus, Body, Param, NotFoundException, UseGuards, Req } from '@nestjs/common';
import { AppService } from '../app.service';
import { UserServiceImpl } from '@witekkie/user-lib';
import { CreateUserDto } from '@witekkie/user-lib/users/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'libs/auth/src/users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'libs/auth/src';

@Controller('user-details')
export class UserDetailsController {

    constructor(
        private readonly appService: AppService,
        private readonly userService: UsersService,
        private readonly authService: AuthService
      ) {}
    

    @Get()
    async getAllUsers(@Res() res){
      const users = await this.userService.findAllUsers();
      return res.status(HttpStatus.OK).json(users);
    }
  
    @Post()
    async createUser(@Res() res, @Body() createUserDTO: CreateUserDto){
      
        const user = await this.userService.createUser(createUserDTO);
      return res.status(HttpStatus.OK).json({
        message: "User has been created successfully",
        user
      });
    }

    @Get(':id')
    async getUser(@Res() res, @Param('id') id: string){
        const user = await this.userService.findUserById(id);
        if(!user) throw new NotFoundException('User not found');
        return res.status(HttpStatus.OK).json(user);

    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() req) {
      return this.authService.login(req.user);
    }
}
