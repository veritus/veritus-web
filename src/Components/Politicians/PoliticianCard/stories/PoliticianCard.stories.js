/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import PoliticianCard from '../index';
import { politicians } from '../../../../utils/testFixtures';

storiesOf('Politican Card', module)
  .addDecorator(muiTheme())
  .add('Default', () => <PoliticianCard politician={politicians[0]} progress={53} />);
