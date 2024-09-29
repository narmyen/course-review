import React from 'react';
import { Course } from '../interfaces';

interface CourseItemProps{
  course: Course,
}

function CourseItem(props : CourseItemProps) {
  const course = props.course;

  return (
    <li>
      {course.number} - {course.title}
    </li>
  )
}

export default CourseItem