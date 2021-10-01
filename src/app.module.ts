import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { MiddlewareConsumer, RouteInfo } from '@nestjs/common/interfaces';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepositController } from './deposit/deposit.controller';
import { TokenService } from './services/token/token.service';
import { WithdrawController } from './withdraw/withdraw/withdraw.controller';

import { RawBodyMiddlewareMiddleware } from './raw-body-middleware.middleware';

const rawBodyParsingRoutes: Array<RouteInfo> = [
  {
    path: 'deposit*',
    method: RequestMethod.POST,
  },
];

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController, DepositController, WithdrawController],
  providers: [AppService, TokenService],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer
      .apply(RawBodyMiddlewareMiddleware)
      .forRoutes(...rawBodyParsingRoutes);
    // .apply(JsonBodyMiddleware) example of setting middleware
    // .exclude(...rawBodyParsingRoutes)
    // .forRoutes('*')
  }
}
