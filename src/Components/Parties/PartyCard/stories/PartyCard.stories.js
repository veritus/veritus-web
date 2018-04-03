/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import PartyCard from '../index';
import { parties } from '../../../../utils/testFixtures';
storiesOf('Party Card', module)
  .addDecorator(muiTheme())
  .add('Default', () => <PartyCard party={parties[0]} />);
