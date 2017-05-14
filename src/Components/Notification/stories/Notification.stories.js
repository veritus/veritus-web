/* @flow */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import Notifcation from '../index';

storiesOf('Notification', module)
  .addDecorator(muiTheme())
  .add('Default', () => <Notifcation />);
