/* @flow */
import React from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { NavLink } from "react-router-dom";

export class NavBar extends React.Component {
  state: {
    open: boolean,
  };
  constructor() {
    super();
    this.state = { open: false };
  }

  handleToggle = () => this.setState((prevState) => ({ open: !prevState.open }));

  render() {
    return (
      <div>
        <AppBar
          title={<NavLink to="/">Veritus</NavLink>}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={this.handleToggle}>
          <MenuItem><NavLink to="/add-promise">Add Promise</NavLink></MenuItem>
          <MenuItem>Placeholder</MenuItem>
          <MenuItem>Placeholder</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
