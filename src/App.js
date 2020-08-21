import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          setAlert={this.setAlert}
        />
      </div>
    );
  }
}

export default App;
