import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

/**
 * The root module of the application ( 애플리케이션의 루트 모듈 )
 * 루트 모듈은 Nest가 application graph를 build하는데 사용하는 starting point!
 * - application graph : Nest가 module & provider간의 관계 및 종속성을 해결하는데 사용하는 내부의 데이터 구조
 */
@Module({
  imports: [CatsModule],
})
export class AppModule {}
