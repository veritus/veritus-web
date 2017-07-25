/* @flow */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import LoginForm from '../index';

storiesOf('Log in form', module)
  .addDecorator(muiTheme())
  .add('Default', () => <LoginForm onSubmit={action('submit-called')} />);
