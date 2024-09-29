import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get()
  findAll(): any {
    return [
      {
        id : '100',
        number : "01204111",
        title : "Computer and Programming"
      },
      {
        id : '213',
        number : "01204112",
        title : "Discrete"
      },
      {
        id : '244',
        number : "01204113",
        title : "Design"
      },
    ];
  }
  
}