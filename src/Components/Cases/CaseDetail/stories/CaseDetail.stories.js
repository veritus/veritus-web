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
  althingi_status: 'althingi_status',
  althingi_link: 'althingi_link',
  case_creators: [1, 2],
};

const loadingCase = null;

storiesOf('CaseDetail Card', module)
  .addDecorator(muiTheme())
  .add('Default', () => <CaseDetail parliamentCase={defaultCase} />)
  .add('Loading', () => <CaseDetail parliamentCase={loadingCase} />);
