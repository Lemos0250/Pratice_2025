import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/teste')
  getTeste() {
    return 'Rota de teste api';
  }

  @Post('/teste')
  createTest(){
    return 'Rota Post Funcionando'
  }
}
