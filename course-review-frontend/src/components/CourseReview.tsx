'use client'

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoursesService from '../services/CoursesService';
import { Course } from '../interfaces';
import CourseItem from './CourseItem';
import NewCourseForm from './NewCourseForm';
import AuthService from '../services/AuthService';

function CourseReview() {
  const [courses, setCourses] = useState<Course[]>([]); // Initial value is an empty array
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsUserLoggedIn(AuthService.isUserLoggedIn());
  }, []);

  const handleFormVisible = () => {
    setIsUserLoggedIn(AuthService.isUserLoggedIn());
    setFormVisible(!formVisible);
  };

  const fetchCourse = () => {
    CoursesService.fetchCourses()
      .then(course => {
        setCourses(course);
      });
  };

  const handleNewCourseCreated = (course: Course) => {
    fetchCourse();
    setFormVisible(false);
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  useEffect(() => {
    if (formVisible && !isUserLoggedIn) {
      navigate('/login'); // Navigate to the login page if the user is not logged in
    }
  }, [formVisible, isUserLoggedIn, navigate]);

  return (
    <div className='pb-[200px]'>
      <ul>
        {courses.map(course => (
          <CourseItem key={course.id} course={course} />
        ))}
        <br />
      </ul>
      <button onClick={handleFormVisible} className='font-semibold border-2 shadow-md mb-2 p-2 rounded-md px-4 mt-2'>
        New Courses
      </button>

      {formVisible && isUserLoggedIn && (
        <div>
          <NewCourseForm onNewCourseCreated={handleNewCourseCreated} />
        </div>
      )}
    </div>
  );
}

export default CourseReview;
