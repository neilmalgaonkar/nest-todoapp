import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>) {}

    findAll(): Promise<Todo[]> {
        return this.todoRepository.find();
    }

    createTask(createTodoBody: CreateTodoDto): Promise<Todo> {
        return this.todoRepository.save({
            ...createTodoBody
        });
    }

    completeAll(): Promise<any> {
        const manager = this.todoRepository.manager;
        return this.todoRepository.update([], {
            "is_completed": true
        });
    }

    updateTask(id: string, updateTodoBody: UpdateTodoDto): Promise<Todo> {
        const _id: ObjectID = new ObjectID(id);
        const updatedTodo = {
            ...updateTodoBody,
            _id
        };
        return this.todoRepository.save(updatedTodo);
    }

    deleteTask(id: string): Promise<any> {
        const _id: ObjectID = new ObjectID(id);
        return this.todoRepository.delete({"_id": _id});
    }

    deleteAll(): Promise<any> {
        return this.todoRepository.clear();
    }
};