/* @flow */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import PromiseTable from '../index';
import { promises } from '../../../../utils/testFixtures';

const decoratedSubject = {
  id: 5,
  subjectPromiseId: 33,
  name: 'Zubject',
  created: '2017-06-10T14:06:32.542308Z',
  modified: '2017-06-10T14:06:32.542331Z',
  description: null,
  parliament_session: null,
  number: null,
  parent: null,
};

const decoratedPromises = promises.map(promise => ({
  ...promise,
  subjects: [decoratedSubject],
}));

storiesOf('Promise Table', module)
  .addDecorator(muiTheme())
  .add('Default', () =>
    <PromiseTable
      promises={decoratedPromises}
      linkSubjectToPromises={action('link subject to promises')}
    />
  );
