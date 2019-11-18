import { Controller, Get, Post, Body, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {

  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('add')
  async accumulate(@Body() data: number[]){
    this.logger.log(`Adding ${data}`);
    return this.appService.accumulate(data);
  }

  @Get('users')
  async getUsers(){
    return this.appService.getUsers();
  }

}
