import React from 'react';

// react router
import { Link } from 'react-router-dom';

//redux
import PropTypes from 'prop-types';

const DashboardOptions = (props) => {
  return (
    <>
      <div>
        <Link
          to='create-profile'
          className='btn 
             btn-light m-2 ml-4'
        >
          Edit Profile
        </Link>
        <Link
          to=''
          className='btn 
             btn-light m-2'
        >
          Add Experience
        </Link>
        <Link
          to=''
          className='btn 
             btn-light m-2'
        >
          Add Education
        </Link>
      </div>
    </>
  );
};

DashboardOptions.propTypes = {};

export default DashboardOptions;
