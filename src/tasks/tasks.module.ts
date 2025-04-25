import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}

/* 
1- Pasta Module são pastas de funcionalidade. Cada módulo agrupa arquivos relacionados: controller, service, entidade, etc.
2- Aqui você está importando o decorador @Module, que é o que transforma uma classe comum (no caso TasksModule) em um módulo do NestJS.

*/
