import { Controller, Get, Header, Post, Query, Redirect } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('ab*cd')
  findAllWildcard(): string {
    return 'This route uses a wildcard';
  }

  @Post()
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }
}
