import React, { useState, useEffect } from 'react';

//react-router
import { Link, withRouter } from 'react-router-dom';

// redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';

const defaultState = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: '',
};
const CreateProfile = ({
  profile: { profile, loading },
  getCurrentProfile,
  createProfile,
  history,
}) => {
  const [formData, setFormData] = useState(defaultState);
  const [displaySocialInputs, toggleSocialInputs] = useState(true);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...defaultState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(', ');
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    createProfile(formData, history, profile ? true : false);
  };
  return (
    <>
      <div className='grid-container'>
        <header className='header'> Create Profile</header>
        <div className='main py-1 pl-2 pr-2 '>
          <form onSubmit={(e) => onSubmit(e)} className='grid-center'>
            <div className='form-group'>
              <label htmlFor='status' className='profile-label'>
                Status
              </label>
              <select
                id='status'
                className='form-control'
                name='status'
                value={status}
                onChange={onChange}
              >
                <option>* Select Professional Status</option>
                <option value='Developer'>Developer</option>
                <option value='Junior Developer'>Junior Developer</option>
                <option value='Senior Developer'>Senior Developer</option>
                <option value='Manager'>Manager</option>
                <option value='Student or Learning'>Student or Learning</option>
                <option value='Instructor'>Instructor or Teacher</option>
                <option value='Intern'>Intern</option>
                <option value='Other'>Other</option>
              </select>
              <small className='form-text'>
                Give us an idea of where you are at in your career
              </small>
            </div>
            <div className='form-group'>
              <label htmlFor='company' className='profile-label'>
                Company
              </label>
              <input
                id='company'
                className='form-control'
                type='text'
                placeholder='Company'
                name='company'
                value={company}
                onChange={onChange}
              />
              <small className='form-text'>
                Could be your own company or one you work for
              </small>
            </div>
            <div className='form-group'>
              <label htmlFor='website' className='profile-label'>
                Website
              </label>
              <input
                id='website'
                className='form-control'
                type='text'
                placeholder='Website'
                name='website'
                value={website}
                onChange={onChange}
              />
              <small className='form-text'>
                Could be your own or a company website
              </small>
            </div>
            <div className='form-group'>
              <label htmlFor='location' className='profile-label'>
                Location
              </label>
              <input
                id='location'
                className='form-control'
                type='text'
                placeholder='Location'
                name='location'
                value={location}
                onChange={onChange}
              />
              <small className='form-text'>
                City & state suggested (eg. Boston, MA)
              </small>
            </div>
            <div className='form-group'>
              <label htmlFor='skills' className='profile-label'>
                Skills
              </label>
              <input
                id='skills'
                className='form-control'
                type='text'
                placeholder='* Skills'
                name='skills'
                value={skills}
                onChange={onChange}
              />
              <small className='form-text'>
                Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
              </small>
            </div>
            <div className='form-group'>
              <label htmlFor='githubusername' className='profile-label'>
                Github user name
              </label>
              <input
                id='githubusername'
                className='form-control'
                type='text'
                placeholder='Github Username'
                name='githubusername'
                value={githubusername}
                onChange={onChange}
              />
              <small className='form-text'>
                If you want your latest repos and a Github link, include your
                username
              </small>
            </div>
            <div className='form-group'>
              <label htmlFor='bio' className='profile-label'>
                Tell us a little about yourself
              </label>
              <textarea
                id='bio'
                className='form-control'
                placeholder='A short bio of yourself'
                name='bio'
                value={bio}
                onChange={onChange}
              />
            </div>

            <span className='mr-1'>Optional</span>
            <div className='my-2'>
              <button
                onClick={() => toggleSocialInputs(!displaySocialInputs)}
                type='button'
                className='btn btn-light'
              >
                Add Social Network Links
              </button>
            </div>

            {displaySocialInputs && (
              <>
                <div className='form-group social-input'>
                  <i className='fab fa-twitter fa-2x' />
                  <label htmlFor='twitter' className='profile-label'>
                    Twitter
                  </label>
                  <input
                    id='twitter'
                    className='form-control'
                    type='text'
                    placeholder='Twitter URL'
                    name='twitter'
                    value={twitter}
                    onChange={onChange}
                  />
                </div>

                <div className='form-group'>
                  <i className='fab fa-facebook fa-2x' />
                  <label htmlFor='facebook' className='profile-label'>
                    Facebook
                  </label>
                  <input
                    it='facebook'
                    className='form-control'
                    type='text'
                    placeholder='Facebook URL'
                    name='facebook'
                    value={facebook}
                    onChange={onChange}
                  />
                </div>

                <div className='form-group social-input'>
                  <i className='fab fa-youtube fa-2x' />
                  <label htmlFor='youtube' className='profile-label ml-1'>
                    YouTube
                  </label>
                  <input
                    id='youtube'
                    className='form-control'
                    type='text'
                    placeholder='YouTube URL'
                    name='youtube'
                    value={youtube}
                    onChange={onChange}
                  />
                </div>

                <div className='form-group social-input'>
                  <i className='fab fa-linkedin fa-2x' />
                  <label htmlFor='linkedin' className='profile-label ml-1'>
                    Linkedin
                  </label>
                  <input
                    id='linkedin'
                    className='form-control'
                    type='text'
                    placeholder='Linkedin URL'
                    name='linkedin'
                    value={linkedin}
                    onChange={onChange}
                  />
                </div>

                <div className='form-group social-input'>
                  <i className='fab fa-instagram fa-2x' />
                  <label htmlFor='instagram' className='profile-label ml-1'>
                    Instagram
                  </label>
                  <input
                    id='instagram'
                    className='form-control'
                    type='text'
                    placeholder='Instagram URL'
                    name='instagram'
                    value={instagram}
                    onChange={onChange}
                  />
                </div>
              </>
            )}

            <input className='form-control btn-dark mb-2' type='submit' />
            <Link to='/dashboard'>
              <button className='form-control btn-warning my-2 mb-2'>
                Go Back
              </button>
            </Link>
          </form>
        </div>
        <footer className='footer'>
          <div className='footer'> 2020 MTH</div>
          <div className='footer'>Made with love by pure genius</div>
        </footer>
      </div>
    </>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
