import Course from "./course.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCourseDto } from "./dto/create-course.dto";
import Review from "./review.entity";

@Injectable()
export class CoursesService {
  //  ก็คือถ้าต้องการติดต่อหรือทำอะไรกับฐานข้อมูลต้อง injectRepo
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) { }

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

  async create(createCourseDto: CreateCourseDto) {
    return this.coursesRepository.save(createCourseDto);
  }

  async finAllReviews(courseID: string): Promise<Review[]> {
    return this.reviewRepository.find({ where: { courseID: courseID } });
  }
}