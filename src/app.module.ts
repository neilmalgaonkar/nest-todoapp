import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import CatsController from './cats.controller';
import { AppService } from './app.service';
import { TodoModule }  from './TodoModule/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TodoModule, TypeOrmModule.forRoot()],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
