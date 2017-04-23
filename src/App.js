/* @flow */
import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import NavBar from './Components/NavBar';
import Politicians from './Containers/Politicians';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Politicians />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
