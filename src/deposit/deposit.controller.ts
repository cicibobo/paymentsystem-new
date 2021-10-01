import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Render,
  Req,
  Res,
  Param,
} from '@nestjs/common';
import { TokenService } from '../services/token/token.service';
import { Request, Response } from 'express';
import { createHmac } from 'crypto';
import { env } from 'process';

interface DepositChargeParams {
  env: string;
}

@Controller('deposit')
export class DepositController {
  constructor(private token: TokenService) {}

  @Post(':env')
  async depositUrl(
    @Req() request: any,
    @Res() response: Response,
    @Param() params: DepositChargeParams,
    @Body() body: any,
  ) {
    console.log(params);

    console.log('depost');
    const secret = 'Vo86V82wdEP8j47ibyBrd';

    const sig = request.headers['authorization'];
    const generatedSig = this.ecnryptPayload(request.parsedRawBody, secret);

    if (sig === generatedSig) {
      const token = await this.token.getToken();
      response.status(HttpStatus.OK).send({
        status: 'success',
        redirect: `https://cashforo.com/deposit/${params.env}?token= + ${token}`,
      });
    }

    response
      .status(HttpStatus.UNAUTHORIZED)
      .send("Signature not doesn't match");
  }

  @Get(':env')
  @Render('choose-result')
  test(@Param() params: DepositChargeParams) {
    if (params.env === 'test') {
      return {
        type: 'Deposit',
        success: 'https://test-betitall.egamings.com/?message=PAYMENT_SUCCESS',
        fail: 'https://test-betitall.egamings.com/?message=PAYMENT_FAIL',
      };
    } else {
      return {
        type: 'Deposit',
        success: 'https://www.betitall.com/?message=PAYMENT_SUCCESS',
        fail: 'https://www.betitall.com/?message=PAYMENT_FAIL',
      };
    }
  }

  ecnryptPayload(payload, key) {
    return createHmac('sha256', key).update(payload).digest('hex');
  }
}
