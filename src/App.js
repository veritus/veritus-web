/* @flow */
import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Politicians from './Components/Politicians/Politicians';
import PoliticianItemContainer from './Components/Politicians/PoliticianItemContainer';
import CaseContainer from './Components/Cases/Case';
import CaseDetailContainer from './Components/Cases/CaseDetailContainer';
import PromiseFormContainer from './Components/Promises/PromiseFormContainer';
import SignUpContainer from './Components/User/SignUpContainer';
import LoginContainer from './Components/User/LoginContainer';
import PartyContainer from './Components/Parties/Party';
import PartyPromisesContainer from './Components/Parties/PartyPromises';
import PromiseContainer from './Components/Promises/PromiseContainer';
import DistrictContainer from './Components/Districts/DistrictContainer';
import SnackBar from './Components/Utils/SnackBar';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <NavBar />
            <SnackBar />
            <Route exact path="/" component={Politicians} />
            <Route exact path="/politicians" component={Politicians} />
            <Route path="/add-promise" component={PromiseFormContainer} />
            <Route
              exact
              path="/politicians/:politicianId"
              component={PoliticianItemContainer}
            />
            <Route exact path="/cases/:caseId" component={CaseDetailContainer} />
            <Route exact path="/cases" component={CaseContainer} />
            <Route path="/districts" component={DistrictContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/parties" component={PartyContainer} />
            <Route path="/party/:partyId" component={PartyPromisesContainer} />
            <Route path="/promises" component={PromiseContainer} />
            <Route path="/sign-up" component={SignUpContainer} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
