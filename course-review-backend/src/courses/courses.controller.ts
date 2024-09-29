import { Controller, Get } from '@nestjs/common';
import  Course  from './course.entity';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  // อยากใช้ service อะไรก็เอามาใส่ใน constructor
  constructor(private coursesService: CoursesService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }
  
}