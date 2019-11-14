import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/common/enums/transport.enum';

const logger = new Logger('Main');

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: 'localhost',
    port: 1992
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const microservice = app.connectMicroservice(microserviceOptions);
  microservice.listen(() => console.log('User Manager microservice is listening...'));
  
  await app.startAllMicroservicesAsync();
  await app.listen(2100);

}



bootstrap();
