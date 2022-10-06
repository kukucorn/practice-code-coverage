import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/foo')
  getFoo(): string {
    return 'foo';
  }

  @Get('/bar')
  getbar(): string {
    return 'bar';
  }

  @Get('/baz')
  getbaz(): string {
    return 'baz';
  }
}
