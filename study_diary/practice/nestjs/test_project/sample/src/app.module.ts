import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { CatsModule } from './cats/cats.module';
import { HttpExceptionFilter } from './http-exception.filter';
import { logger } from './middleware/logger.middleware';
import { ValidationPipe } from './validation.pipe';

/**
 * The root module of the application ( 애플리케이션의 루트 모듈 )
 * 루트 모듈은 Nest가 application graph를 build하는데 사용하는 starting point!
 * - application graph : Nest가 module & provider간의 관계 및 종속성을 해결하는데 사용하는 내부의 데이터 구조
 */
@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  // MiddlewareConsumer는 helper class ( middleware를 관리하기 위한 몇가지 built-in methods를 제공한다. )
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes(CatsController);

    // 아래와 같이 exclude()를 통해 특정 routes들에는 middleware를 적용하지 않게 할수도 있다.
    consumer
      .apply(logger)
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
      );
  }
}
