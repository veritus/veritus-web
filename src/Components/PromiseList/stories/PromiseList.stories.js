/* @flow */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import PromiseList from '../index';
import type { PromiseType } from '../../../types';

const promises: Array<PromiseType> = [
  {
    id: 1,
    title: 'Longer workdays',
    fulfilled: false,
  },
  {
    id: 2,
    title: '3 day weekends',
    fulfilled: true,
  },
];

storiesOf('Promise List', module)
  .addDecorator(muiTheme())
  .add('Default', () => <PromiseList promises={promises} />);
