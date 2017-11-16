/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import PoliticianItem from '../index';
import { politicians } from '../../../../utils/testFixtures';

storiesOf('Politician Item', module)
  .addDecorator(muiTheme())
  .add('Politician 1', () => <PoliticianItem politician={politicians[0]} />)
  .add('Politician 2', () => <PoliticianItem politician={politicians[1]} />);
