import Course from "./course.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCourseDto } from "./dto/create-course.dto";
import Review from "./review.entity";
import { CreateReviewDto } from "./dto/create-review.dto";
import { ObjectId } from "mongodb";

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
  }

  async create(createCourseDto: CreateCourseDto) {
    return this.coursesRepository.save(createCourseDto);
  }

  async finAllReviews(courseID: ObjectId): Promise<Review[]> {
    return this.reviewRepository.find({ where: { courseID: courseID } });
  }

  async createReview(createReviewDto: CreateReviewDto) {
    return this.reviewRepository.save(createReviewDto);
  }
}