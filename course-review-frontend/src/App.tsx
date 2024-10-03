import React, { useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import About from './components/About';
import CourseReview from './components/CourseReview';

const App = () => {

  return (
    <div className='container p-4 mt-40 shadow-md mx-auto'>
      <CourseReview />
      <LoginForm />
      <About />
    </div>
  )
}

export default App;