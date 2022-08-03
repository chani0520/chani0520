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
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from 'src/forbidden.exception';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { ValidationPipe } from 'src/validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  // @UseFilters(HttpExceptionFilter)
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
}
