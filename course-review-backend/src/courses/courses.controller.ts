import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import Course from './course.entity';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import Review from './review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { ObjectId } from 'mongodb';
import { ParseObjectIdPipe } from 'src/common/pipes';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@Controller('courses')
export class CoursesController {
  // อยากใช้ service อะไรก็เอามาใส่ใน constructor
  constructor(private coursesService: CoursesService) { }

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createCourseDto: CreateCourseDto) {
    const newCourse = this.coursesService.create(createCourseDto);
    return newCourse;
  }

  @Get(':courseID/reviews')
  async finAllReviews(@Param('courseID', ParseObjectIdPipe) courseID: ObjectId): Promise<Review[]> {
    return this.coursesService.finAllReviews(courseID);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':courseID/reviews')
  async createReview(@Param('courseID', ParseObjectIdPipe) courseID: ObjectId,
    @Body() createReviewDto: CreateReviewDto) {
    createReviewDto.courseID = courseID;
    return this.coursesService.createReview(createReviewDto);
  }

}