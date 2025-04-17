import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      name: 'Seguir o Passos para aprender DB',
      description: 'Aprendendo muito sobre programação',
      completed: false,
    },
  ]

  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.tasks;
  }

  findOne(id: string) {
    return this.tasks.find((task) => task.id === Number(id));
  }

  create(body: any) {
    const newId = this.tasks.length + 1;
    const newTask = {
      id: newId,
      ...body,
    };

    console.log('Cadastrado com Sucesso')
  
    this.tasks.push(newTask);
    
    return newTask;
  }
  
}
