'use client'

import { Form, Formik, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService'


function LoginForm() {
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  return (
    <div className='LoginForm'>
      <Formik
        initialValues={{ login: '', password: '' }}
        onSubmit={async (values, actions) => {
          const result = await AuthService.loginUser(values.login, values.password);
          if (!result) {
            setLoginErrorMessage('Login error: wrong username or password');
          } else {
            setLoginErrorMessage('');
            navigate("/"); // Use navigate instead of history.push
          }
          actions.setSubmitting(false);
        }}
        validate={values => {
          const errors: any = {};
          if (values.login === '') {
            errors.login = "Login required";
          }
          if (values.password === '') {
            errors.password = "Password required";
          }
          return errors;
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {loginErrorMessage && (
              <div className='text-red-600 font-bold'>{loginErrorMessage}</div>
            )}
            Login : <Field type='input' name='login' className="border-2" />
            <ErrorMessage name='login' component='div' />
            <br />
            Password : <Field type='password' name='password' className="border-2" />
            <ErrorMessage name='password' component='div' />
            <br />
            <button disabled={isSubmitting} className='border-2 py-[.5rem] px-[1rem] rounded-md shadow-md'>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm
