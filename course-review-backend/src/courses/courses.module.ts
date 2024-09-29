import { Module } from "@nestjs/common"
import { CoursesController } from "./courses.controller"
import { CoursesService } from "./courses.service"
import Course from "./course.entity"
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
  // ทำการนำเข้าโมดูล TypeORM เพื่อให้สามารถใช้การเชื่อมต่อกับตาราง (entity) ในฐานข้อมูลที่ชื่อว่า Course ได้ โดย TypeOrmModule.forFeature([Course]) กำลังบอกว่าเราจะใช้งาน entity Course ในโมดูลนี้
  imports: [ TypeOrmModule.forFeature([Course]),],
  // มีคอนโทรลเลอร์ CoursesController ที่จะจัดการการร้องขอ HTTP
  controllers: [CoursesController],
  // ตัวที่ไปทำงานจริงๆ
  providers: [CoursesService,
  ]
})
export class CoursesModule{}