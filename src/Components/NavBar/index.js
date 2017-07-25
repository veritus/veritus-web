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
          <NavLink to="/login" onClick={this.handleToggle} style={styles.link}>
            <MenuItem>
              Login
            </MenuItem>
          </NavLink>
          <NavLink to="/sign-up" onClick={this.handleToggle} style={styles.link}>
            <MenuItem>
              Sign up
            </MenuItem>
          </NavLink>
          <NavLink to="/add-promise" onClick={this.handleToggle} style={styles.link}>
            <MenuItem>
              Add Promise
            </MenuItem>
          </NavLink>
          <NavLink to="/cases" onClick={this.handleToggle} style={styles.link}>
            <MenuItem>
              Cases
            </MenuItem>
          </NavLink>
          <NavLink to="/parties" onClick={this.handleToggle} style={styles.link}>
            <MenuItem>
              Party
            </MenuItem>
          </NavLink>
          <NavLink to="/promises" onClick={this.handleToggle} style={styles.link}>
            <MenuItem>
              Promises
            </MenuItem>
          </NavLink>
          <NavLink to="/districts" onClick={this.handleToggle} style={styles.link}>
            <MenuItem>
              Districts
            </MenuItem>
          </NavLink>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
