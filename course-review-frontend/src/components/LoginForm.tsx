import { Form, Formik, Field, ErrorMessage } from 'formik'
import React from 'react'

function LoginForm() {
  return (
    <div className='LoginForm'>
      <Formik
        initialValues={{ login: '', password: '' }}
        onSubmit={(values, actions) => {
          console.log(values)
          actions.setSubmitting(false)
        }}
        validate={values => {
          const errors: any = {}
          if (values.login === '') {
            errors.login = "Login required"
          }
          if (values.password === '') {
            errors.password = "Password required"
          }
          return errors
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            Login : <Field type='input' name='login' className="border-2" />
            <ErrorMessage name='login' component='div' />
            <br />
            Password : <Field type='password' name='password' className="border-2" />
            <ErrorMessage name='password' component='div' />
            <br />
            <button disabled={isSubmitting} className='border-2 py-[.5rem] px-[1rem] rounded-md shadow-md'>LOgin</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm
