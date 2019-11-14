import { Controller, Get, Res, HttpStatus, Body, Post, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { UserServiceImpl } from '@witekkie/user-lib';
import { CreateUserDto } from '@witekkie/user-lib/users/create-user.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {

  private logger = new Logger('AppController');

  constructor(
    private readonly appService: AppService,
    private readonly userService: UserServiceImpl
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('add')
  async accumulate(data: number[]){
    this.logger.log(`Adding ${data}`);
    return this.appService.accumulate(data);
  }


 
}
