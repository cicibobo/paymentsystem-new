import { Injectable, NestMiddleware } from '@nestjs/common';
import { json } from 'body-parser';
import { IncomingMessage } from 'http';

@Injectable()
export class RawBodyMiddlewareMiddleware implements NestMiddleware {
  public use(req: IncomingMessage, res, next: () => any): any {
    json({
      verify: (req, res, buffer) => {
        if (Buffer.isBuffer(buffer)) {
          const rawBody = Buffer.from(buffer);
          req['parsedRawBody'] = rawBody;
        }
        return true;
      },
    })(req, res as any, next);
  }
}
