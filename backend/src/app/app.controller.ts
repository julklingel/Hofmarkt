import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from '../auth/guard';
import { UseGuards } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @Get('test')
  getTest(): string {
    return 'Test';
  }
}
