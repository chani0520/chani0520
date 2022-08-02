import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

/** @Global() => Global데코레이터는 이 모듈을 어디서든 사용할수 있는 모듈로 정의해줌
 * - 일반적으로 Nest에서의 모듈은 전역스코프가 아니라 모듈스코프 ( Angular에서의 providers는 전역스코프로 등록된다. )
 * - e.g., helpers, database connections, etc.
 */
@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {
  constructor(private catsService: CatsService) {}
}
