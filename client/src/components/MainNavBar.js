import React from 'react';
import BrandLogoImg from '../resources/img/BrandLogo.png';
export default function MainNavBar() {
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark sticky-top'>
        <button
          className='navbar-toggler'
          data-toggle='collapse'
          data-target='#collapse_target'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <a className='navbar-brand'>
          <img src={BrandLogoImg} style={{ width: '56px', height: '56px' }} />
        </a>
        <span className='navbar-text'>DevConnector</span>
        <div className='collapse navbar-collapse' id='collapse_target'>
          <ul
            className='navbar-nav'
            style={{
              color: '#17a2b8',
            }}
          >
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Profiles
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Register
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Login
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                data-toggle='dropdown'
                data-target='dropdown_target'
                href='#'
              >
                Settings
                <span className='caret'></span>
              </a>
              <div className='dropdown-menu' aria-labelldby='dropdown_target'>
                <a className='dropdown-item'>User Settings</a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item'>View Settings </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item'>Some other settings</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
