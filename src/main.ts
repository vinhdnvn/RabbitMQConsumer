import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@localhost:5672'],
      queue: 'money_queue', // ✅ Đảm bảo đúng queue
      queueOptions: { durable: false },
    },
  });

  await app.listen();
  console.log('🚀 Consumer Service is running');
}

bootstrap();
