import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  glistAllTasks() {
    return [{ id: 1, task: 'Comprar pão' }];
  }

  findOneTask(){
    return 'Trefa Matheus Teste...'
  }
}
