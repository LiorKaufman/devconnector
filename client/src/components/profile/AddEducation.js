import React, { useState } from 'react';

// redux
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profileActions';
import PropTypes from 'prop-types';

// react-router
import { Link, withRouter } from 'react-router-dom';

const defaultState = {
  school: '',
  degree: '',
  fieldofstudy: '',
  from: '',
  to: '',
  current: false,
  description: '',
};

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState(defaultState);

  const [currentlyAttending, setCurrentlyAttending] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, history);
  };

  return (
    <>
      <div className='grid-container'>
        <header className='header'> Add Your Education</header>
        <div className='main py-1 pl-2 pr-2 '>
          <div className='main-header'>
            <p> Add any relevant education that you have had in the past </p>
          </div>
          <form onSubmit={(e) => onSubmit(e)} className='grid-center'>
            <div className='form-group'>
              <label htmlFor='school' className='profile-label'>
                School
              </label>
              <input
                id='school'
                className='form-control'
                type='text'
                placeholder='School Name'
                name='school'
                value={school}
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='degree' className='profile-label'>
                Degree
              </label>
              <input
                id='degree'
                className='form-control'
                type='text'
                placeholder='Degree or Certificate'
                name='degree'
                value={degree}
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='fieldofstudy' className='profile-label'>
                Field of Study
              </label>
              <input
                id='fieldofstudy'
                className='form-control'
                type='text'
                placeholder='Field of Study'
                name='fieldofstudy'
                value={fieldofstudy}
                onChange={onChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='description' className='profile-label'>
                Program Description
              </label>
              <textarea
                id='description'
                className='form-control'
                placeholder='Job Description'
                name='description'
                value={description}
                onChange={onChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='from' className='profile-label'>
                From Date
              </label>
              <input
                className='form-control'
                id='from'
                type='date'
                name='from'
                value={from}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <p>
                Currently Attending
                <input
                  className=' ml-2'
                  type='checkbox'
                  name='current'
                  checked={current}
                  value={current}
                  onChange={() => {
                    setFormData({ ...formData, current: !current });
                    setCurrentlyAttending(!currentlyAttending);
                  }}
                />{' '}
              </p>
            </div>
            <div className='form-group'>
              <label htmlFor='to' className='profile-label'>
                To Date
              </label>
              <input
                id='to'
                className='form-control'
                type='date'
                name='to'
                value={to}
                onChange={(e) => onChange(e)}
                disabled={currentlyAttending ? true : false}
              />
            </div>

            <input className='form-control btn-dark mb-2' type='submit' />
            <Link to='/dashboard'>
              <button className='form-control btn-warning my-2 mb-2'>
                Go Back
              </button>
            </Link>
          </form>
        </div>
        <footer className='footer'>
          <div className='footer'> 2020</div>
          <div className='footer'>Made by Lior Kaufman</div>
        </footer>
      </div>
    </>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
