/* @flow */
import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import NavBar from '../index';

storiesOf('Navigation Bar', module)
  .addDecorator(muiTheme())
  .add('Default', () => <NavBar />);
