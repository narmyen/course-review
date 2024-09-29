import React, { useEffect, useState } from 'react';
import { Course } from './interfaces';
import CourseItem from './components/CourseItem';

const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);  // กำหนดค่าเริ่มต้นเป็น array ว่าง

  useEffect(()=>{
    fetch('http://localhost:3000/courses/')
      .then(res => res.json())
      .then(obj => {
        setCourses(obj)
      })
  }, [])


  return (
    <div>
      <ul>
        {courses.map(course => (
          <CourseItem key={course.id} course={course}/>
        ))}
      </ul>
    </div>
  )
}

export default App;