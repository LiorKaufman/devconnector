import React, { useEffect } from 'react';

// components
import Spinner from '../layout/Spinner';

// redux
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import PropTypes from 'prop-types';

// react-router
import { Link } from 'react-router-dom';

export const Dashboard = ({
  getCurrentProfile,
  profile: { profile, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const hasProfile = <div> Has profile</div>;

  const noProfile = (
    <>
      <div className='main-overview'>
        <div className='overviewcard'>Welcome {user && user.name}</div>
      </div>
      <div className='main-cards'>
        <div className='gridcards'>
          <p>
            You have not yet created a profile, would you like to create one?
          </p>
          <Link to='/create-profile' className='main-btn'>
            Create Profile
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div className='grid-container'>
      {loading && profile === null ? (
        <Spinner />
      ) : (
        <>
          <header className='header'>Dashboard</header>

          <main className='main'>
            {profile !== null ? <>{hasProfile}</> : <> {noProfile}</>}
          </main>
        </>
      )}
      <footer className='footer'></footer>
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
