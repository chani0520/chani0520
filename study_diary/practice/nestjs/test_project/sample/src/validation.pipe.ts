import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

/**
 * PipeTransform<T, R> is a generic interface that must be implemented by any pipe.
 * - T : to indicate the type of the input value
 * - R : to indicate the return type of the transform() method
 */
// @Injectable()
// export class ValidationPipe implements PipeTransform {
//   /**
//    * 모든 pipe는 transform()을 구현해야만 한다.
//    * @param value is the currently processed method argument ( before it is received by the route handling method )
//    * @param metadata is the currently processed method argument's metadata
//    * @returns
//    *
//    * - metadata object
//    * ex )
//    * export interface ArgumentMetadata {
//    *  type: 'body' | 'query' | 'param' | 'custom';
//    *  metatype?: Type<unknown>;
//    *  data?: string;
//    * }
//    */
//   transform(value: any, metadata: ArgumentMetadata) {
//     return value;
//   }
// }

// -> class-validator & class-transformer 적용 후
@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToInstance(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }

    // { name: 'chan', age: 31, breed: 'chan breed' }
    console.log(value);
    return value;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private toValidate(metatype: Function): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
