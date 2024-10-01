import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class Review {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  coment: string;

  @Column()
  score: number;

  @Column()
  courseID: string;
}

export default Review;