import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Course from './courses/course.entity';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import Review from './courses/review.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      host: "localhost",
      port: 27017,
      database: 'test',
      entities: [Course, Review],
      synchronize: true,
    }),
    CoursesModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
