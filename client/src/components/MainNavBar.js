import React from 'react';

// React router
import { Link } from 'react-router-dom';

// Resources
import BrandLogoImg from '../resources/img/BrandLogo.png';
export default function MainNavBar() {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top border-bottom border-dark'>
      <button
        className='navbar-toggler'
        data-toggle='collapse'
        data-target='#collapse_target'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <Link to='/' className='navbar-brand'>
        <img src={BrandLogoImg} style={{ width: '56px', height: '56px' }} />
      </Link>
      <span className='navbar-text'>DevConnector</span>
      <div className='collapse navbar-collapse' id='collapse_target'>
        <ul
          className='navbar-nav'
          style={{
            color: '#17a2b8',
          }}
        >
          <li className='nav-item'>
            <Link to='/' className='nav-link' href='#'>
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
          <li className='nav-item dropdown'>
            <Link
              to='/'
              className='nav-link dropdown-toggle'
              data-toggle='dropdown'
              data-target='dropdown_target'
              href='#'
            >
              Settings
              <span className='caret'></span>
            </Link>
            <div className='dropdown-menu' aria-labelldby='dropdown_target'>
              <Link to='/' className='dropdown-item'>
                User Settings
              </Link>
              <div className='dropdown-divider'></div>
              <Link to='/' className='dropdown-item'>
                View Settings{' '}
              </Link>
              <div className='dropdown-divider'></div>
              <Link to='/' className='dropdown-item'>
                Some other settings
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
