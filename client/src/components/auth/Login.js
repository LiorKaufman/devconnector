import React, { useState } from 'react';
import axios from 'axios';

// react router
import { Link } from 'react-router-dom';

const emptyLoginForm = {
  email: '',
  password: '',
};

export default function Login() {
  const [userLoginForm, setUserLoginForm] = useState(emptyLoginForm);

  const { email, password } = userLoginForm;

  const onChange = (e) =>
    setUserLoginForm({
      ...userLoginForm,
      [e.target.name]: e.target.value,
    });

  const onSumbmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='container register'>
        <div className='register-card'>
          <div>
            <h3 className='register-title register-align'>Login</h3>
          </div>
          <form action='' className='register-form' onSubmit={onSumbmit}>
            <label htmlFor='email' className='register-label'>
              Email
            </label>
            <input
              onChange={(e) => onChange(e)}
              type='text'
              id='email'
              value={email}
              className='register-input'
              placeholder='Email address'
              name='email'
              required
            />

            <label htmlFor='password' className='register-label'>
              Password
            </label>
            <input
              onChange={(e) => onChange(e)}
              type='password'
              id='password'
              value={password}
              name='password'
              className='register-input'
              placeholder='Password'
              required
            />
            <button type='submit' className='register-btn'>
              Login
            </button>
            <Link
              to='/register'
              className='register-login'
              style={{
                textDecoration: 'underline',
              }}
            >
              Not a member yet?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
