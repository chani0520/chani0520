import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(@Req() req: Request): string {
    /**
     *  nest에서 이런식으로 요청객체를 다루는 경우는 드물다 => nest가 @Query(), @Param(key?: string), @Body 데코레이터를 제공하기 때문!
     */
    console.log(req);
    return this.appService.getHello();
  }
}
