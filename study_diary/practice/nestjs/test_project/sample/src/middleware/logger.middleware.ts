import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/**
 * Middleware functions can perform the following tasks:
 * - execute any code
 * - make change to the request and the response objects
 * - end the request-response cycle
 * - call the next middleware function in the stack
 * - if the current middleware function does not end the request-response cycle,
 *   it must call `next()` to pass control to the next middleware function.
 *   Otherwise, the request will be left hanging.
 *
 * - Nest의 Middleware는 기본적으로 Express의 Middleware와 동등하다.
 * - @Injectable() decorator를 사용해야함
 * - class라면 `NestMiddleware` interface를 구현해야하지만, function이라면 특별한 조건이 존재하지 않는다.
 */

// class
// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('Request...class => i am logger.middleware!!');
//     next();
//   }
// }

// function
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request...function => i am logger.middleware!!');
  next();
}
