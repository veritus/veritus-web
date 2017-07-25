/* @flow */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import PromiseForm from '../index';

import { parties, politicians } from '../../../utils/testFixtures';

storiesOf('Promise Form', module)
  .addDecorator(muiTheme())
  .add('Default', () =>
    <PromiseForm
      onSubmit={action('submit-called')}
      parties={parties}
      politicians={politicians}
    />
  );
