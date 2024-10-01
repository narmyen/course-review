import React, { useState } from 'react';
import { Course, Review } from '../interfaces';
import CoursesService from '../services/CoursesService';
import { SavedSearch } from '@mui/icons-material';

interface CourseItemProps {
  course: Course,
}

function CourseItem(props: CourseItemProps) {
  const course = props.course;

  const [reviewVisible, setReviewVisible] = useState<boolean>(false)
  const [reviews, setReviews] = useState<Review[]>([]);

  // review form 
  const [newReviewComment, setNewReviewComment] = useState<string>('');
  const [newReviewScore, setNewReviewScore] = useState<number>(1);


  const fetchReviews = () => {
    if (course.id) {
      CoursesService.fetchReviews(course.id)
        .then(reviews => {
          setReviews(reviews);
        });
    }
  }

  const handleReviewVisible = () => {
    if (reviewVisible) {
      setReviewVisible(false);
    } else {
      fetchReviews()
      setReviewVisible(true);
    }

  }

  const clearNewReiewForm = () => {
    setNewReviewComment('');
    setNewReviewScore(1);
  }

  const handleNewReviewSave = () => {
    // alert(`${newReviewComment} - ${newReviewScore}`)

    const newReview: Review = {
      coment: newReviewComment,
      score: newReviewScore,
    }

    if (course.id) {
      CoursesService.createReview(newReview, course.id)
        .then(savedNewReview => {
          if (savedNewReview) {
            fetchReviews();
            clearNewReiewForm();
          }
        })
    }
  }

  const newReviewsScoreOption = [1, 2, 3, 4, 5]

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
            <ul className='font-black'>
              {reviews.map(review => (
                <li key={review.id} className='font-normal'>{review.coment} (score: {review.score})</li>
              ))}
              {reviews.length === 0 && (
                <li>no reviews</li>
              )}
            </ul>

            <p className='w-full border-b-[2px] pt-2'></p>
            <p className='font-bold pt-4 pb-2'>New Reviews</p>
            <p> Comment: <input className='border-2 mb-2' value={newReviewComment} onChange={e => { setNewReviewComment(e.target.value) }} /> </p>

            <div className='flex gap-2'>
              <p>Score :</p>
              <select
                value={newReviewScore}
                onChange={e => { setNewReviewScore(parseInt(e.target.value)) }}
              >
                {newReviewsScoreOption.map(score => (
                  <option value={score}>{score}</option>
                ))}
              </select>
            </div>

            <button
              className='mt-2 border-2 px-[1rem] py-[0.1rem] text-center rounded-md shadow-md'
              onClick={handleNewReviewSave}
            >
              save
            </button>
          </div>
        )
      }
    </li>
  )
}

export default CourseItem