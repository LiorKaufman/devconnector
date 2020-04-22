import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { removeAlert } from '../../actions/alertActions';

const scrollToRef = () => window.scrollTo(0, 0);
const useMountEffect = (fun) => useEffect(fun, []);

const Alert = ({ alerts, removeAlert }) => {
  useMountEffect(() => scrollToRef());

  scrollToRef();

  const handleDelete = (id) => {
    removeAlert(id);
  };
  return (
    <>
      <div>
        {alerts !== null &&
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
          ))}
      </div>
    </>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, { removeAlert })(Alert);
