import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import LoginForm from './components/LoginForm';
import About from './components/About';
import CourseReview from './components/CourseReview';
import Oioi from './components/Oioi'

const App = () => {

  return (
    <Router>
      <div className='container mx-auto  flex item-center justify-end mt-10'>
        <ul className='flex gap-4'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/oioi'>oioi</Link>
          </li>
        </ul>
      </div>
      <div className='container p-4 mt-40 shadow-md mx-auto'>
        <Routes>
          <Route path='/' element={<CourseReview />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/about' element={<About />} />
          <Route path='/oioi' element={<Oioi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
