/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import type { User } from '../../../types';
type Props = {
  user: ?User,
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    color: '#fff',
  },
  label: {
    color: '#fff',
  },
};

export const ProfileIcon = (props: Props) =>
  <div style={styles.wrapper}>
    {props.user
      ? props.user.email
      : <Link to="/login">
          <Button label="Login" labelStyle={styles.label} />
        </Link>}
  </div>;
