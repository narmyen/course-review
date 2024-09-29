import React, { useEffect, useState } from 'react';

const App = () => {
  const [courses, setCourses] = useState<any[]>([]);  // กำหนดค่าเริ่มต้นเป็น array ว่าง

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
        <li key={course.id}>{course.number} - {course.title}</li>
      ))}
      </ul>
    </div>
  )
}

export default App;