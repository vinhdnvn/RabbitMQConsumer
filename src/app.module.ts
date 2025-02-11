import { Module } from '@nestjs/common';

import { RabbitMQModule } from './rabbitmq/rabbitmq.module';
import { TransactionService } from './transactions/transaction.service';

@Module({
  imports: [RabbitMQModule],
  providers: [TransactionService],
})
export class AppModule {}
