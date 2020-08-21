import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar' style={navStyle}>
      <h1>{title}</h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

const navStyle = {
  display: 'flex',
  alignitems: 'center',
  justifyContent: 'center',
};

export default Navbar;
