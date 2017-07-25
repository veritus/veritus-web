/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import PromiseTable from '../index';
import { promises } from '../../../../utils/testFixtures';

storiesOf('Promise Table', module)
  .addDecorator(muiTheme())
  .add('Default', () => <PromiseTable promises={promises} />);
