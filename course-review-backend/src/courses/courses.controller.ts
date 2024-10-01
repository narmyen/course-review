import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import Course from './course.entity';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import Review from './review.entity';

@Controller('courses')
export class CoursesController {
  // อยากใช้ service อะไรก็เอามาใส่ใน constructor
  constructor(private coursesService: CoursesService) { }

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto) {
    if (createCourseDto.number !== undefined && createCourseDto.title !== undefined) {
      const newCourse = this.coursesService.create(createCourseDto);
      return newCourse;
    } else {
      throw new HttpException('Bad request:', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':courseID/reviews')
  async finAllReviews(@Param('courseID') courseID: string): Promise<Review[]> {
    return this.coursesService.finAllReviews(courseID);
  }

}