import { Controller, Get, Post, Render } from '@nestjs/common';
import { TokenService } from '../services/token/token.service';

@Controller('deposit')
export class DepositController {
  constructor(private token: TokenService) {}

  @Post()
  async depositUrl() {
    const token = await this.token.getToken();
    return {
      status: 'success',
      redirect: 'https://cashforo.com/deposit/test?token=' + token,
    };
  }

  @Get('test')
  @Render('choose-result')
  test() {
    return { type: 'Deposit' };
  }
}
