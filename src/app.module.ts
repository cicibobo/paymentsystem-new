import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepositController } from './deposit/deposit.controller';
import { TokenService } from './services/token/token.service';
import { WithdrawController } from './withdraw/withdraw/withdraw.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController, DepositController, WithdrawController],
  providers: [AppService, TokenService],
})
export class AppModule {}
