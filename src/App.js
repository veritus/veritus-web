/* @flow */
import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Politicians from './Containers/Politicians';
import PromiseForm from './Containers/PromiseForm';
import SignUpForm from './Containers/SignUpForm';
import LoginForm from './Containers/LoginForm';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Politicians} />
            <Route path="/add-promise" component={PromiseForm} />
            <Route path="/sign-up" component={SignUpForm} />
            <Route path="/login" component={LoginForm} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
