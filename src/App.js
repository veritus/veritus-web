/* @flow */
import React, { Component } from 'react';
import { VButton } from './Components/Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log('rendering app');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <VButton>Hello World!</VButton>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
