import React from 'react';

// react router
import { Link, Redirect } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <div
        className='container-bg'
        style={{
          height: '100vh',
        }}
      >
        <section className='landing'>
          <div className='dark-overlay'>
            <div className='landing-inner'>
              <h1 className='x-large'>Developer Connector</h1>
              <p className='lead'>
                Create a developer profile/portfolio, share posts and get help
                from other developers
              </p>
              <div className='buttons'>
                <Link to='/register' className='btn btn-primary m-1'>
                  Sign Up
                </Link>
                <Link to='/login' className='btn btn-light m-1'>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
