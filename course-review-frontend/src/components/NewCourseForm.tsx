import React, { useState } from 'react'
import { Course } from '../interfaces';
import CoursesService from '../services/CoursesService';

interface NewCourseFormProps {
  onNewCourseCreated?: (newCourse: Course) => void;
}

function NewCourseForm(props: NewCourseFormProps) {
  const [newCourseNumber, setNewCourseNumber] = useState<string>('');
  const [newCourseTitle, setNewCourseTitle] = useState<string>('');

  const handleCourseNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCourseNumber(e.target.value);
  };

  const handleSave = () => {

    const newCourse = {
      number: newCourseNumber,
      title: newCourseTitle,
    };

    CoursesService.createCourse(newCourse)
      .then(savedNewCourse => {
        if (savedNewCourse !== null) {
          if (props.onNewCourseCreated !== undefined) {
            props.onNewCourseCreated(savedNewCourse);
          }
        } else {
          alert("Save error");
        }
      })

  }
  return (
    <div>
      Number : <input onChange={handleCourseNumberChange} className='border-2 mb-2' /> <br />
      Title : <input onChange={(e) => { setNewCourseTitle(e.target.value); }} className='border-2' /> <br />
      <button onClick={handleSave} className='font-semibold border-2  p-2 rounded-md px-4 mt-2'>SAVE</button>
    </div>
  )
}

export default NewCourseForm