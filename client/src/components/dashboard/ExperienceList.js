import React from 'react';

// redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profileActions';

// helpers
import Moment from 'react-moment';
import moment from 'moment';

const ExperienceList = ({ experience, deleteExperience }) => {
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
        <button
          className='btn btn-danger'
          onClick={() => deleteExperience(exp._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <>
      <div className='main-experience'>
        <h2 className='my-2'>Experience Credentials</h2>
        <table className='table table-dark'>
          <thead className='thead-dark'>
            <tr>
              <th>Company</th>
              <th scope='col' className='hide-sm'>
                Title
              </th>
              <th scope='col' className='hide-sm'>
                Years
              </th>
              <th scope='col' className='hide-sm'></th>
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
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(ExperienceList);
