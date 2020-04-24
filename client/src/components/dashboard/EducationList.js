import React from 'react';

// redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profileActions';

// helpers
import Moment from 'react-moment';
import moment from 'moment';

const EducationList = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{moment.utc(edu.from)}</Moment> -{' '}
        {edu.to === null ? (
          ' Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{moment.utc(edu.to)}</Moment>
        )}
      </td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => deleteEducation(edu._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <>
      <div className='main-education'>
        <h2 className='my-2'>Education Credentials</h2>
        <table className='table table-dark'>
          <thead className='thead-dark'>
            <tr>
              <th>School</th>
              <th scope='col' className='hide-sm'>
                Degree
              </th>
              <th scope='col' className='hide-sm'>
                Years
              </th>
              <th scope='col' className='hide-sm'></th>
            </tr>
          </thead>
          <tbody>{educations}</tbody>
        </table>
      </div>
    </>
  );
};

EducationList.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(EducationList);
