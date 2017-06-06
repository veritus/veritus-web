/* @flow */
import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactMaterialUiNotifications from 'react-materialui-notifications';

import Notification from './Components/Notification';
import NavBar from './Components/NavBar';
import Politicians from './Containers/Politicians';
import PromiseFormContainer from './Containers/PromiseFormContainer';
import SignUpContainer from './Containers/SignUpContainer';
import LoginContainer from './Containers/LoginContainer';
import CaseContainer from './Containers/Case';
import PartyContainer from './Containers/Party';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Router>
            <div>
              <NavBar />
              <Route exact path="/" component={Politicians} />
              <Route path="/cases" component={CaseContainer} />
              <Route path="/parties" component={PartyContainer} />
              <Route path="/add-promise" component={PromiseFormContainer} />
              <Route path="/sign-up" component={SignUpContainer} />
              <Route path="/login" component={LoginContainer} />
            </div>
          </Router>
          <Notification />
          <ReactMaterialUiNotifications
            desktop={true}
            transitionName={{
              leave: 'dummy',
              leaveActive: 'fadeOut',
              appear: 'dummy',
              appearActive: 'zoomInUp',
            }}
            transitionAppear={true}
            transitionLeave={true}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
