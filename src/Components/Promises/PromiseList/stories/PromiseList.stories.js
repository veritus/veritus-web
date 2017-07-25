/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import PromiseList from '../index';
import { promises } from '../../../../utils/testFixtures';

storiesOf('Promise List', module)
  .addDecorator(muiTheme())
  .add('Default', () => <PromiseList promises={promises} />);
