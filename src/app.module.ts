import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepositController } from './deposit/deposit.controller';
import { TokenService } from './services/token/token.service';
import { WithdrawController } from './withdraw/withdraw/withdraw.controller';

@Module({
  imports: [],
  controllers: [AppController, DepositController, WithdrawController],
  providers: [AppService, TokenService],
})
export class AppModule {}
