import React from 'react';

//redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// React-router
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !auth.isAuthenticated && !auth.loading ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
