import React from 'react';
import Spinner from '../layout/Spinner';

//redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// React-router
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      loading ? (
        <div className='container-bg' style={{ height: '100vh' }}>
          <Spinner />
        </div>
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
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
