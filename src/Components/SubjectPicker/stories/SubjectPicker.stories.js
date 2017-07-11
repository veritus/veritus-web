/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { muiTheme } from 'storybook-addon-material-ui';
import SubjectPicker from '../index';

storiesOf('Subject Picker', module)
  .addDecorator(centered)
  .addDecorator(muiTheme())
  .add('Default', () => <SubjectPicker />);
