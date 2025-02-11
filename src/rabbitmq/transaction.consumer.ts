import { Injectable } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { TransactionService } from 'src/transactions/transaction.service';

@Injectable()
export class TransactionConsumer {
  constructor(private readonly transactionService: TransactionService) {}

  @EventPattern('money_queue')// ✅ Đảm bảo đúng queue
  async processTransaction(data: any) {
    console.log('📥 Received transaction:', data);

    // Gọi service xử lý giao dịch
    await this.transactionService.processTransaction(data);
  }
}
