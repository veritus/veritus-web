/* @flow */
import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Politicians from './Containers/Politicians';
import PromiseForm from './Containers/PromiseForm';
import CaseList from './Components/CaseList';
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
            <Route path="/cases" component={CaseList} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
