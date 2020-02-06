import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Repository, ObjectID } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {

    }

    @Get()
    async getTodos(): Promise<Todo[]> {
        return await this.todoService.findAll();
    }

    @Post()
    async addTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
        const result = await this.todoService.createTask(createTodoDto);
        return result;
    }

    @Post("complete-all")
    async completeAll(): Promise<any> {
        return await this.todoService.completeAll();
    }

    @Put(":id")
    async updateTodo(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
        const result = await this.todoService.updateTask(id, updateTodoDto);
        return result;
    }

    @Delete(":id")
    async deleteTodo(@Param("id") id: string): Promise<Boolean> {
        if (id !== 'all') {
            return await this.todoService.deleteTask(id);
        } else {
            return await this.todoService.deleteAll();
        }
    }
}