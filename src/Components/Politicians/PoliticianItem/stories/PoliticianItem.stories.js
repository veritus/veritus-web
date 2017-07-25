/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import PoliticianItem from '../index';

storiesOf('Politician Item', module)
  .addDecorator(muiTheme())
  .add('High ranked politician', () =>
    <PoliticianItem id={1} name="Jon Jonsson" progress={53} />
  )
  .add('Low ranked politician', () =>
    <PoliticianItem id={1} name="Birgitta Haukdal" progress={23} />
  );
