import { Injectable, OnModuleInit } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

/**
 * @Injectable() => marks `CatService`class as a provider
 */
@Injectable()
export class CatsService implements OnModuleInit {
  onModuleInit() {
    console.log('The Module(CatsService) has been initialized.');
  }

  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll({ activeOnly, page }): Cat[] {
    return this.cats;
  }

  findOne(id: number) {
    // console.log(`success find #${id} cats!`);
    return id;
  }
}
