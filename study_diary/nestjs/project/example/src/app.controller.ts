/**
 *  🎃 app.controller.ts : A basic controller with a single route.
 *
 * - controller는 request를 받고, response를 보내는 역할을 한다.
 * - 컨트롤러의 목적은 application을 위해 구체적인 request를 받는 것
 *
 * - routing 메커니즘은 어떠한 컨트롤러가 어떤 request를 받는지를 통제한다.
 *   ( 빈번하게도, 각각의 컨트롤러는 하나보다 많은 라우터를 가지는 편이다. )
 *
 * - 기본적인 컨트롤러를 만들기 위해서, class & decorator를 사용
 * - decorator는 필요한 metadata와 classes를 연관시키고, Nest가 routing map을 만들수 있도록 한다.
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
