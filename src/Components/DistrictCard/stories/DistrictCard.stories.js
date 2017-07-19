/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import District from '../index';
import { districts } from '../../../utils/testFixtures';

storiesOf('District Card', module)
  .addDecorator(muiTheme())
  .add('Default', () =>
    <District name={districts[0].name} politicians={districts[0].politicians} />
  );
