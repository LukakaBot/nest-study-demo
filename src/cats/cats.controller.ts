import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('ab*cd')
  findAllWildcard(): string {
    return 'This route uses a wildcard';
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
}
