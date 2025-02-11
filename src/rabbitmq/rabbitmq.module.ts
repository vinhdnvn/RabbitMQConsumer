import { Module } from '@nestjs/common';
import { TransactionConsumer } from './transaction.consumer';
import { TransactionService } from 'src/transactions/transaction.service';


@Module({
  providers: [TransactionConsumer, TransactionService],
  exports: [TransactionConsumer, TransactionService],
})
export class RabbitMQModule {}
