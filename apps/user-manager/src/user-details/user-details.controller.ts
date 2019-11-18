import { Controller, Get, Res, Post, HttpStatus, Body, Param, NotFoundException, UseGuards, Req, Delete } from '@nestjs/common';
import { AppService } from '../app.service';
import { UserServiceImpl } from '@witekkie/user-lib';
import { CreateUserDto } from '@witekkie/user-lib/users/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'libs/auth/src/users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService, User } from 'libs/auth/src';
import { MessagePattern } from '@nestjs/microservices';

@Controller('user-details')
export class UserDetailsController {

    constructor(
        private readonly appService: AppService,
        private readonly userService: UsersService,
        private readonly authService: AuthService
      ) {}
    

    @Get()
    async getAllUsers(@Res() res, @Req() req){
      console.log(`This is the user ${req.user}`);
      const users = await this.userService.findAllUsers();
      return res.status(HttpStatus.OK).json(users);
    }
  
    @Post()
    async createUser(@Res() res, @Req() req, @Body() createUserDTO: CreateUserDto){
      console.log(req);
      
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

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async removeUser(@Res() res, @Param('id') id: string){
      const user = await this.userService.deleteUser(id);
      if(!user) throw new NotFoundException('User not found');

      return res.status(HttpStatus.OK).json({
        message: 'User has been deleted'
      });
    }



    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() req, @User() user: any) {
      return this.authService.login(req.user);
    }



    @MessagePattern('users')
    async findUsers(){
      return await this.userService.findAllUsers();
    }
}
