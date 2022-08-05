/**
 *  🎃 app.service.ts : A basic service with a single method.
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('🔹 getHello called!');
    return 'Hello World!';
  }
}
