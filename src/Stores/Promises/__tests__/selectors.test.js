/* @flow */

import { promisesSelector } from '../selectors';
import { initialState, politicians, promises } from '../../../utils/testFixtures';

describe('Promises selector', () => {
  it('loads initial state', () => {
    expect(promisesSelector(initialState)).toEqual(null);
  });

  it('Returns null if politicians arent loaded', () => {
    const loadedState = {
      ...initialState,
      promises: {
        ...initialState.promises,
        promises: [promises[0]],
      },
    };
    expect(promisesSelector(loadedState)).toEqual(null);
  });

  it('Returns promises', () => {
    // TODO use the enriched politician object
    // const politician = {
    //   name: 'Andrés Ingi Jónsson',
    //   id: 1,
    //   initials: 'AIJ',
    //   districtNumber: 10,
    //   party: {
    //     name: 'Vinstri Hreyfingin - Grænt Framboð',
    //     id: 3,
    //     website: 'http://vg.is/',
    //     created: '2017-04-25T17:41:28Z',
    //     modified: '2017-04-25T17:41:28Z',
    //   },
    //   district: {
    //     name: 'Reykjavik Norður’',
    //     id: 1,
    //     abbreviation: 'Reykv. N.',
    //     created: '2017-04-25T17:41:28Z',
    //     modified: '2017-04-25T17:41:28Z',
    //   },
    //   promises: [
    //     {
    //       name: 'Some title',
    //       small_description: 'Another title',
    //       long_description: 'Yet another title',
    //       parliament: {
    //         name: 'Test-Parliament',
    //         id: 1,
    //       },
    //       id: 4,
    //       created: '2017-06-06T19:36:10.404869Z',
    //       modified: '2017-06-06T19:36:10.404898Z',
    //       politician: 2,
    //       party: 1,
    //       fulfilled: false,
    //     },
    //     {
    //       name: 'Raise taxes',
    //       small_description: 'Short description',
    //       long_description: 'long\ndescription\nexplaining the entire thing',
    //       parliament: {
    //         name: 'Test-Parliament',
    //         id: 1,
    //       },
    //       id: 5,
    //       created: '2017-06-06T19:38:33.526074Z',
    //       modified: '2017-06-06T19:38:33.526105Z',
    //       politician: 2,
    //       party: 1,
    //       fulfilled: false,
    //     },
    //   ],
    // };
    const politician = 2;
    const combinedPromise = {
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
      politician: politician,
      party: 1,
      fulfilled: true,
    };

    const loadedState = {
      ...initialState,
      politicians: {
        ...initialState.politicians,
        politicians,
      },
      promises: {
        ...initialState.promises,
        promises: [promises[0]],
      },
    };

    // expect(loadedState).toEqual({});
    expect(promisesSelector(loadedState)).toEqual([combinedPromise]);
  });
});
