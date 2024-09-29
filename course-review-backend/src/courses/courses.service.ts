import  Course  from "./course.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) 
    private coursesRepository: Repository<Course>,
  ) {}

  async findAll(): Promise<Course[]> {
    return this.coursesRepository.find();
    /*
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
    */
  }
}