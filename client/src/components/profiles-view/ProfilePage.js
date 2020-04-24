import React, { Fragment, useEffect } from 'react';

// redux
import PropTypes from 'prop-types';
import { getUserProfile } from '../../actions/profileActions';
import { connect } from 'react-redux';

//components
import Spinner from '../layout/Spinner';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileTop from './ProfileTop';
import ProfileRepos from './ProfileRepos';

// react-router
import { Link } from 'react-router-dom';

const ProfilePage = ({
  profile: { profile, loading },
  auth,
  getUserProfile,
  match,
}) => {
  const nullProfile = !profile;
  useEffect(() => {
    getUserProfile(match.params.id);
  }, [getUserProfile, match.params.id, nullProfile]);
  return (
    <Fragment>
      <div className='bg-lightblue'>
        <div className='container'>
          {profile === null || loading ? (
            <Spinner />
          ) : (
            <Fragment>
              <Link to='/profiles' className='btn btn-warning my-2 mb-1'>
                Back to Profiles
              </Link>
              {auth.isAuthenticated &&
                auth.loading === false &&
                auth.user._id === profile.user._id && (
                  <Link
                    to='/create-profile'
                    className='btn btn-success my-2 mb-1 ml-2'
                  >
                    {' '}
                    Edit Profile
                  </Link>
                )}

              <div className='profile-grid my-1'>
                <ProfileTop profile={profile} />
                <ProfileAbout profile={profile} />
                <div className='profile-exp p-2'>
                  <h2 className='text-light'>Experience</h2>
                  {profile.experience.length > 0 ? (
                    <Fragment>
                      {profile.experience.map((experience) => (
                        <ProfileExperience
                          key={experience._id}
                          experience={experience}
                        />
                      ))}
                    </Fragment>
                  ) : (
                    <h4>No experience credentials</h4>
                  )}
                </div>
                <div className='profile-edu p-2'>
                  <h2
                    className='text-light
                  '
                  >
                    Education
                  </h2>
                  {profile.education.length > 0 ? (
                    <Fragment>
                      {profile.education.map((education) => (
                        <ProfileEducation
                          key={education._id}
                          education={education}
                        />
                      ))}
                    </Fragment>
                  ) : (
                    <h4>No education credentials</h4>
                  )}
                </div>
                {profile.githubusername && (
                  <ProfileRepos username={profile.githubusername} />
                )}
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

ProfilePage.propTypes = {
  getUserProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getUserProfile })(ProfilePage);
