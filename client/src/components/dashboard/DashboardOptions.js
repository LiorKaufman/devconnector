import React from 'react';

// react router
import { Link } from 'react-router-dom';

const DashboardOptions = (props) => {
  return (
    <>
      <div>
        <Link
          to='/create-profile'
          className='btn 
             btn-light m-2 ml-4'
        >
          Edit Profile
        </Link>
        <Link
          to='/add-experience'
          className='btn 
             btn-light m-2'
        >
          Add Experience
        </Link>
        <Link
          to='/add-education'
          className='btn 
             btn-light m-2'
        >
          Add Education
        </Link>
      </div>
    </>
  );
};

export default DashboardOptions;
