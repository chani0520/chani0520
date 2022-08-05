import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const isCached = true;
    if (isCached) {
      /**
       * Stream overriding
       *
       * - The key point to note is that we return a new stream here, created by the RxJS of() operator
       */
      return of([]);
    }
    return next.handle();
  }
}
