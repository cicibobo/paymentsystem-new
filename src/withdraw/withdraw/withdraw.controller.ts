import { Controller, Post, Get, Render } from '@nestjs/common';

@Controller('withdraw')
export class WithdrawController {
  @Post()
  async withdraw() {
    return {
      status: 'success',
    };
  }

  @Get('test')
  @Render('choose-result')
  test() {
    return { type: 'Withdraw' };
  }
}
