/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { NavLink } from 'react-router-dom';

import { userSelector } from '../../Stores/User/selectors';
import type { State, User } from '../../types';
import { ProfileIcon } from './ProfileIcon';

const styles = {
  header: {
    textDecoration: 'none',
    color: '#fff',
  },
  link: {
    textDecoration: 'none',
  },
  rightNavigationButton: {
    marginTop: 0, // Nullify default styles imposed by AppBar
  },
};

type OwnProps = {};
type ReduxProps = {
  user: ?User,
};

type Props = OwnProps & ReduxProps;

export class NavBar extends React.Component {
  state: {
    open: boolean,
  };
  props: Props;
  constructor() {
    super();
    this.state = { open: false };
  }

  handleToggle = () => this.setState(prevState => ({ open: !prevState.open }));

  render() {
    const { user } = this.props;
    return (
      <div>
        <AppBar
          title={<NavLink to="/" style={styles.header}>Veritus</NavLink>}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<ProfileIcon user={user} />}
          iconStyleRight={styles.rightNavigationButton}
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={this.handleToggle}>
          <NavLink to="/login" onClick={this.handleToggle} style={styles.link}>
            <div>
              Login
            </div>
          </NavLink>
          <NavLink to="/sign-up" onClick={this.handleToggle} style={styles.link}>
            <div>
              Sign up
            </div>
          </NavLink>
          <NavLink to="/add-promise" onClick={this.handleToggle} style={styles.link}>
            <div>
              Add Promise
            </div>
          </NavLink>
          <NavLink to="/cases" onClick={this.handleToggle} style={styles.link}>
            <div>
              Cases
            </div>
          </NavLink>
          <NavLink to="/parties" onClick={this.handleToggle} style={styles.link}>
            <div>
              Party
            </div>
          </NavLink>
          <NavLink to="/politicians" onClick={this.handleToggle} style={styles.link}>
            <div>
              Politicians
            </div>
          </NavLink>
          <NavLink to="/promises" onClick={this.handleToggle} style={styles.link}>
            <div>
              Promises
            </div>
          </NavLink>
          <NavLink to="/districts" onClick={this.handleToggle} style={styles.link}>
            <div>
              Districts
            </div>
          </NavLink>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    user: userSelector(state),
  };
};

const connector: Connector<OwnProps, ReduxProps> = connect(mapStateToProps);

export default connector(NavBar);
