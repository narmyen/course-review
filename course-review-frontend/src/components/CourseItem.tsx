import React, { useState } from 'react';
import { Course, Review } from '../interfaces';
import CoursesService from '../services/CoursesService';

interface CourseItemProps {
  course: Course,
}

function CourseItem(props: CourseItemProps) {
  const course = props.course;
  const [reviewVisible, setReviewVisible] = useState<boolean>(false)
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleReviewVisible = () => {
    if (reviewVisible) {
      setReviewVisible(false);
    } else {
      if (course.id) {
        CoursesService.fetchReviews(course.id)
          .then(reviews => {
            setReviews(reviews);
            console.log(reviews)
            setReviewVisible(true);
          })
      } else {
        setReviewVisible(true);
      }
    }

  }

  return (
    <li key={course.id} className='border-b-2 pb-4 mb-2 '>
      <div className='flex items-center justify-between'>
        <p>{course.number} - {course.title}</p>

        <button
          className='ml-2 border-2  p-2 rounded-md shadow-md'
          onClick={handleReviewVisible}
        >
          {reviewVisible ? 'hide reviews' : 'show reviews'}
        </button>
      </div>

      {reviewVisible &&
        (
          <div>
            <ul className=''>
              {reviews.map(review => (
                <li key={review.id}>{review.coment} (score: {review.score})</li>
              ))}
              {reviews.length === 0 && (
                <li>no reviews</li>
              )}
            </ul>
          </div>
        )
      }
    </li>
  )
}

export default CourseItem