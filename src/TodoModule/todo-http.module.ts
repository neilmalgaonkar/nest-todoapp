import { Module } from '@nestjs/common';
import { TodoModule } from './todo.module';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
    imports: [TodoModule],
    providers: [TodoService],
    controllers: [TodoController]
})
export class TodoHttpModule {}