/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import CaseDetail from '../index';

const defaultCase = {
  id: 1,
  name: 'Name',
  number: 1,
  case_type: 'type',
  status: 'status',
  parliament_session: 2,
  created: 'created',
  modified: 'modified',
};

const loadingCase = null;

storiesOf('CaseDetail Card', module)
  .addDecorator(muiTheme())
  .add('Default', () => <CaseDetail case={defaultCase} />)
  .add('Loading', () => <CaseDetail case={loadingCase} />);
