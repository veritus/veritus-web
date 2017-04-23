/* @flow */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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
        <AppBar title="Veritus" onLeftIconButtonTouchTap={this.handleToggle} />
        <Drawer open={this.state.open} docked={false} onRequestChange={this.handleToggle}>
          <MenuItem>Placeholder</MenuItem>
          <MenuItem>Placeholder</MenuItem>
          <MenuItem>Placeholder</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
