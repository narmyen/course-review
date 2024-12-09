'use client'

import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

// import service
import AuthService from './services/AuthService';

// import components
import LoginForm from './components/LoginForm';
import About from './components/About';
import CourseReview from './components/CourseReview';


const App = () => {
  const [userName, setUsername] = useState<string | null>(null);

  useEffect(() => {
    setUsername(AuthService.getUserName());
  }, [])

  const handleUserLogin = () => {
    setUsername(AuthService.getUserName());
  }

  const logout = () => {
    AuthService.logoutUser();
    setUsername(null);
  }

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
          {userName && (
            <li>
              user: {userName}
              <button onClick={logout}>Log out</button>
            </li>

          )}
        </ul>
      </div>
      <div className='container p-4 mt-40 shadow-md mx-auto'>
        <Routes>
          <Route path='/' element={<CourseReview />} />
          <Route path='/login' element={<LoginForm loginCallback={handleUserLogin} />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
