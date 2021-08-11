import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';

@Injectable()
export class TokenService {
  async getToken() {
    return new Promise((resolve) => {
      randomBytes(48, (err, buffer) => {
        resolve(buffer.toString('hex'));
      });
    });
  }
}
