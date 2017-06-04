/* @flow */
import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Politicians from './Containers/Politicians';
import PromiseFormContainer from './Containers/PromiseFormContainer';
import SignUpContainer from './Containers/SignUpContainer';
import LoginContainer from './Containers/LoginContainer';
import CaseContainer from './Containers/Case';
import PartyContainer from './Containers/Party';
import PartyPromisesContainer from './Containers/PartyPromises';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Politicians} />
            <Route path="/cases" component={CaseContainer} />
            <Route path="/parties" component={PartyContainer} />
            <Route path="/party/:partyId" component={PartyPromisesContainer} />
            <Route path="/add-promise" component={PromiseFormContainer} />
            <Route path="/sign-up" component={SignUpContainer} />
            <Route path="/login" component={LoginContainer} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
