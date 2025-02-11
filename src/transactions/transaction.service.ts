import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionService {
  async processTransaction(data: any) {
    console.log('🔄 Processing transaction:', data);

    // Ví dụ: Gọi API Producer để cập nhật trạng thái giao dịch
    try {
      const response = await fetch('http://producer-service/api/transactions/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transactionId: data.transactionId, status: 'SUCCESS' }),
      });

      console.log('✅ Updated transaction status:', await response.json());
    } catch (error) {
      console.error('❌ Error updating transaction status:', error);
    }
  }
}
