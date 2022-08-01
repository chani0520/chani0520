/**
 *  🎃 app.module.ts : The root module of the application.
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nestjs_test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
