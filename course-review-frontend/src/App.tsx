import React, { useEffect, useState } from 'react';
import { Course } from './interfaces';
import CourseItem from './components/CourseItem';
import NewCourseForm from './components/NewCourseForm';

const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);  // กำหนดค่าเริ่มต้นเป็น array ว่าง
  const [formVisible, setFormVisible] = useState<boolean>(false)

  const handleFormVisible = () => {
    setFormVisible(!formVisible)
  }

  useEffect(() => {
    fetch('http://localhost:3000/courses/')
      .then(res => res.json())
      .then(obj => {
        setCourses(obj)
      })
  }, [])


  return (
    <div className='container p-4 mt-40 shadow-md mx-auto'>
      <ul className=''>
        {courses.map(course => (
          <CourseItem key={course.id} course={course} />
        ))}
      </ul>
      <button onClick={handleFormVisible} className='font-semibold border-2 shadow-md mb-2 p-2 rounded-md px-4 mt-2'>New Courses</button>

      {formVisible && <NewCourseForm />}
    </div>
  )
}

export default App;