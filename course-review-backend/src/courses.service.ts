import { Course } from "./interfaces/course.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CoursesService {
  async findAll(): Promise<Course[]> {
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