import { Injectable } from '@nestjs/common';
import {ClientProxyFactory, Transport, ClientProxy} from '@nestjs/microservices';

@Injectable()
export class AppService {

  private client: ClientProxy;

  constructor(){
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 1992
      }
    });
  }

  getHello(): string {
    return 'This is witekkie Market place for apps!';
  }

  public accumulate(data: number[]){
    return this.client.send<number, number[]>('add', data);
  }

  public getUsers(){
    return this.client.send<{}>('users', {});
  }


}
