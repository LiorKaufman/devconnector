import React, { useEffect } from 'react';

// components
import Spinner from '../layout/Spinner';
import DashboardOptions from './DashboardOptions';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';

// redux
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import PropTypes from 'prop-types';

// react-router
import { Link } from 'react-router-dom';

export const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  profile: { profile, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const noProfile = (
    <>
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

          <main className='main-dashboard'>
            <div className='main-overview'>
              <div
                className='overviewcard'
                style={{
                  fontWeight: 'bold',
                }}
              >
                Welcome {user && user.name}
              </div>
            </div>
            {profile !== null ? (
              <>
                <div className='container'>
                  <DashboardOptions />
                  <ExperienceList experience={profile.experience} />
                  <EducationList education={profile.education} />
                  <button
                    className='btn btn-medium btn-danger my-1 mb-2 ml-4'
                    onClick={() => deleteAccount()}
                  >
                    Delete Account
                  </button>
                </div>
              </>
            ) : (
              <> {noProfile}</>
            )}
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
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
