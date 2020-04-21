import React from 'react';

//redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// React-router
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authReducer, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !authReducer.isAuthenticated && !authReducer.loading ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  authReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
});

export default connect(mapStateToProps)(PrivateRoute);
