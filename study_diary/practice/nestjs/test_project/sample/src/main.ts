import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AllExceptionsFilter } from './all-exception.filter';
import { AppModule } from './app.module';
import { ValidationPipe } from './validation.pipe';

/**
 * The entry file of the application which uses the core function `NestFactory` to create a Nest application instance.
 * 핵심 기능 `NestFactory`를 사용하여 Nest 애플리케이션 인스턴스를 생성하는 애플리케이션의 Entry File
 *
 * - main.ts는 Application을 동작하게할 `bootstrap`이라는 async function을 포함하고있다.
 */
async function bootstrap() {
  /**
   *  to create a Nest application instance, `NestFactory` 클래스를 이용
   *
   * - `NestFactory`는 Application instance를 생성하게끔하는 몇가지 정적 메서드를 노출
   * - create() method는 `INestApplication` interface를 fulfills하는 어플리케이션 객체를 반환한다.
   */
  const app = await NestFactory.create(AppModule);

  /**
   *  global-scoped filter
   * - Global-scoped filter는 모든 컨트롤러와 모든 route handler에 대해 모든 어플리케이션에서 사용되어진다.
   * - 아래와 같이 말고, app.module.ts에서 import해서 사용해도 전역으로 작동한다.
   */
  // app.useGlobalFilters(new HttpExceptionFilter());
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  /**
   * global-pipe
   * - 아래와 같이 말고, app.module.ts에서 import해서 사용해도 전역으로 작동한다.
   */
  // app.useGlobalPipes(new ValidationPipe());

  // HTTP listener start up
  await app.listen(3000);
}
bootstrap();
