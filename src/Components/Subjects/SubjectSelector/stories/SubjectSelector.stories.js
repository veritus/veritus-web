/* @flow */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { SubjectSelector } from '../index';
import { subjects } from '../../../../utils/testFixtures';

storiesOf('Subject Selector', module)
  .addDecorator(muiTheme())
  .add('Default', () =>
    <SubjectSelector
      subjects={subjects}
      error={null}
      hasLoadedSubjects={true}
      fetchSubjects={action('fetching-subjects')}
      onSelectSubject={action('submit-called')}
    />
  );
