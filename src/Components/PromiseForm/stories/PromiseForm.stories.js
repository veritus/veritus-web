/* @flow */
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import PromiseForm from '../index';

storiesOf('Promise Form', module)
  .addDecorator(muiTheme())
  .add('Default', () => <PromiseForm onSubmit={action('submit-called')} />);
