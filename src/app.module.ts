import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import CatsController from './cats.controller';
import { AppService } from './app.service';
import { TodoModule }  from './TodoModule/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ResponseInterceptor } from './interceptors/response.interceptors';
@Module({
  imports: [TodoModule, TypeOrmModule.forRoot()],
  controllers: [AppController, CatsController],
  providers: [
      AppService,
      {
          provide: APP_FILTER,
          useClass: HttpExceptionFilter
      },
      {
          provide: APP_INTERCEPTOR,
          useClass: ResponseInterceptor
      }
  ],
})
export class AppModule {}
