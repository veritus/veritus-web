/* @flow */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import PromiseTable from '../index';
import { promises } from '../../../../utils/testFixtures';

const linkedPromises = promises.map(promise => ({ ...promise, subjects: [] }));

storiesOf('Promise Table', module)
  .addDecorator(muiTheme())
  .add('Default', () =>
    <PromiseTable
      promises={linkedPromises}
      linkSubjectToPromises={action('link subject to promises')}
    />
  );
