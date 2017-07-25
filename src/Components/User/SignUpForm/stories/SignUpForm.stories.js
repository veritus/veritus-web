/* @flow */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import SignUpForm from '../index';

storiesOf('Sign up form', module)
  .addDecorator(muiTheme())
  .add('Default', () => <SignUpForm onSubmit={action('submit-called')} />);
