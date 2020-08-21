import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='user-card' style={userCardStyle}>
      <img
        src={avatar_url}
        alt=''
        className='user-image'
        style={userImageStyle}
      />
      <h3>{login}</h3>
      <div style={btnWrapper}>
        <Link to={`/user/${login}`} className='btn-more' style={btnMoreStyle}>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

const btnMoreStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
  color: '#fff',
  width: '4rem',
};

const userCardStyle = {
  padding: '1rem',
  textAlign: 'center',
  boxShadow: '0 1rem 3rem rgba(0, 0, 0, .1)',
  transition: 'transform .3s',
  backfaceVisibility: 'hidden',
  border: 'none',
  borderRadius: '5px',
};

const btnWrapper = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const userImageStyle = {
  width: '60px',
  borderRadius: '50%',
};

export default UserItem;
