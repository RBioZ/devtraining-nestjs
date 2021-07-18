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
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  @Patch('/:id')
  update(@Param('id') id, @Body() body) {
    return this.coursesService.update(id, body);
  }

  @Delete('/:id')
  delete(@Param('id') id) {
    return this.coursesService.remove(id);
  }
}
