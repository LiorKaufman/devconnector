import React, { useState } from 'react';

// react router
import { Link } from 'react-router-dom';

const emptyUser = {
  name: '',
  email: '',
  password: '',
  passwordCheck: '',
};

export default function Register() {
  const [userForm, setUserForm] = useState(emptyUser);

  const { name, email, password, passwordCheck } = userForm;

  const onChange = (e) =>
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });

  const onSumbmit = (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      console.log('Passowrds dont match');
    } else {
      console.log(userForm);
    }
  };

  return (
    <>
      <div className='container register'>
        <div className='registration-body register-card'>
          <div>
            <h3 className='register-title register-align'>Register</h3>
            <p
              className='register-subtitle register-align'
              style={{
                color: '#1fd5b9',
              }}
            >
              it's completely free
            </p>
          </div>
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
              required
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
              required
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
