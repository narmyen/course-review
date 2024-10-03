import React, { useState } from 'react'
import { Course } from '../interfaces';
import CoursesService from '../services/CoursesService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { error } from 'console';

interface NewCourseFormProps {
  onNewCourseCreated?: (newCourse: Course) => void;
}

function NewCourseForm(props: NewCourseFormProps) {
  const [newCourseNumber, setNewCourseNumber] = useState<string>('');
  const [newCourseTitle, setNewCourseTitle] = useState<string>('');

  const handleCourseNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCourseNumber(e.target.value);
  };
  return (
    <div>

      <Formik
        initialValues={{ newCourseNumber: '', newCourseTitle: '' }}
        validate={values => {
          const errors: any = {};
          if (values.newCourseTitle === '') {
            errors.newCourseTitle = "CourseTitle is required"
          }
          if (values.newCourseNumber === '') {
            errors.newCourseNumber = "CourseNumber is required"
          } else if (!/^[0-9]+$/.test(values.newCourseNumber)) {
            errors.newCourseNumber = "Format error."
          }
          return errors
        }}
        onSubmit={(values, actions) => {
          console.log(values)

          const newCourse = {
            number: values.newCourseNumber,
            title: values.newCourseTitle,
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
              actions.setSubmitting(false)
            })

        }}
      >
        {({ isSubmitting }) => (
          <Form>
            Number: <Field type='input' name="newCourseNumber" className='border-2 mb-2' />
            <ErrorMessage name='newCourseNumber' component='div' />
            <br />
            Title: <Field type='input' name="newCourseTitle" className='border-2' />
            <ErrorMessage name='newCourseTitle' component='div' />
            <br />
            <button disabled={isSubmitting} className='font-semibold border-2  p-2 rounded-md px-4 mt-2'>Save</button>
          </Form>
        )}
      </Formik>

    </div>
  )
}

export default NewCourseForm