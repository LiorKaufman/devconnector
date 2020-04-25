import React from 'react';

// React router
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/authActions';

// Resources
import BrandLogoImg from '../resources/img/BrandLogo.png';

const MainNavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const logedInUserLinks = (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <Link to='/dashboard' className='nav-link' href='#'>
          <i className='fas fa-user mr-1'></i>
          Dashboard
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/profiles' className='nav-link'>
          Profiles
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/posts' className='nav-link'>
          Posts
        </Link>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#!' onClick={logout}>
          <i className='fas fa-sign-out-alt mr-1'></i>
          Logout
        </a>
      </li>
      <li className='nav-item dropdown'>
        <Link
          to='/'
          className='nav-link dropdown-toggle'
          data-toggle='dropdown'
          data-target='dropdown_target'
          href='#'
        >
          Profile Settings
          <span className='caret'></span>
        </Link>
        <div className='dropdown-menu' aria-labelledby='dropdown_target'>
          <Link to='/add-education' className='dropdown-item'>
            Add Education
          </Link>
          <div className='dropdown-divider'></div>
          <Link to='/add-experience' className='dropdown-item'>
            Add Experience
          </Link>
          <div className='dropdown-divider'></div>
        </div>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='navbar-nav'>
      <li className='nav-item'>
        <Link to='/' className='nav-link'>
          Dashboard
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/profiles' className='nav-link'>
          Profiles
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/register' className='nav-link' href='#'>
          Register
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/login' className='nav-link' href='#'>
          Login
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className='navbar navbar-dark navbar-expand-md bg-dark fixed-top border-bottom border-dark'>
      <button
        className='navbar-toggler'
        data-toggle='collapse'
        data-target='#collapse_target'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <Link to='/' className='navbar-brand'>
        <img
          src={BrandLogoImg}
          style={{ width: '56px', height: '56px' }}
          alt='dev connector brand'
        />
      </Link>
      <span className='navbar-text'>DevConnector</span>
      <div className='collapse navbar-collapse' id='collapse_target'>
        {!loading && <> {isAuthenticated ? logedInUserLinks : guestLinks}</>}
      </div>
    </nav>
  );
};

MainNavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(MainNavBar);
