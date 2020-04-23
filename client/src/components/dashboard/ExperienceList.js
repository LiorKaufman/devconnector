import React from 'react';

// redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// helpers
import Moment from 'react-moment';
import moment from 'moment';

const ExperienceList = ({ experience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{moment.utc(exp.from)}</Moment> -{' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{moment.utc(exp.to)}</Moment>
        )}
      </td>
      <td>
        <button className='btn btn-danger'>Delete</button>
      </td>
    </tr>
  ));
  return (
    <>
      <div className='main-experience'>
        <h2 className='my-2'>Experience Credentials</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Company</th>
              <th className='hide-sm'>Title</th>
              <th className='hide-sm'>Years</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{experiences}</tbody>
        </table>
      </div>
    </>
  );
};

ExperienceList.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default connect(null)(ExperienceList);