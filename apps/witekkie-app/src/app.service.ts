import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is the main witekkie app It manages application wide settings and is the entry point!';
  }
}
