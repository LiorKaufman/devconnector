import React, { useState } from 'react';
import PropTypes from 'prop-types';

// react router
import { Link, Redirect } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { register } from '../../actions/authActions';

const emptyUser = {
  name: '',
  email: '',
  password: '',
  passwordCheck: '',
};

function Register({ setAlert, register, isAuthenticated }) {
  const [userForm, setUserForm] = useState(emptyUser);

  const { name, email, password, passwordCheck } = userForm;

  const onChange = (e) =>
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });

  const onSumbmit = async (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <div className='container'>
        <div className='register-card'>
          <h3 className='register-title register-align'>Register</h3>
          <p
            className='register-subtitle register-align'
            style={{
              color: '#1fd5b9',
            }}
          >
            it's completely free
          </p>
          <form action='' className='register-form' onSubmit={onSumbmit}>
            <label htmlFor='full-name' className='register-label'>
              Name
            </label>
            <input
              onChange={(e) => onChange(e)}
              type='text'
              id='full-name'
              className='register-input'
              name='name'
              value={name}
              placeholder='Your full name'
            />

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
            />
            <label htmlFor='passwordCheck' className='register-label'>
              Confirm Password
            </label>
            <input
              onChange={(e) => onChange(e)}
              type='password'
              id='passwordCheck'
              className='register-input'
              name='passwordCheck'
              value={passwordCheck}
              placeholder='Confirm Password'
            />
            <button type='submit' className='register-btn'>
              Create Account
            </button>
            <Link to='/login' className='register-login'>
              I'm already a member
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
