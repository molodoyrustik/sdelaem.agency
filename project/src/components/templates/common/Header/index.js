import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from './Logo';
import Navigation from './Navigation';
import Search from './Search';

const Header = (props) => {
  const { phone, email } = props.social.acf;
  const { className } = props;
  const customClass = className === undefined ? '' : className;
  return (
    <header className={`header ${customClass}`}>
      <div className="header__logo">
        <Link to="/">
          <Logo className='header__logo-svg'/>
        </Link>
      </div>
      <div className="header__menu">
        <Navigation />
      </div>
      <ul className="header__contact-list">
        <li className="header__contact-item">
          <a className='header__contact-link' href={`tel:+${phone}`}>{phone}</a>
        </li>
        <li className="header__contact-item">
          <a className='header__contact-link' href={`mailto:${email}`}>{email}</a>
        </li>
      </ul>
      <div className="header__search">
        <Search />
      </div>
    </header>
  );
};

export default connect((state) => {
  return {
    social: state.social.social,
  };
})(Header);
