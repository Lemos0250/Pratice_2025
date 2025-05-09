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

    console.log('Cadastrado com Sucesso');

    this.tasks.push(newTask);

    
    return newTask;
  }

  update(id: string, body: any) {}
}

/*
1- Aqui é onde fica a lógica da aplicação. O controller chama o service, e o service faz o trabalho (ex: acessar banco, tratar dados).
*/
