import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from 'src/transactions/transaction.service';


@Module({
  controllers: [TransactionController],
  providers: [ TransactionService],
  exports: [TransactionService],
})
export class RabbitMQModule {}
