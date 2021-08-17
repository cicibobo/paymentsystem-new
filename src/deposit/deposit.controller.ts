import { Controller, Post } from '@nestjs/common';
import { TokenService } from '../services/token/token.service';

@Controller('deposit')
export class DepositController {
  constructor(private token: TokenService) {}
  @Post()
  async depositUrl() {
    const token = await this.token.getToken();
    return {
      status: 'success',
      redirect: 'https://cashforo.com/checkout?token=' + token,
    };
  }
}
