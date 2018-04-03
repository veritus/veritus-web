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

const defaultVoteRecord = {
  yes: 2,
  no: 34,
  didNotVote: 10,
  althingi_result: 'Fellt',
  votes: [
    {
      vote_record: 1,
      althingi_result: 'já',
      parliament_member: {
        id: 1,
        name: 'One',
        district: {
          id: 1,
          abbreviation: '',
          created: '',
          modified: '',
          name: 'District',
        },
        districtNumber: 1,
        initials: 'O',
        party: 1,
        promises: [],
      },
    },
    {
      vote_record: 1,
      althingi_result: 'nei',
      parliament_member: {
        id: 2,
        name: 'Two',
        district: {
          id: 1,
          abbreviation: '',
          created: '',
          modified: '',
          name: 'District',
        },
        districtNumber: 2,
        initials: 'T',
        party: 2,
        promises: [],
      },
    },
  ],
  case: 2,
  althingi_id: 34553,
};

const loadingCase = null;

storiesOf('CaseDetail Card', module)
  .addDecorator(muiTheme())
  .add('Default', () =>
    <CaseDetail parliamentCase={defaultCase} voteRecord={defaultVoteRecord} />
  )
  .add('Loading', () =>
    <CaseDetail parliamentCase={loadingCase} voteRecord={defaultVoteRecord} />
  );
