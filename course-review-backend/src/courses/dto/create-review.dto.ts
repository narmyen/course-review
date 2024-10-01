import { IsInt, IsNotEmpty } from "class-validator";
import { ObjectId } from "mongodb";

export class CreateReviewDto {
  @IsNotEmpty()
  coment: string;

  @IsInt()
  score: number;

  courseID?: ObjectId;
}