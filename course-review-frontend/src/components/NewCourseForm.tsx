import React, { useState } from 'react'

interface NewCourseFormProps {

}

function NewCourseForm(props: NewCourseFormProps) {
  const [newCourseNumber, setNewCourseNumber] = useState<string>('');
  const [newCourseTitle, setNewCourseTitle] = useState<string>('');


  const handleCourseNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCourseNumber(e.target.value);
  };

  const handleSave = () => {
    alert(`${newCourseTitle} -- ${newCourseNumber} `)
  }
  return (
    <div>
      Number : <input value={newCourseNumber} onChange={handleCourseNumberChange} className='border-2 mb-2' /> <br />
      Title : <input value={newCourseTitle} onChange={(e) => { setNewCourseTitle(e.target.value); }} className='border-2' /> <br />
      <button onClick={handleSave} className='font-semibold border-2  p-2 rounded-md px-4 mt-2'>SAVE</button>
    </div>
  )
}

export default NewCourseForm