import React from 'react';

// redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserProfile } from '../../actions/profileActions';

// react-router
import { Link } from 'react-router-dom';

const ProfilesItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
  getUserProfile,
}) => {
  return (
    <div className='gridcard bg-light'>
      <img
        src={avatar}
        alt=''
        style={{
          margin: 'auto',
          borderRadius: '50%',
        }}
      />

      <div>
        <h2>{name}</h2>
        <p>
          {status}
          {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span> {location}</span>}</p>
        <Link to={`profile/${_id}`} className='btn btn-sm btn-primary'>
          View Profile
        </Link>
      </div>
      <ul
        style={{
          listStyle: 'none',
        }}
      >
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='list-item'>
            <i className='fas fa-check'></i>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfilesItem.propTypes = {
  profile: PropTypes.object.isRequired,
  getUserProfile: PropTypes.func.isRequired,
};

export default connect(null, { getUserProfile })(ProfilesItem);
