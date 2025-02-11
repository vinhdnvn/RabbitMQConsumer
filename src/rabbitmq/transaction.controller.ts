import { Controller, Injectable } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { TransactionService } from 'src/transactions/transaction.service';

@Controller()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @MessagePattern('money_queue')
  async processTransaction(data: any) {
    console.log('📥 Received transaction:', data);

    // Gọi service xử lý giao dịch
    // await this.transactionService.processTransaction(data);
  }
}
