import React, { Fragment } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    loading: false,
    alert: null,
  };

  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  getUser = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}`);

    this.setState({ user: res.data, loading: false });
  };

  setAlert = (msg) => {
    this.setState({ alert: msg });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container' style={containerStyle}>
          <Alert alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={this.state.users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const containerStyle = {
  maxWidth: '1100px',
  margin: 'auto',
  overflow: 'hidden',
  padding: '0 2rem',
};

export default App;
