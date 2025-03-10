import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @MessagePattern('user1-call')
  getIn4(data: any): any {
    console.log('data', data);
    return {
      name: 'Vinh Nguyeh',
      age: 21,
    };
  }
}
