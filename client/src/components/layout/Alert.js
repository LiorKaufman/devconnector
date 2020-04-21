import React from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { removeAlert } from '../../actions/alertActions';

const Alert = ({ alerts, removeAlert }) => {
  const handleDelete = (id) => {
    removeAlert(id);
  };
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
        <button
          type='button'
          className='close'
          aria-label='Close'
          onClick={() => handleDelete(alert.id)}
        >
          <span aria-hidden='true'>X</span>
        </button>
      </div>
    ))
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, { removeAlert })(Alert);
