import {
  Controller,
  Get,
  Post,
  Body,
  UseFilters,
  Param,
  ParseIntPipe,
  HttpStatus,
  Query,
  DefaultValuePipe,
  ParseBoolPipe,
  UseGuards,
  SetMetadata,
  UseInterceptors,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from 'src/exception/forbidden.exception';
import { HttpExceptionFilter } from 'src/exception/http-exception.filter';
import { ValidationPipe } from 'src/pipe/validation.pipe';
import { RolesGuard } from 'src/guard/roles.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { TransformInterceptor } from 'src/interceptor/transform.interceptor';
import { User, UserEntity } from 'src/decorator/user.decorator';

@Controller('cats')
// @UseGuards(new RolesGuard('admin'))
@UseInterceptors(TransformInterceptor)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  // @UseFilters(HttpExceptionFilter)
  @Roles('admin')
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);

    // throw new ForbiddenException();
  }

  @Get()
  async findAll(
    @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe)
    activeOnly: boolean,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
  ): Promise<Cat[]> {
    // return this.catsService.findAll();
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // throw new HttpException(
    //   {
    //     status: HttpStatus.FORBIDDEN,
    //     error: 'This is a custom message',
    //   },
    //   HttpStatus.FORBIDDEN,
    // );
    // throw new ForbiddenException();

    return this.catsService.findAll({ activeOnly, page });
  }

  @Get(':id')
  async findOne(
    /**
     * Pipe -> all work in the context of validating route parameters, query string parameters and request body values
     */
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.catsService.findOne(id);
  }

  @Get('user')
  async findUser(@User('firstName') firstName: string) {
    console.log(`Hello ${firstName}`);
  }
}
