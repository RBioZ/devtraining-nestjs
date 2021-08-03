import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

// import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import Database from '../ormconfig.js';

@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot(Database)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
