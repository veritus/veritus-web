/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import PoliticianItem from '../index';
import { politicians, districts, parties } from '../../../../utils/testFixtures';

storiesOf('Politician Item', module)
  .addDecorator(muiTheme())
  .add('Andrés Ingi', () =>
    <PoliticianItem
      politician={politicians[0]}
      district={districts[0]}
      party={parties[0]}
    />
  )
  .add('Óttarr Proppé', () =>
    <PoliticianItem
      politician={politicians[1]}
      district={districts[0]}
      party={parties[0]}
    />
  );
