import React, { useState } from 'react';

// react router
import { Link } from 'react-router-dom';

const emptyLoginForm = {
  email: '',
  password: '',
};

export default function Landing() {
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
    <div
      className='container register'
      style={{
        height: '100vh',
      }}
    >
      <div className='card landing-card'>
        <div className='card-header'>
          <h3>Login</h3>
          <div className='d-flex justify-content-end social_icon'>
            <span
              style={{
                color: '#3b5998',
              }}
            >
              <i className='fab fa-facebook-square'></i>
            </span>
            <span
              style={{
                color: '#eeeeee',
              }}
            >
              <i className='fab fa-google-plus-square'></i>
            </span>
            <span
              style={{
                color: '#08a0e9',
              }}
            >
              <i className='fab fa-twitter-square'></i>
            </span>
          </div>
        </div>
        <div className='card-body'>
          <form onSubmit={onSumbmit}>
            <div className='input-group form-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='fas fa-user'></i>
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                name='email'
                placeholder='Email'
                value={email}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='input-group form-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='fas fa-key'></i>
                </span>
              </div>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='row align-items-center remember'>
              <input type='checkbox' />
              Remember Me
            </div>
            <button type='submit' className='btn btn-primary float-right'>
              Login
            </button>
          </form>
        </div>
        <div className='card-footer'>
          <div className='d-flex justify-content-center links'>
            Don't have an account?
            <Link to='/register'>Sign Up</Link>
          </div>
          <div className='d-flex justify-content-center'>
            <a href='/register'>Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
