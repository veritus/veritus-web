/* @flow */
import type {
  State,
  DetailedDistrictType,
  PromiseType,
  PoliticianType,
  PartyType,
} from '../types';

export const districts: Array<DetailedDistrictType> = [
  {
    name: 'Reykjavik Norður’',
    id: 1,
    abbreviation: 'Reykv. N.',
    politicians: [
      {
        name: 'Andrés Ingi Jónsson',
        id: 1,
        initials: 'AIJ',
        party: {
          name: 'Vinstri Hreyfingin - Grænt Framboð',
          id: 3,
          website: 'http://vg.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [
          {
            name: 'Some title',
            id: 1,
            fulfilled: false,
          },
          {
            name: 'Something simple',
            id: 6,
            fulfilled: false,
          },
        ],
      },
      {
        name: 'Birgir Ármannsson',
        id: 7,
        initials: 'BÁ',
        party: {
          name: 'Sjálfstæðisflokkur',
          id: 1,
          website: 'http://xd.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Birgitta Jónsdóttir',
        id: 8,
        initials: 'BirgJ',
        party: {
          name: 'Píratar',
          id: 5,
          website: 'https://piratar.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Björn Leví Gunnarsson',
        id: 11,
        initials: 'BLG',
        party: {
          name: 'Píratar',
          id: 5,
          website: 'https://piratar.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Björt Ólafsdóttir',
        id: 12,
        initials: 'BjÓ',
        party: {
          name: 'Björt Framtíð',
          id: 4,
          website: 'http://www.bjortframtid.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Guðlaugur Þór Þórðarson',
        id: 20,
        initials: 'GÞÞ',
        party: {
          name: 'Sjálfstæðisflokkur',
          id: 1,
          website: 'http://xd.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Halldóra Mogensen',
        id: 23,
        initials: 'HallM',
        party: {
          name: 'Píratar',
          id: 5,
          website: 'https://piratar.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Katrín Jakobsdóttir',
        id: 31,
        initials: 'Kjak',
        party: {
          name: 'Vinstri Hreyfingin - Grænt Framboð',
          id: 3,
          website: 'http://vg.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Þorsteinn Víglundsson',
        id: 60,
        initials: 'ÞorstV',
        party: {
          name: 'Viðreisn',
          id: 7,
          website: 'https://www.vidreisn.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
    ],
    created: '2017-04-25T17:41:28Z',
    modified: '2017-04-25T17:41:28Z',
  },
  {
    name: 'Suðurkjördæmi',
    id: 2,
    abbreviation: 'Suðurk',
    politicians: [
      {
        name: 'Ari Trausti Guðmundsson',
        id: 2,
        initials: 'ATG',
        party: {
          name: 'Vinstri Hreyfingin - Grænt Framboð',
          id: 3,
          website: 'http://vg.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [
          {
            name: 'Some title',
            id: 4,
            fulfilled: false,
          },
          {
            name: 'Raise taxes',
            id: 5,
            fulfilled: false,
          },
        ],
      },
      {
        name: 'Áslaug Arna Sigurbjörnsdóttir',
        id: 3,
        initials: 'Ásls',
        party: {
          name: 'Sjálfstæðisflokkur',
          id: 1,
          website: 'http://xd.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Ásmundur Friðriksson',
        id: 4,
        initials: 'ÁsF',
        party: {
          name: 'Sjálfstæðisflokkur',
          id: 1,
          website: 'http://xd.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Jóna Sólveig Elínardóttir',
        id: 30,
        initials: 'JSE',
        party: {
          name: 'Viðreisn',
          id: 7,
          website: 'https://www.vidreisn.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Oddný G. Harðardóttir',
        id: 39,
        initials: 'OH',
        party: {
          name: 'Samfylkingin',
          id: 6,
          website: 'http://xs.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Páll Magnússon',
        id: 43,
        initials: 'PállM',
        party: {
          name: 'Sjálfstæðisflokkur',
          id: 1,
          website: 'http://xd.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Sigurður Ingi Jóhannsson',
        id: 48,
        initials: 'SIJ',
        party: {
          name: 'Framsóknarflokkurinn',
          id: 2,
          website: 'https://framsokn.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Silja Dögg Gunnarsdóttir',
        id: 49,
        initials: 'SilG',
        party: {
          name: 'Framsóknarflokkurinn',
          id: 2,
          website: 'https://framsokn.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Smári McCarthy',
        id: 50,
        initials: 'SMc',
        party: {
          name: 'Píratar',
          id: 5,
          website: 'https://piratar.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Unnur Brá Konráðsdóttir',
        id: 55,
        initials: 'UBK',
        party: {
          name: 'Sjálfstæðisflokkur',
          id: 1,
          website: 'http://xd.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
      {
        name: 'Vilhjálmur Árnasson',
        id: 57,
        initials: 'VilÁ',
        party: {
          name: 'Sjálfstæðisflokkur',
          id: 1,
          website: 'http://xd.is/',
          created: '2017-04-25T17:41:28Z',
          modified: '2017-04-25T17:41:28Z',
        },
        promises: [],
      },
    ],
    created: '2017-04-25T17:41:28Z',
    modified: '2017-04-25T17:41:28Z',
  },
];

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

// Redux

export const initialState: State = {
  politicians: {
    politicians: null,
    error: null,
    loading: false,
  },
  promises: {
    promises: null,
    error: null,
    loading: false,
  },
};
