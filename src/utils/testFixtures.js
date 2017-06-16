/* @flow */
import type { PromiseType, PoliticianType, PartyType } from '../types';

export const promises: Array<PromiseType> = [
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
    fulfilled: false,
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
];

export const politicians: Array<PoliticianType> = [
  {
    name: 'Andrés Ingi Jónsson',
    id: 1,
    initials: 'AIJ',
    districtNumber: 10,
    party: {
      name: 'Vinstri Hreyfingin - Grænt Framboð',
      id: 3,
      website: 'http://vg.is/',
      created: '2017-04-25T17:41:28Z',
      modified: '2017-04-25T17:41:28Z',
    },
    district: {
      name: 'Reykjavik Norður’',
      id: 1,
      abbreviation: 'Reykv. N.',
      created: '2017-04-25T17:41:28Z',
      modified: '2017-04-25T17:41:28Z',
    },
    promises: [
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
        fulfilled: false,
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
    ],
  },
  {
    name: 'Óttarr Proppé',
    id: 41,
    initials: 'ÓP',
    districtNumber: 7,
    party: {
      name: 'Björt Framtíð',
      id: 4,
      website: 'http://www.bjortframtid.is/',
      created: '2017-04-25T17:41:28Z',
      modified: '2017-04-25T17:41:28Z',
    },
    district: {
      name: 'Suðvesturkjördæmi',
      id: 4,
      abbreviation: 'Suðvest.',
      created: '2017-04-25T17:41:28Z',
      modified: '2017-04-25T17:41:28Z',
    },
    promises: [
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
        fulfilled: false,
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
    ],
  },
  {
    name: 'Unnur Brá Konráðsdóttir',
    id: 55,
    initials: 'UBK',
    districtNumber: 8,
    party: {
      name: 'Sjálfstæðisflokkur',
      id: 1,
      website: 'http://xd.is/',
      created: '2017-04-25T17:41:28Z',
      modified: '2017-04-25T17:41:28Z',
    },
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

export const parties: Array<PartyType> = [
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
