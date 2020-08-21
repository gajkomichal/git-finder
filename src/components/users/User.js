import React, { Fragment, Component } from 'react';
import Loader from '../layout/Loader';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,

      login,
      html_url,
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Loader />;

    return (
      <Fragment>
        <Link to='/' className='btn-back' style={backBtnStyle}>
          Back To Search
        </Link>

        <div className='card' style={cardStyle}>
          <div className='user-container' style={userContainerStyle}>
            <img
              src={avatar_url}
              className='user-image'
              alt=''
              style={userImageStyle}
            />
            <h1>{name}</h1>
            <p>{location && <Fragment>Location: {location}</Fragment>}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn-profile' style={btnProfileStyle}>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

const cardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '1rem',
  boxShadow: '0 1rem 3rem rgba(0, 0, 0, .1)',
  transition: 'transform .3s',
  backfaceVisibility: 'hidden',
  border: 'none',
  borderRadius: '5px',
  padding: '1rem',
  margin: '0.7rem 0',
};

const userContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
};

const backBtnStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
  color: '#fff',
  width: '12rem',
  height: '2rem',
};

const btnProfileStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
  color: '#fff',
  width: '12rem',
  height: '2rem',
};

const userImageStyle = {
  width: '150px',
  borderRadius: '50%',
};

export default User;
