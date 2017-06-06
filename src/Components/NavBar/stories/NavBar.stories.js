/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import NavBar from '../index';

storiesOf('Navigation Bar', module)
  .addDecorator(muiTheme())
  .add('Default', () => <NavBar />);
