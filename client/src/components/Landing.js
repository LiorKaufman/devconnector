import React from 'react';

// react router
import { Link } from 'react-router-dom';

// Styles
const landingImgContainer = {
  backgroundColor: '#2f4353',
  backgroundImage: 'linear-gradient(315deg, #000000 0%, #7f8c8d 74%)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
};
const boxContainer = {
  height: '100%',
  alignContent: 'center',
  textColor: '#17a2b8',
};

export default function Landing() {
  return (
    <div style={boxContainer}>
      <div className='d-flex justify-content-center h-100'>
        <div className='card landing'>
          <div className='card-header'>
            <h3>Sign In</h3>
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
            <form>
              <div className='input-group form-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='fas fa-user'></i>
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  placeholder='username'
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
                  placeholder='password'
                />
              </div>
              <div className='row align-items-center remember'>
                <input type='checkbox' />
                Remember Me
              </div>
              <Link to='/login' className='btn btn-primary float-right'>
                Login
              </Link>
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
    </div>
  );
}
