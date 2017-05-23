/* @flow */
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import SignUpForm from '../index';

storiesOf('Sign up form', module)
  .addDecorator(muiTheme())
  .add('Default', () => <SignUpForm onSubmit={action('submit-called')} />);
