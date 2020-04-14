import React from 'react';

//React router
import { Link } from 'react-router-dom';

const landingStyles = {
  position: 'relative',
  marginTop: '1',
  height: '100vh',
  backgroundColor: 'red',
};

export default function Landing() {
  return (
    <div style={landingStyles}>
      <section className='container mt-3'>
        <div className='jumbotron text-center'>
          <h1 className='display-2'>DevConnector</h1>
          <p className=''>
            DevConnector is a platform for new developers to showcase their work
            and upload their resume.
          </p>
          <div className=''>
            <p>Login or Register to Access DevConnector</p>
            <Link
              to='/register'
              href='#'
              className='btn btn-primary mr-2'
              style={{
                width: '5rem',
              }}
            >
              Register
            </Link>
            <Link
              to='/login'
              href='#'
              className='btn btn-dark ml-2'
              style={{
                width: '5rem',
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
