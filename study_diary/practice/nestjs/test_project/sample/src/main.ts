import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

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

  // HTTP listener start up
  await app.listen(3000);
}
bootstrap();
