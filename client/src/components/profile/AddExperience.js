import React, { useState } from 'react';

// redux
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profileActions';
import PropTypes from 'prop-types';

// react-router
import { Link, withRouter } from 'react-router-dom';

const defaultState = {
  company: '',
  title: '',
  location: '',
  from: '',
  to: '',
  current: false,
  description: '',
};

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState(defaultState);

  const [currentJob, setCurrentJob] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, history);
  };

  return (
    <>
      <div className='grid-container'>
        <header className='header'> Add Experience</header>
        <div className='main py-1 pl-2 pr-2'>
          <div className='main-header'>
            <p> Add any relevant positions that you have had in the past </p>
          </div>
          <form onSubmit={(e) => onSubmit(e)} className='grid-center'>
            <div className='form-group'>
              <label htmlFor='company' className='profile-label'>
                Company
              </label>
              <input
                id='company'
                className='form-control'
                type='text'
                placeholder='Company'
                name='company'
                value={company}
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='title' className='profile-label'>
                Position
              </label>
              <input
                id='title'
                className='form-control'
                type='text'
                placeholder='Position or Title'
                name='title'
                value={title}
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='location' className='profile-label'>
                Location
              </label>
              <input
                id='location'
                className='form-control'
                type='text'
                placeholder='Location'
                name='location'
                value={location}
                onChange={onChange}
              />
              <small className='form-text'>
                City & state suggested (eg. Boston, MA)
              </small>
            </div>

            <div className='form-group'>
              <label htmlFor='description' className='profile-label'>
                Describe your job...
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
                Current Job
                <input
                  className=' ml-2'
                  type='checkbox'
                  name='current'
                  checked={current}
                  value={current}
                  onChange={() => {
                    setFormData({ ...formData, current: !current });
                    setCurrentJob(!currentJob);
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
                disabled={currentJob ? true : false}
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
          <div className='footer'> 2020 MTH</div>
          <div className='footer'>Made with love by pure genius</div>
        </footer>
      </div>
    </>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));
