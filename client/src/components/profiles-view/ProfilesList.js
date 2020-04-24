import React, { useEffect } from 'react';

// components
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfilesItem';

//redux
import PropTypes from 'prop-types';
import { getAllProfiles } from '../../actions/profileActions';
import { connect } from 'react-redux';
// react

const ProfilesList = ({ getAllProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getAllProfiles();
  }, [getAllProfiles]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className='grid-container'>
            <header className='header'>Developers</header>
            <main className='main'>
              <div className='main-overview'>
                <div className='overviewcard'>
                  <h2> Browse and connect with developers</h2>
                </div>
              </div>
              {profiles.length > 0 ? (
                <div className='main-cards'>
                  {profiles.map((profile) => (
                    <ProfileItem key={profile._id} profile={profile} />
                  ))}
                </div>
              ) : (
                <h4>No Profiles found...</h4>
              )}
            </main>

            <footer className='footer'></footer>
          </div>
        </>
      )}
    </>
  );
};

ProfilesList.propTypes = {
  getAllProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getAllProfiles })(ProfilesList);
