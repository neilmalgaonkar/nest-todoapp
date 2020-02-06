import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    providers: [TodoService],
    controllers: [TodoController]
})
export class TodoModule {};