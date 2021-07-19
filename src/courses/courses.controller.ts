/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  HttpCode,
  HttpStatus,
  Patch,
  Delete,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id) {
    return this.coursesService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() CreateCourseDto: CreateCourseDto) {
    return this.coursesService.create(CreateCourseDto);
  }

  @Patch('/:id')
  update(@Param('id') id, @Body() UpdateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, UpdateCourseDto);
  }

  @Delete('/:id')
  delete(@Param('id') id) {
    return this.coursesService.remove(id);
  }
}
