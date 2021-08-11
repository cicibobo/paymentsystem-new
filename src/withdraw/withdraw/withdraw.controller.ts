import { Controller, Post } from '@nestjs/common';

@Controller('withdraw')
export class WithdrawController {
  @Post()
  async withdraw() {
    return {
      status: 'success',
    };
  }
}
