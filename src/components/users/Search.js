import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='form' style={formStyle}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.handleChange}
            style={inputStyle}
          />
          <input
            type='submit'
            value='Search'
            className='search-input'
            style={btnStyle}
          />
        </form>
      </div>
    );
  }
}
const formStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};
const inputStyle = {
  width: '50%',
  border: '4px solid #000',
  borderRadius: '0px',
  textAlign: 'center',
};
const btnStyle = {
  backgroundColor: '#000',
  color: '#fff',
  width: '12rem',
  height: '3rem',
};

export default Search;
