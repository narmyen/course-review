'useClient'

import React, { useEffect, useState } from 'react'
import CoursesService from '../services/CoursesService';
import { Course } from '../interfaces';
import CourseItem from './CourseItem';
import NewCourseForm from './NewCourseForm';

function CourseReview() {
  const [courses, setCourses] = useState<Course[]>([]);  // กำหนดค่าเริ่มต้นเป็น array ว่าง

  const [formVisible, setFormVisible] = useState<boolean>(false)

  const handleFormVisible = () => {
    setFormVisible(!formVisible)
  }

  const fetchCourse = () => {
    CoursesService.fetchCourses()
      .then(course => {
        setCourses(course);
      })
  }

  const handleNewCourseCreated = (course: Course) => {
    fetchCourse();
    setFormVisible(false);
  }

  useEffect(() => {
    fetchCourse();
  }, [])
  return (
    <div>
      <ul className=''>
        {courses.map(course => (
          <CourseItem key={course.id} course={course} />
        ))}
        <br />
      </ul>
      <button onClick={handleFormVisible} className='font-semibold border-2 shadow-md mb-2 p-2 rounded-md px-4 mt-2'>New Courses</button>

      {formVisible &&
        <NewCourseForm onNewCourseCreated={handleNewCourseCreated} />
      }
    </div>
  )
}

export default CourseReview
