/* @flow */

import deepFreeze from 'deep-freeze';
import { promisesSelector, promiseSubjectsSelector } from '../selectors';
import { initialState, politicians, promises } from '../../../utils/testFixtures';
import type { Subject } from '../../../types';

describe('Promises selector', () => {
  it('loads initial state', () => {
    expect(promisesSelector(initialState)).toEqual(null);
  });

  it('Returns promises', () => {
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

    expect(promisesSelector(loadedState)).toEqual([combinedPromise]);
  });

  it('Returns promise with subjects objects', () => {
    const politician = 2;
    const testSubjects: Array<Subject> = [
      {
        id: 3,
        created: 'yesterday',
        description: 'Some descriptive description',
        modified: 'today',
        name: 'Lowering tax',
        number: null,
        parent: null,
        parliament_session: 1,
      },
      {
        id: 6,
        created: 'today',
        description: 'Another descriptive description',
        modified: 'tomorrow',
        name: 'Increase taxes',
        number: null,
        parent: null,
        parliament_session: 1,
      },
    ];

    const decoratedSubjects = [
      {
        ...testSubjects[0],
        subjectPromiseId: 1,
      },
      {
        ...testSubjects[1],
        subjectPromiseId: 2,
      },
    ];

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
      subjects: decoratedSubjects,
    };

    const subjectsPromises = [
      {
        id: 1,
        promise: 4,
        subject: 3,
        created: '2017-11-12T12:24:14.060672Z',
        modified: '2017-11-12T12:24:14.060699Z',
      },
      {
        id: 2,
        promise: 4,
        subject: 6,
        created: '2017-11-12T12:24:14.060672Z',
        modified: '2017-11-12T12:24:14.060699Z',
      },
    ];

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
      subjects: {
        ...initialState.subjects,
        subjects: testSubjects,
      },
      subjectsPromises: {
        ...initialState.subjectsPromises,
        data: subjectsPromises,
      },
    };

    deepFreeze(loadedState);

    expect(promiseSubjectsSelector(loadedState)).toEqual([combinedPromise]);
  });
});
