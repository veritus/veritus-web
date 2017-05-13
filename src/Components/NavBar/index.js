/* @flow */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { NavLink } from 'react-router-dom';

const styles = {
  header: {
    textDecoration: 'none',
    color: '#fff',
  },
  link: {
    textDecoration: 'none',
  },
};

export class NavBar extends React.Component {
  state: {
    open: boolean,
  };
  constructor() {
    super();
    this.state = { open: false };
  }

  handleToggle = () => this.setState(prevState => ({ open: !prevState.open }));

  render() {
    return (
      <div>
        <AppBar
          title={<NavLink to="/" style={styles.header}>Veritus</NavLink>}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={this.handleToggle}>
          <MenuItem>
            <NavLink to="/login" onClick={this.handleToggle} style={styles.link}>
              Login
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/sign-up" onClick={this.handleToggle} style={styles.link}>
              Sign up
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/add-promise" onClick={this.handleToggle} style={styles.link}>
              Add Promise
            </NavLink>
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
