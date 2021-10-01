import { RawBodyMiddlewareMiddleware } from './raw-body-middleware.middleware';

describe('RawBodyMiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new RawBodyMiddlewareMiddleware()).toBeDefined();
  });
});
