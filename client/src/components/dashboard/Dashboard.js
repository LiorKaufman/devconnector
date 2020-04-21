import React, { useEffect } from 'react';

// components
import Spinner from '../layout/Spinner';

// redux
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import PropTypes from 'prop-types';

export const Dashboard = ({
  getCurrentProfile,
  profile: { profile, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <div
      className='container'
      style={{
        height: '100vh',
      }}
    >
      {loading && profile === null ? (
        <Spinner />
      ) : (
        <>
          <h1 className='medium'> Dashboard</h1>
          <p className='lead'>
            <i className='fas fa-user'>Welcome {user && user.name}</i>
          </p>

          {profile !== null ? <>has profile</> : <> no profile</>}
        </>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
