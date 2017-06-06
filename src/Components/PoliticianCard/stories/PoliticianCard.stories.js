/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import PoliticianCard from '../index';
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

storiesOf('Politican Card', module)
  .addDecorator(muiTheme())
  .add('Default', () => (
    <PoliticianCard
      name="Bjarni Ben"
      party="Framsokn"
      progress={53}
      promises={promises}
    />
  ));
