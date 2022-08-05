/**
 *  🎃 main.ts : The entry file of the application which uses the core function `NestFactory` to create a Nest application instance.
 *
 * - Nest application instance를 만들기위해, `NestFactory` class를 사용
 * - NestFactory는 application instance를 만들게 해주는 몇 가지 static methods를 expose한다.
 *
 * - create()는 `INestApplication` 인터페이스를 구현한(충족한? fulfill) 어플리케이션 객체를 return
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  /**
   * 🔸 Nest는 platform-agnostic framework (플랫폼 애그노스틱의((어떤 운영 체제나 프로세서의 조합에 대한 지식 없이도 기능을 수행할 수 있는 소프트웨어 기술)))이기
   * 때문에 따로 어떤 프레임워크를 사용하던 그것을 명시할 필요가 없지만, 사용하고자 한다면 위의 app을 아래와같이 작성할 수 있다.
   *
   * - Express
   * const app = await NestFactory.create<NestExpressApplication>(AppModule);
   *
   * - Fastify
   * const app = await NestFactory.create<NestFastifyApplication>(AppModule);
   */
  const app = await NestFactory.create(AppModule);

  /**
   * enableCors() => 내가 테스트하는 환경은 nextjs:3000port, nestjs:4000port
   * 위와 같은 경우, 3000port에서 request시에 CORS관련 에러가 발생한다.
   * 따라서 아래와 같이 app.enableCors()를 해줘야 요청을 정상적으로 받고 response도 클라이언트 측으로 전송된다.
   *
   * 참고 : https://docs.nestjs.com/security/cors
   */
  app.enableCors();
  await app.listen(4000);
}
bootstrap();
