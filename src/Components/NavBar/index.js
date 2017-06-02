/* @flow */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { NavLink } from 'react-router-dom';

export class NavBar extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  handleToggle = () => this.setState(prevState => ({ open: !prevState.open }));

  render() {
    return (
      <div>
        <AppBar
          title={<NavLink to="/">Veritus</NavLink>}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={this.handleToggle}>
          <MenuItem><NavLink to="/login">Login</NavLink></MenuItem>
          <MenuItem><NavLink to="/sign-up">Sign up</NavLink></MenuItem>
          <MenuItem><NavLink to="/add-promise">Add Promise</NavLink></MenuItem>
          <MenuItem><NavLink to="/cases">Cases</NavLink></MenuItem>
          <MenuItem><NavLink to="/parties">Party</NavLink></MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
