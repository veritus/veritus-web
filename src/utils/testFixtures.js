/* @flow */
/* eslint-disable no-magic-numbers */

import type {
  State,
  DetailedDistrictType,
  PromiseType,
  PoliticianType,
  Subject,
} from '../types';
import type { Party } from '../Components/Parties/types.js';

export const districts: Array<DetailedDistrictType> = [
  {
    name: 'Reykjavik Norður’',
    id: 1,
    abbreviation: 'Reykv. N.',
    politicians: [1, 7, 8, 11, 12, 20, 23, 31, 60],
    created: '2017-04-25T17:41:28Z',
    modified: '2017-04-25T17:41:28Z',
  },
  {
    name: 'Suðurkjördæmi',
    id: 2,
    abbreviation: 'Suðurk',
    politicians: [2, 3, 4, 30, 39, 43, 48, 49, 50, 55, 57],
    created: '2017-04-25T17:41:28Z',
    modified: '2017-04-25T17:41:28Z',
  },
];

export const promises = [
  {
    name: 'Some title',
    small_description: 'Another title',
    long_description: 'Yet another title',
    parliament: {
      name: 'Test-Parliament',
      id: 1,
    },
    id: 4,
    created: '2017-06-06T19:36:10.404869Z',
    modified: '2017-06-06T19:36:10.404898Z',
    politician: 2,
    party: 1,
    fulfilled: true,
  },
  {
    name: 'Raise taxes',
    small_description: 'Short description',
    long_description: 'long\ndescription\nexplaining the entire thing',
    parliament: {
      name: 'Test-Parliament',
      id: 1,
    },
    id: 5,
    created: '2017-06-06T19:38:33.526074Z',
    modified: '2017-06-06T19:38:33.526105Z',
    politician: 2,
    party: 1,
    fulfilled: false,
  },
  {
    name: 'Lower taxes',
    small_description: 'Short description',
    long_description: 'long\ndescription\nexplaining the entire thing',
    parliament: {
      name: 'Test-Parliament',
      id: 1,
    },
    id: 6,
    created: '2017-06-06T19:38:33.526074Z',
    modified: '2017-06-06T19:38:33.526105Z',
    politician: 2,
    party: 1,
    fulfilled: false,
  },
  {
    name: 'More transparancy',
    small_description: 'Short description',
    long_description: 'long\ndescription\nexplaining the entire thing',
    parliament: {
      name: 'Test-Parliament',
      id: 1,
    },
    id: 7,
    created: '2017-06-06T19:38:33.526074Z',
    modified: '2017-06-06T19:38:33.526105Z',
    politician: 2,
    party: 1,
    fulfilled: false,
  },
  {
    name: 'Legalize double parking',
    small_description: 'Short description',
    long_description: 'long\ndescription\nexplaining the entire thing',
    parliament: {
      name: 'Test-Parliament',
      id: 1,
    },
    id: 8,
    created: '2017-06-06T19:38:33.526074Z',
    modified: '2017-06-06T19:38:33.526105Z',
    politician: 2,
    party: 1,
    fulfilled: false,
  },
];

export const politicians: Array<PoliticianType> = [
  {
    name: 'Andrés Ingi Jónsson',
    id: 1,
    initials: 'AIJ',
    districtNumber: 10,
    party: 3,
    district: {
      name: 'Reykjavik Norður’',
      id: 1,
      abbreviation: 'Reykv. N.',
      created: '2017-04-25T17:41:28Z',
      modified: '2017-04-25T17:41:28Z',
    },
    promises: [4, 5],
  },
  {
    name: 'Óttarr Proppé',
    id: 41,
    initials: 'ÓP',
    districtNumber: 7,
    party: 4,
    district: {
      name: 'Suðvesturkjördæmi',
      id: 4,
      abbreviation: 'Suðvest.',
      created: '2017-04-25T17:41:28Z',
      modified: '2017-04-25T17:41:28Z',
    },
    promises: [4, 5],
  },
  {
    name: 'Unnur Brá Konráðsdóttir',
    id: 55,
    initials: 'UBK',
    districtNumber: 8,
    party: 1,
    district: {
      name: 'Suðurkjördæmi',
      id: 2,
      abbreviation: 'Suðurk',
      created: '2017-04-25T17:41:28Z',
      modified: '2017-04-25T17:41:28Z',
    },
    promises: [],
  },
];

export const parties: Array<Party> = [
  {
    name: 'Sjálfstæðisflokkur',
    id: 1,
    website: 'http://xd.is/',
    created: '2017-04-25T17:41:28Z',
    modified: '2017-04-25T17:41:28Z',
  },
  {
    name: 'Framsóknarflokkurinn',
    id: 2,
    website: 'https://framsokn.is/',
    created: '2017-04-25T17:41:28Z',
    modified: '2017-04-25T17:41:28Z',
  },
  {
    name: 'Píratar',
    id: 5,
    website: 'https://piratar.is/',
    created: '2017-04-25T17:41:28Z',
    modified: '2017-04-25T17:41:28Z',
  },
];

export const subjects: Array<Subject> = [
  {
    id: 5,
    name: 'Zubject',
    created: '2017-06-10T14:06:32.542308Z',
    modified: '2017-06-10T14:06:32.542331Z',
    description: null,
    parliament_session: null,
    number: null,
    parent: null,
  },
  {
    id: 7,
    name: 'Lower taxes',
    created: '2017-06-10T14:06:32.542308Z',
    modified: '2017-06-10T14:06:32.542331Z',
    description: null,
    parliament_session: null,
    number: null,
    parent: null,
  },
  {
    id: 9,
    name: 'More freedom',
    created: '2017-06-10T14:06:32.542308Z',
    modified: '2017-06-10T14:06:32.542331Z',
    description: null,
    parliament_session: null,
    number: null,
    parent: null,
  },
];

// Redux

export const initialState: State = {
  user: {
    data: null,
    error: null,
    loading: false,
  },
  parties: {
    data: null,
    error: null,
    loading: false,
  },
  politicians: {
    data: null,
    error: null,
    loading: false,
  },
  promises: {
    promises: null,
    error: null,
    loading: false,
  },
  subjects: {
    subjects: null,
    error: null,
    loading: false,
  },
  subjectsPromises: {
    data: null,
    error: null,
    loading: false,
  },
  feedback: {
    message: null,
  },
  cases: {
    data: null,
    error: null,
    loading: false,
  },
};
