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
3- Aqui você está dizendo que esse módulo vai usar dois arquivos: O TasksController (onde ficam as rotas da API) O TasksService (onde fica a lógica do que acontece por trás dessas rotas)
4- imports: [] Aqui você coloca outros módulos que esse módulo depende. Ex: se o TasksModule precisasse de um módulo de banco de dados ou de autenticação, você colocaria ele aqui.
Como não há nada por enquanto, fica vazio mesmo.
5- controllers: [TasksController] Aqui você diz: "Esse módulo responde pelas rotas que estão no arquivo TasksController." O TasksController é quem recebe requisições HTTP (GET, POST, DELETE etc.)
6- providers: [TasksService] "Providers" são classes que podem ser injetadas em outras partes do código — geralmente são services. O TasksService vai conter a lógica de negócio, tipo salvar tarefa, listar tarefas, deletar etc.
7- export class TasksModule {} ➡️ Aqui você exporta a classe pra que ela possa ser usada em outros lugares, como no AppModule, que é o módulo raiz da aplicação.
*/
