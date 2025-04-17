import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  findAllTasks() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOneTask(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Post()
  createTask(@Body() body: any) {
    console.log(body);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.taskService.create(body);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() body: any) {
    console.log('Id: ', id);
    console.log('Body: ', body);

    return 'Atualizando tarefa...';
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    console.log('Id Enviado: ' + id);
    return 'Deletar a tarefa com id' + id;
  }
}
