/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import PoliticianCard from '../index';
import type { PromiseType } from '../../../types';
import { politicians } from '../../../utils/testFixtures';

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
  .add('Default', () =>
    <PoliticianCard
      name={politicians[0].name}
      party={politicians[0].party.name}
      progress={53}
      promises={politicians[0].promises}
    />
  );
