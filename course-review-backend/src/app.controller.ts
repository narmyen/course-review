import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { deflate } from 'zlib';

@Controller()
export class AppController {
  // บอกว่าใช้ service อะไร
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
}